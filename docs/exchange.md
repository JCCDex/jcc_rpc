# API of Jingchang Exchange

## Document

[Interface Documents](https://github.com/JCCDex/JingChang-Document)

## Usage

Call [getConfig](https://github.com/JCCDex/jcc_rpc/blob/master/docs/config.md) firstly. If success, the `exHosts` value within response as exchange nodes.

```javascript
  const JcExchange = require("jcc_rpc").JcExchange
  // import { JcExchange } from 'jcc_rpc'
  const hosts = ["localhost"]
  const port = 8080
  const https = false
  const inst = new JcExchange(hosts, port, https)
  // or
  // const inst = new JcExchange(["http://localhost:8080"])
```

## APIs

```javascript

/**
 * request balances
 *
 * @param {string} address
 * @returns {Promise<IResponse>}
 * @memberof JcExchange
 */
getBalances(address: string): Promise<IResponse>;

/**
 * request historic transactions
 *
 * @param {string} address
 * @param {number} ledger
 * @param {number} seq
 * @returns {Promise<IResponse>}
 * @memberof JcExchange
 */
getHistoricTransactions(address: string, ledger: number, seq: number): Promise<IResponse>;

/**
 * request historic payments
 *
 * @param {string} address
 * @param {number} ledger
 * @param {number} seq
 * @returns {Promise<IResponse>}
 * @memberof JcExchange
 */
getHistoricPayments(address: string, ledger: number, seq: number): Promise<IResponse>;

/**
 * request current orders
 *
 * @param {string} address
 * @param {number} page
 * @returns {Promise<IResponse>}
 * @memberof JcExchange
 */
getOrders(address: string, page: number): Promise<IResponse>;

/**
 * create an order
 *
 * [How to sign and create](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L99)
 *
 * @param {string} sign
 * @returns {Promise<IResponse>}
 * @memberof JcExchange
 */
createOrder(sign: string): Promise<IResponse>;

/**
 * cancel an order
 *
 * [How to sign and cancel](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L124)
 *
 * @param {string} sign
 * @returns {Promise<IResponse>}
 * @memberof JcExchange
 */
deleteOrder(sign: string): Promise<IResponse>;

/**
 * request sequence
 *
 * @param {string} address
 * @returns {Promise<IResponse>}
 * @memberof JcExchange
 */
getSequence(address: string): Promise<IResponse>;

/**
 * transfer token
 *
 * [How to sign and transfer](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L153)
 *
 * @param {string} sign
 * @returns {Promise<IResponse>}
 * @memberof JcExchange
 */
transferAccount(sign: string): Promise<IResponse>;

/**
 * request order detail
 *
 * @param {string} hash
 * @returns {Promise<IResponse>}
 * @memberof JcExchange
 */
orderDetail(hash: string): Promise<IResponse>;

/**
 * set brokerage
 *
 * @param {string} sign
 * @returns {Promise<IResponse>}
 * @memberof JcExchange
 */
setBrokerage(sign: string): Promise<IResponse>;

```
