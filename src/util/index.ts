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

    const get = () => {
        return tasks;
    };

    return {
        add,
        cancel,
        clear,
        get,
        remove
    };
})();

const string2hex = (input: string): string => {
    const str = unescape(encodeURIComponent(input));
    let ouput = "";

    for (let i = 0, len = str.length; i < len; i++) {
        ouput += str.charCodeAt(i).toString(16);
    }
    return ouput.toUpperCase();
};

export const getPath = (config): string | null => {
    let pathname: string | null;
    try {
        const parsedUrl = new url.URL(config.url);
        pathname = string2hex(parsedUrl.pathname + config.method);

    } catch (error) {
        pathname = null;
    }
    return pathname;
};
