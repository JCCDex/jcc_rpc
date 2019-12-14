import { getPath, pendingTasks } from "../util";
const axios = require("axios");
const CancelToken = axios.CancelToken;

const service = axios.create({
  timeout: 30000,
  withCredentials: true
});

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

service.interceptors.request.use(
  (config) => {
    pendingTasks.cancel(config);
    config.cancelToken = new CancelToken((cancel) => {
      const pathname = getPath(config);
      if (pathname) {
        const task = {
          cancel,
          pathname
        };
        pendingTasks.add(task);
      }
    });
    return config;
  },
  (error, response) => {
    console.log(error);
    console.log(response);
  }
);

const handleResponse = (res) => {
  const response: any = {};
  const { data } = res;
  const date = res.headers.date;
  if (isObject(data)) {
    if (data.code === "0") {
      response.result = true;
    } else {
      response.result = false;
    }
    Object.assign(response, data);
  } else {
    response.result = true;
    response.data = data;
  }
  // set server date
  response.date = date;
  return response;
};

service.interceptors.response.use(
  (response) => {
    pendingTasks.remove(response.config);
    return handleResponse(response);
  },
  (error) => {
    pendingTasks.remove(error.config);
    if (axios.isCancel(error)) {
      error.message = "pending request had been canceled";
    }
    return {
      host: error.host,
      msg: error.message,
      port: error.port,
      result: false
    };
  }
);

export default service;
