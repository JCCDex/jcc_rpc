# jc_api

## Installation

```javascript
npm install jc_api
```

## Exchange API of JC

### Usage Example of Exchange

```javascript
  const JcExchange = require("jcc_api").JcExchange
  // import { JcExchange } from 'jc_api'
  let hosts = ["xxx"]
  let port = 443
  let https = true
  let instance = new JcExchange(hosts, port, https)
```

### getBalances

```javascript
let res = await instance.getBalance(address)
```

### getHistoricTransactions

```javascript
let res = await instance.getHistoricTransactions(address, page, ledger, seq)
```

### getOrders

```javascript
let res = await instance.getOrders(address, page)
```

### createOrder

```javascript
let res = await instance.createOrder(sign)
```

### deleteOrder

```javascript
let res = await instance.deleteOrder(sign)
```

### getSequence

```javascript
let res = await instance.getSequence(address)
```

### transferAccount

```javascript
let res = await instance.transferAccount(sign)
```

## Info API of JC

### Usage Example of Info

```javascript
  const JcInfo = require("jcc_api").JcInfo
  // import { JcInfo } from 'jc_api'
  let hosts = ["xxx"]
  let port = 443
  let https = true
  let instance = new JcInfo(hosts, port, https)
```

### getTicker

```javascript
let res = await instance.getTicker(base, counter)
```

### getAllTickers

```javascript
let res = await instance.getAllTickers()
```

### getDepth

```javascript
let res = await instance.getDepth(base, counter, type)
```

### getKline

```javascript
let res = await instance.getKline(base, counter, type)
```

### getHistory

```javascript
let res = await instance.getHistory(base, counter, type, time)
```