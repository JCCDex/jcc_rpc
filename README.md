# jc_api

## Installation

```javascript
npm install jc_api
```

## Exchange API of JC

### Usage

```javascript
  const JcExchange = require("jc_api").JcExchange
  // import { JcExchange } from 'jc_api'
  let hosts = ["xxx"];
  let port = 443;
  let https = true;
  let instance = new JcExchange(hosts, port, https)
```

### getBalances

### getHistoricTransactions

### getOrders

### createOrder

### deleteOrder

### getSequence

### transferAccount