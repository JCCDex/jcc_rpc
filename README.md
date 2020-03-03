# jcc_rpc

![npm](https://img.shields.io/npm/v/jcc_rpc.svg)
[![Build Status](https://travis-ci.com/JCCDex/jcc_rpc.svg?branch=master)](https://travis-ci.com/JCCDex/jcc_rpc)
[![Coverage Status](https://coveralls.io/repos/github/JCCDex/jcc_rpc/badge.svg?branch=master)](https://coveralls.io/github/JCCDex/jcc_rpc?branch=master)
[![npm downloads](https://img.shields.io/npm/dm/jcc_rpc.svg)](http://npm-stat.com/charts.html?package=jcc_rpc)

## Installation

```javascript
npm install jcc_rpc
```

## Docs

see [docs](https://github.com/JCCDex/jcc_rpc/tree/master/docs)

## SubscribeTask

Added [`SubscribeTask`](https://github.com/JCCDex/jcc_rpc/blob/master/src/subscribe.ts) class since v0.2.3.

```javascript
// By requesting config as an example

const { SubscribeFactory, ConfigFactory } = require("jcc_rpc");

const configInst = ConfigFactory.init(["https://jccdex.cn"]);

const subscribeInst = SubscribeFactory.init();

// task name
const TASK_NAME = "pollingConfig";
// task function
const task = configInst.getConfig.bind(configInst);
// whether polling, default true
const polling = true;
// polling interval, default 5000(ms)
const timer = 10000;

const callback = (err, res) => {
  console.log(err);
  console.log(res);
};

subscribeInst
  // register task
  .register(TASK_NAME, task, polling, timer)
  // watch task
  .on(TASK_NAME, callback)
  // start task
  .start(TASK_NAME)
  // stop polling given task
  .stopPolling(TASK_NAME)
  // remove given task
  .removeTask(TASK_NAME)
  // remove all tasks
  .removeAll()
  // stop polling all tasks
  .stopAll()
  // cancel watch
  .off(TASK_NAME, callback);
```
