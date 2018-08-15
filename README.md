# jc_api

## Exchange API of JC

### Installation

```
  npm install jc_api
```

### Usage

```
  const JcExchange = require("jc_api").jcExchange
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