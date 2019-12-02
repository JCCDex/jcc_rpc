# API of Jingchang Config

## Usage

```javascript
  const JcConfig = require("jcc_rpc").JcConfig
  // import { JcConfig } from 'jcc_rpc'
  const hosts = ["jccdex.cn", "weidex.vip"]
  const port = 443
  const https = true
  const inst = new JcConfig(hosts, port, https)
  // or
  // const inst = new JcConfig(["https://jccdex.cn", "https://weidex.vip"])
```

## APIs

```javascript
/**
 * request config of jccdex
 *
 * `bizHosts`: biz nodes
 *
 * `cfgHosts`: config nodes
 *
 * `exHosts`: exchange nodes
 *
 * `infoHosts`: info nodes
 *
 * `scanHosts`: explorer nodes
 *
 * @returns {Promise<IResponse>}
 * @memberof JcConfig
 */
getConfig(): Promise<IResponse>;
```
