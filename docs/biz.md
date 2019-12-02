# API of Jingchang BIZ

## Usage Example of Biz

```javascript
  const JcBiz = require("jcc_rpc").JcBiz
  // import { JcBiz } from 'jcc_rpc'
  let hosts = ["xxx"]
  let port = 443
  let https = true
  let instance = new JcBiz(hosts, port, https)
```

## getSmsCode

```javascript
let res = await instance.getSmsCode(phone, verifyType)
```

## getImgCode

```javascript
let res = await instance.getImgCode()
```

## checkSmsCode

```javascript
let res = await instance.checkSmsCode(phone, verifyCode, verifyCodeType)
```

## checkImgCode

```javascript
let res = await instance.checkImgCode(username, imgCode)
```

## isActive

```javascript
let res = await instance.isActive(userName)
```

## register

```javascript
let res = await instance.register(userName, password, publicKey, verifyCode, imgCode)
```

## emailRegister

```javascript
let res = await instance.emailRegister(userName, password, publicKey, verifyCode, imgCode)
```

## login

```javascript
let res = await instance.login(userName, password, imgCode)
```

## logout

```javascript
let res = await instance.logout(userName)
```

## getMyself

```javascript
let res = await instance.getMyself(userName)
```

## uploadImage

```javascript
let res = await instance.uploadImage(userName, data)
```

## verify

```javascript
let res = await instance.verify(userName, data)
```

## changeMobile

```javascript
let res = await instance.changeMobile(phone, verifyCode, password)
```

## changePassword

```javascript
let res = await instance.changePassword(userName, newPwd, oldPwd)
```

## resetPassword

```javascript
let res = await instance.resetPassword(userName, verifyCode, newPwd)
```

## bindEmail

```javascript
let res = await instance.bindEmail(userName, email, verifyCode, password)
```

## uploadWallet

```javascript
let res = await instance.uploadWallet(userName, publicKey)
```

## getToken

```javascript
let res = await instance.getToken(userName)
```

## getHelp

```javascript
let res = await instance.getHelp(url)
```

## getAbout

```javascript
let res = await instance.getAbout(url)
```

## createDepositOrder

```javascript
let res = await instance.createDepositOrder(userName, base, amount, baseWallet, jtWallet, agentWallet, agentID)
```

## cancelDepositOrder

```javascript
let res = await instance.cancelDepositOrder(userName, base, orderID)
```

## updateDepositOrder

```javascript
let res = await instance.updateDepositOrder(userName, base, orderID, hash)
```

## getDepositDetail

```javascript
let res = await instance.getDepositDetail(userName, base, orderID)
```

## getPendingDeposit

```javascript
let res = await instance.getPendingDeposit(userName, base)
```

## getDepositOrders

```javascript
let res = await instance.getDepositOrders(userName, base, page)
```

## createWithdrawOrder

```javascript
let res = await instance.createWithdrawOrder(userName, base, amount, baseWallet, jtWallet, agentWallet, agentID)
```

## getWithdrawOrders

```javascript
let res = await instance.getWithdrawOrders(userName, base, page)
```

## updateWithdrawOrder

```javascript
let res = await instance.updateWithdrawOrder(userName, orderID, hash)
```

## getWithdrawDetail

```javascript
let res = await instance.getWithdrawDetail(userName, base, orderID)
```

## getAgentInfo

```javascript
let res = await instance.getAgentInfo(userName, base)
```

## getCoinlist

```javascript
let res = await instance.getCoinlist(userName)
```

## getNewsReportList

```javascript
let res = await instance.getNewsReportList(count)
```

## getNoticeList

```javascript
let res = await instance.getNoticeList(type, count)
```
