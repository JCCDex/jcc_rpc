import * as url from "url";

export const pendingTasks = (() => {
    let tasks = [];

    const remove = (config) => {
        const pathname = getPath(config);
        if (pathname) {
            tasks = tasks.filter((task) => task.pathname !== pathname);
        }
    };

    const cancel = (config) => {
        const pathname = getPath(config);
        if (pathname) {
            const pendings = tasks.filter((task) => task.pathname === pathname);
            for (const pendingTask of pendings) {
                pendingTask.cancel();
            }
            tasks = tasks.filter((task) => task.pathname !== pathname);
        }
    };

    const add = (task) => {
        tasks.push(task);
    };

    const clear = () => {
        tasks = [];
    };

    return {
        add,
        cancel,
        clear,
        remove
    };
})();

export const getPath = (config): string | null => {
    let pathname: string | null;
    try {
        const parsedUrl = new url.URL(config.url);
        pathname = parsedUrl.pathname + config.method;
    } catch (error) {
        pathname = null;
    }
    return pathname;
};
