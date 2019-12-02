# API of Jingchang Info

## Document

[Interface Documents](https://github.com/JCCDex/JingChang-Document)

## Usage

Call [getConfig](https://github.com/JCCDex/jcc_rpc/blob/master/docs/config.md) firstly. If success, the `infoHosts` value within response as exchange nodes.

```javascript
  const JcInfo = require("jcc_rpc").JcInfo
  // import { JcInfo } from 'jcc_rpc'
  const hosts = ["localhost"]
  const port = 8080
  const https = false
  const inst = new JcInfo(hosts, port, https)
  // or
  // const inst = new JcInfo(["http://localhost:8080"])
```

## APIs

```javascript

/**
 * request ticker info
 *
 * @param {string} base
 * @param {string} counter
 * @returns {Promise<IResponse>}
 * @memberof JcInfo
 */
getTicker(base: string, counter: string): Promise<IResponse>;

/**
 * request all tickers info
 *
 * @returns {Promise<IResponse>}
 * @memberof JcInfo
 */
getAllTickers(): Promise<IResponse>;

/**
 * request order depth
 *
 * @param {string} base
 * @param {string} counter
 * @param {string} type
 * @returns {Promise<IResponse>}
 * @memberof JcInfo
 */
getDepth(base: string, counter: string, type: string): Promise<IResponse>;

/**
 * request kline data
 *
 * @param {string} base
 * @param {string} counter
 * @param {string} type
 * @returns {Promise<IResponse>}
 * @memberof JcInfo
 */
getKline(base: string, counter: string, type: string): Promise<IResponse>;

/**
 * request history
 *
 * @param {string} base
 * @param {string} counter
 * @param {string} type
 * @param {string} time
 * @returns {Promise<IResponse>}
 * @memberof JcInfo
 */
getHistory(base: string, counter: string, type: string, time: string): Promise<IResponse>;

/**
 * request ticker from cmc
 *
 * @param {string} token
 * @param {string} currency
 * @returns {Promise<IResponse>}
 * @memberof JcInfo
 */
getTickerFromCMC(token: string, currency: string): Promise<IResponse>;

```
