import { EventEmitter as Event } from "events";

interface ITaskJob {
  task: (...args) => Promise<any>;
  polling: boolean;
  timer: number;
}

interface ISubscribeTask {
  /**
   * Register task
   *
   * @param {string} taskName
   * @param {(...args) => Promise<any>} task
   * @param {boolean} polling
   * @param {number} timer
   * @returns {ISubscribeTask}
   * @memberof ISubscribeTask
   */
  register(taskName: string, task: (...args) => Promise<any>, polling: boolean, timer: number): ISubscribeTask;
  /**
   * Start task
   *
   * @param {string} taskName
   * @param {*} args
   * @returns {ISubscribeTask}
   * @memberof ISubscribeTask
   */
  start(taskName: string, ...args): ISubscribeTask;
  /**
   * Stop polling
   *
   * @param {string} taskName
   * @returns {SubscribeTask}
   * @memberof ISubscribeTask
   */
  stopPolling(taskName: string): SubscribeTask;
  /**
   * Stop all polling tasks
   *
   * @returns {SubscribeTask}
   * @memberof ISubscribeTask
   */
  stopAll(): SubscribeTask;
  /**
   * Remove registered task
   *
   * @param {string} taskName
   * @returns {SubscribeTask}
   * @memberof ISubscribeTask
   */
  removeTask(taskName: string): SubscribeTask;
  /**
   * Remove all registered tasks
   *
   * @returns {SubscribeTask}
   * @memberof ISubscribeTask
   */
  removeAll(): SubscribeTask;
}

// interface Constructable {
//     new(...args): ISubscribeTask;
// }

export default class SubscribeTask extends Event implements ISubscribeTask {
  private taskMap: Map<string, ITaskJob> = new Map();

  private taskIdMap: Map<string, NodeJS.Timeout> = new Map();

  constructor() {
    super();
  }

  /**
   * Register task
   *
   * @param {string} taskName task name
   * @param {(...args) => Promise<any>} task
   * @param {boolean} [polling=true] whether polling
   * @param {number} [timer=5000] interval time
   * @returns {SubscribeTask}
   * @memberof SubscribeTask
   */
  public register(taskName: string, task: (...args) => Promise<any>, polling = true, timer: number = 5000): SubscribeTask {
    if (this.taskMap.get(taskName) === undefined) {
      const taskJob = { timer, task, polling };
      this.taskMap.set(taskName, taskJob);
    }
    return this;
  }

  /**
   * Start task
   *
   * If polling is true when register, would polling excute the task.
   *
   * Emit event of task name after the task is finished.
   *
   * @param {string} taskName task name
   * @param {*} args
   * @returns {SubscribeTask}
   * @memberof SubscribeTask
   */
  public start(taskName: string, ...args): SubscribeTask {
    const taskJob = this.getTask(taskName);
    if (taskJob) {
      taskJob
        .task(...args)
        .then((res) => {
          this.emit(taskName, null, res);
        })
        .catch((err) => {
          this.emit(taskName, err, null);
        });
      if (taskJob.polling) {
        this.polling(taskName, ...args);
      }
    }
    return this;
  }

  /**
   * Stop polling
   *
   * @param {string} taskName
   * @returns {SubscribeTask}
   * @memberof SubscribeTask
   */
  public stopPolling(taskName: string): SubscribeTask {
    const taskId = this.getTaskId(taskName);
    if (taskId) {
      clearInterval(taskId);
      this.taskIdMap.delete(taskName);
    }
    return this;
  }

  /**
   * Stop all polling tasks
   *
   * @returns {SubscribeTask}
   * @memberof SubscribeTask
   */
  public stopAll(): SubscribeTask {
    this.taskIdMap.forEach((id) => {
      clearInterval(id);
    });
    this.taskIdMap.clear();
    return this;
  }

  /**
   * Remove registered task
   *
   * @param {string} taskName
   * @returns {SubscribeTask}
   * @memberof SubscribeTask
   */
  public removeTask(taskName: string): SubscribeTask {
    this.taskMap.delete(taskName);
    return this;
  }

  /**
   * Remove all registered tasks
   *
   * @returns {SubscribeTask}
   * @memberof SubscribeTask
   */
  public removeAll(): SubscribeTask {
    this.taskMap.clear();
    return this;
  }

  private polling(taskName: string, ...args): SubscribeTask {
    if (!this.getTaskId(taskName)) {
      const taskJob = this.getTask(taskName);
      if (taskJob) {
        const taskId = setInterval(() => {
          this.start(taskName, ...args);
        }, taskJob.timer);
        this.taskIdMap.set(taskName, taskId);
      }
    }
    return this;
  }

  private getTask(taskName: string): ITaskJob {
    return this.taskMap.get(taskName);
  }

  private getTaskId(taskName: string): NodeJS.Timeout {
    return this.taskIdMap.get(taskName);
  }
}
