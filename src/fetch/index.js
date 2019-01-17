'use strict';
const axios = require('axios');
const CancelToken = axios.CancelToken;

const service = axios.create({
    withCredentials: true,
    timeout: 30000
})

const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

const cancelPendingTask = (config) => {
    pendingTasks.forEach((pendingTask, index) => {
        if (config && pendingTask.url === config.url) {
            pendingTask.cancel();
            pendingTasks.splice(index, 1)
        }
    })
}

let pendingTasks = []

service.interceptors.request.use(config => {
    cancelPendingTask(config)
    config.cancelToken = new CancelToken(cancel => {
        pendingTasks.push({
            'url': config.url,
            'cancel': cancel
        })
    });
    return config;
}, (error, response) => {
    console.log(error)
    console.log(response)
})

const handleResponse = (res) => {
    let response = {};
    if (res.status === 200) {
        let {
            data
        } = res;
        if (isObject(data)) {
            if (data.code === '0') {
                response.result = true;
            } else {
                response.result = false;
            }
            Object.assign(response, data);
        } else {
            response.result = true;
            response.data = data;
        }
        return response
    }
    return {
        result: false,
        msg: res.statusText
    }
}

service.interceptors.response.use(response => {
    return handleResponse(response);
}, (error) => {
    if (axios.isCancel(error)) {
        error.message = "pending request had been canceled";
    }
    return {
        result: false,
        msg: error.message
    }
});

module.exports = service;