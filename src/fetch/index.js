'use strict';
const axios = require('axios');

const service = axios.create({
    withCredentials: true,
    timeout: 30000
})

const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

const handleResponse = (res) => {
    let response = {};
    if (res.status === 200) {
        let {
            data
        } = res;
        if (isObject(data)) {
            if (data.code === '0') {
                response.result = true;
                response.data = data.data;
                response.code = data.code;
                response.msg = data.msg;
            } else {
                response.result = false;
                response.code = data.code;
                response.msg = data.msg
            }
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
    return {
        result: false,
        msg: error.message
    }
});

module.exports = service;