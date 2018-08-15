'use strict';

var axios = require('axios');

var service = axios.create({
    withCredentials: true,
    timeout: 30000
});

var isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

var handleResponse = function handleResponse(res) {
    var response = {};
    if (res.status === 200) {
        var data = res.data;

        if (isObject(data)) {
            if (data.code === '0') {
                response.result = true;
                response.data = data.data;
                response.code = data.code;
                response.msg = data.msg;
            } else {
                response.result = false;
                response.code = data.code;
                response.msg = data.msg;
            }
        } else {
            response.result = true;
            response.data = data;
        }
        return response;
    }
    return {
        result: false,
        msg: res.statusText
    };
};

service.interceptors.response.use(function (response) {
    return handleResponse(response);
}, function (error) {
    return {
        result: false,
        msg: error.message
    };
});

module.exports = service;