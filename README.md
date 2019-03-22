# jcc_rpc

![npm](https://img.shields.io/npm/v/jcc_rpc.svg)
[![Build Status](https://travis-ci.com/JCCDex/jcc_rpc.svg?branch=master)](https://travis-ci.com/JCCDex/jcc_rpc)
[![npm downloads](https://img.shields.io/npm/dm/jcc_rpc.svg)](http://npm-stat.com/charts.html?package=jcc_rpc)

## Installation

```javascript
npm install jcc_rpc
```

## Exchange API of JC

[Interface Documents](https://github.com/JCCDex/jcc_server_doc)

### Usage Example of Exchange

Firstly call [getConfig](#config-api-of-jc). If success, the hosts's value is the value of `exHosts` from response.

```javascript
  const JcExchange = require("jcc_rpc").JcExchange
  // import { JcExchange } from 'jcc_rpc'
  let hosts = ["eth626892d.jccdex.cn"]
  let port = 443
  let https = true
  let instance = new JcExchange(hosts, port, https)
```

### getBalances

```javascript
let res = await instance.getBalances(address)
```

Parameters

`address`- `string`

### getHistoricTransactions

```javascript
let res = await instance.getHistoricTransactions(address, ledger, seq)
```

Parameters

`address`- `string`

`ledger` - `number`

`seq` - `number`

### getHistoricPayments

```javascript
let res = await instance.getHistoricPayments(address, ledger, seq)
```

Parameters

`address`- `string`

`ledger` - `number`

`seq` - `number`

### getOrders

```javascript
let res = await instance.getOrders(address, page)
```

Parameters

`address`- `string`

`page` - `number`

### createOrder

```javascript
let res = await instance.createOrder(sign)
```

Parameters

`sign`- `string`

### deleteOrder

```javascript
let res = await instance.deleteOrder(sign)
```

Parameters

`sign`- `string`

### getSequence

```javascript
let res = await instance.getSequence(address)
```

Parameters

`address`- `string`

### transferAccount

```javascript
let res = await instance.transferAccount(sign)
```

Parameters

`sign`- `string`

## Info API of JC

[Interface Documents](https://github.com/JCCDex/jcc_server_doc)

### Usage Example of Info

Firstly call [getConfig](#config-api-of-jc). If success, the hosts's value is the value of `infoHosts` from response.

```javascript
  const JcInfo = require("jcc_rpc").JcInfo
  // import { JcInfo } from 'jcc_rpc'
  let hosts = ["i3b44eb75ef.jccdex.cn"]
  let port = 443
  let https = true
  let instance = new JcInfo(hosts, port, https)
```

### getTicker

```javascript
let res = await instance.getTicker(base, counter)
```

Parameters

`base`- `string`

`counter`- `string`

Example

```js
// request SWTC-CNY info
let res = await instance.getTicker('swt', 'cny')
```

### getAllTickers

includes all tickers info.

```javascript
let res = await instance.getAllTickers()
```

### getDepth

request ask and bid data.

```javascript
let res = await instance.getDepth(base, counter, type)
```

Parameters

`base`- `string`

`counter`- `string`

`type`- `string`

the type value includes `normal` and `more`. if the type is `normal`, maximum length of ask or bid data is 5, otherwise is 50.

Example

```js
// request ask and bid data of SWTC-CNT
let res = await instance.getDepth('swt', 'cnt', 'normal')
```

### getKline

request kline data.

```javascript
let res = await instance.getKline(base, counter, type)
```

Parameters

`base`- `string`

`counter`- `string`

`type`- `string`

the type value includes `hour`、`day`、`week` and `month`.

Example

```js
// request each hour data of SWTC-CNT.
let res = await instance.getKline('swt', 'cnt', 'hour')
```

### getHistory

request historic dealed data.

```javascript
let res = await instance.getHistory(base, counter, type, time)
```

Parameters

`base`- `string`

`counter`- `string`

`type`- `string`

`time`- `timestamp`

the type value includes `all`、`more`、`newest`. if the type is `newest`, the time is required.

### getTickerFromCMC

request token info from coinmarketdata. now support eth and btc.

```javascript
let res = await instance.getTickerFromCMC(token, currency)
```

Parameters

the token value includes `eth` and `btc`, the currency value includes `cny` and `rub` so far.

Example

```js
// request eth's price that currency unit is ￥. if the currency is rub, the currency unit is ₽.
let res = await instance.getTickerFromCMC('eth', 'cny')
```

## Config API of JC

### Usage Example of Config

```javascript
  const JcConfig = require("jcc_rpc").JcConfig
  // import { JcConfig } from 'jcc_rpc'
  let hosts = ["jccdex.cn", "weidex.vip"]
  let port = 443
  let https = true
  let instance = new JcConfig(hosts, port, https)
```

### getConfig

```javascript
let res = await instance.getConfig()
```

## Biz API of JC

### Usage Example of Biz

```javascript
  const JcBiz = require("jcc_rpc").JcBiz
  // import { JcBiz } from 'jcc_rpc'
  let hosts = ["xxx"]
  let port = 443
  let https = true
  let instance = new JcBiz(hosts, port, https)
```

### getSmsCode

```javascript
let res = await instance.getSmsCode(phone, verifyType)
```

### getImgCode

```javascript
let res = await instance.getImgCode()
```

### checkSmsCode

```javascript
let res = await instance.checkSmsCode(phone, verifyCode, verifyCodeType)
```

### checkImgCode

```javascript
let res = await instance.checkImgCode(username, imgCode)
```

### isActive

```javascript
let res = await instance.isActive(userName)
```

### register

```javascript
let res = await instance.register(userName, password, publicKey, verifyCode, imgCode)
```

### emailRegister

```javascript
let res = await instance.emailRegister(userName, password, publicKey, verifyCode, imgCode)
```

### login

```javascript
let res = await instance.login(userName, password, imgCode)
```

### logout

```javascript
let res = await instance.logout(userName)
```

### getMyself

```javascript
let res = await instance.getMyself(userName)
```

### uploadImage

```javascript
let res = await instance.uploadImage(userName, data)
```

### verify

```javascript
let res = await instance.verify(userName, data)
```

### changeMobile

```javascript
let res = await instance.changeMobile(phone, verifyCode, password)
```

### changePassword

```javascript
let res = await instance.changePassword(userName, newPwd, oldPwd)
```

### resetPassword

```javascript
let res = await instance.resetPassword(userName, verifyCode, newPwd)
```

### bindEmail

```javascript
let res = await instance.bindEmail(userName, email, verifyCode, password)
```

### uploadWallet

```javascript
let res = await instance.uploadWallet(userName, publicKey)
```

### getToken

```javascript
let res = await instance.getToken(userName)
```

### getHelp

```javascript
let res = await instance.getHelp(url)
```

### getAbout

```javascript
let res = await instance.getAbout(url)
```

### createDepositOrder

```javascript
let res = await instance.createDepositOrder(userName, base, amount, baseWallet, jtWallet, agentWallet, agentID)
```

### cancelDepositOrder

```javascript
let res = await instance.cancelDepositOrder(userName, base, orderID)
```

### updateDepositOrder

```javascript
let res = await instance.updateDepositOrder(userName, base, orderID, hash)
```

### getDepositDetail

```javascript
let res = await instance.getDepositDetail(userName, base, orderID)
```

### getPendingDeposit

```javascript
let res = await instance.getPendingDeposit(userName, base)
```

### getDepositOrders

```javascript
let res = await instance.getDepositOrders(userName, base, page)
```

### createWithdrawOrder

```javascript
let res = await instance.createWithdrawOrder(userName, base, amount, baseWallet, jtWallet, agentWallet, agentID)
```

### getWithdrawOrders

```javascript
let res = await instance.getWithdrawOrders(userName, base, page)
```

### updateWithdrawOrder

```javascript
let res = await instance.updateWithdrawOrder(userName, orderID, hash)
```

### getWithdrawDetail

```javascript
let res = await instance.getWithdrawDetail(userName, base, orderID)
```

### getAgentInfo

```javascript
let res = await instance.getAgentInfo(userName, base)
```

### getCoinlist

```javascript
let res = await instance.getCoinlist(userName)
```

### getNewsReportList

```javascript
let res = await instance.getNewsReportList(count)
```

### getNoticeList

```javascript
let res = await instance.getNoticeList(type, count)
```