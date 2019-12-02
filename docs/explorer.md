# API of Jingchang Explorer

## Document

[Interface Documents](https://github.com/JCCDex/JingChang-Document)

## Usage

Call [getConfig](https://github.com/JCCDex/jcc_rpc/blob/master/docs/config.md) firstly. If success, the `scanHosts` value within response as explorer nodes.

```javascript
  const JcExplorer = require("jcc_rpc").JcExplorer
  // import { JcExplorer } from 'jcc_rpc'
  const hosts = ["localhost"]
  const port = 8080
  const https = false
  const inst = new JcExplorer(hosts, port, https)
  // const inst = new JcExplorer(["http://localhost:8080"])
```

## APIs

```javascript

/**
 * request balances via explorer
 *
 * @param {string} uuid
 * @param {string} address
 * @returns {Promise<IResponse>}
 * @memberof JcExplorer
 */
getBalances(uuid: string, address: string): Promise<IResponse>;

/**
 * request order detail via explorer
 *
 * @param {string} uuid
 * @param {string} hash
 * @returns {Promise<IResponse>}
 * @memberof JcExplorer
 */
orderDetail(uuid: string, hash: string): Promise<IResponse>;

/**
 * request history via explorer
 *
 * @param {string} uuid
 * @param {string} address
 * @param {number} page
 * @param {number} size
 * @param {{ begin: string, end: string, currency: string, type: string }} options
 * @returns {Promise<IResponse>}
 * @memberof JcExplorer
 */
getHistory(uuid: string, address: string, page: number, size: number, options: { begin: string; end: string; currency: string; type: string; }): Promise<IResponse>;

```
