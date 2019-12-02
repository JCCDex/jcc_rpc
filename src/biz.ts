import JcBase from "./base";
import fetch from "./fetch";
import { IResponse } from "./types";
const getUUID = require("jcc_common").getUUID;

/**
 * creation example:
 *
 * 1: `new JcBiz(["http://localhost:8080", "https://localhost:8090"])`
 *
 * 2: `new JcBiz(["localhost"], 8080, false)`
 *
 * @export
 * @class JcBiz
 * @extends {JcBase}
 */
export default class JcBiz extends JcBase {
  constructor(...args) {
    super(...args);
  }

  public async getSmsCode(phone, verifyType): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        verifyType
      },
      url: super.getUrl() + "/app/code/sms/" + getUUID() + "/" + phone
    };
    const res = await fetch(params);
    return res;
  }

  public async getImgCode(): Promise<IResponse> {
    const params = {
      method: "get",
      url: super.getUrl() + "/app/code/img_code/" + getUUID() + "/" + getUUID()
    };
    const res = await fetch(params);
    return res;
  }

  public async checkSmsCode(phone, verifyCode, verifyCodeType): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        verifyCode,
        verifyCodeType
      },
      url: super.getUrl() + "/app/code/check_sms_code/" + getUUID() + "/" + phone
    };
    const res = await fetch(params);
    return res;
  }

  public async checkImgCode(username, imgCode): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        verifyImgCode: imgCode
      },
      url: super.getUrl() + "/app/code/check_img_code/" + getUUID() + "/" + username
    };
    const res = await fetch(params);
    return res;
  }

  public async isActive(userName): Promise<IResponse> {
    const params = {
      method: "get",
      url: super.getUrl() + "/app/user/is_active/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async register(userName, password, publicKey, verifyCode, imgCode): Promise<IResponse> {
    const data: any = {
      password,
      publicKey,
      verifyCode
    };
    if (imgCode && imgCode.length > 0) {
      data.imgCode = imgCode;
    }
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/user/register/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async emailRegister(userName, password, publicKey, verifyCode, imgCode): Promise<IResponse> {
    const data: any = {
      password,
      publicKey,
      verifyCode
    };
    if (imgCode && imgCode.length > 0) {
      data.imgCode = imgCode;
    }
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/user/email_register/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async login(userName, password, imgCode): Promise<IResponse> {
    const data: any = {
      password
    };
    if (imgCode && imgCode.length > 0) {
      data.imgCode = imgCode;
    }
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/user/pwd_login/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async logout(userName): Promise<IResponse> {
    const params = {
      method: "post",
      url: super.getUrl() + "/app/user/logout/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getMyself(userName): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        t: new Date().getTime()
      },
      url: super.getUrl() + "/app/user/get_myself/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async uploadImage(userName, data): Promise<IResponse> {
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/user/upload_image/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async verify(userName, data): Promise<IResponse> {
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/user/verify/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async changeMobile(phone, verifyCode, password): Promise<IResponse> {
    const data = {
      password,
      verifyCode
    };
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/user/bind_phone/" + getUUID() + "/" + phone
    };
    const res = await fetch(params);
    return res;
  }

  public async changePassword(userName, newPwd, oldPwd): Promise<IResponse> {
    const data = {
      newPwd,
      oldPwd
    };
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/user/change_pwd/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async resetPassword(userName, verifyCode, newPwd): Promise<IResponse> {
    const data = {
      newPwd,
      verifyCode
    };
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/user/reset_pwd/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async bindEmail(userName, email, verifyCode, password): Promise<IResponse> {
    const data = {
      email,
      password,
      verifyCode
    };
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/user/bind_email/" + getUUID() + "/" + userName + "/" + email
    };
    const res = await fetch(params);
    return res;
  }

  public async uploadWallet(userName, publicKey): Promise<IResponse> {
    const params = {
      data: {
        publicKey
      },
      method: "post",
      url: super.getUrl() + "/app/user/upload_wallet/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getToken(userName): Promise<IResponse> {
    const params = {
      method: "get",
      url: super.getUrl() + "/app/user/token/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getHelp(url): Promise<IResponse> {
    const params = {
      method: "get",
      url: super.getUrl() + url
    };
    const res = await fetch(params);
    return res;
  }

  public async getAbout(url): Promise<IResponse> {
    const params = {
      method: "get",
      url: super.getUrl() + url
    };
    const res = await fetch(params);
    return res;
  }

  public async createDepositOrder(userName, base, amount, baseWallet, jtWallet, agentWallet, agentID): Promise<IResponse> {
    const data = {
      agentID,
      agentWallet,
      amount,
      base,
      baseWallet,
      jtWallet
    };
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/td/create_order/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async cancelDepositOrder(userName, base, orderID): Promise<IResponse> {
    const data = {
      base,
      orderID
    };
    const params = {
      data,
      method: "delete",
      url: super.getUrl() + "/app/td/cancle_order/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async updateDepositOrder(userName, base, orderID, hash): Promise<IResponse> {
    const data = {
      base,
      hash,
      orderID
    };
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/td/update_order/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getDepositDetail(userName, base, orderID): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        base,
        orderID
      },
      url: super.getUrl() + "/app/td/order_detail/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getPendingDeposit(userName, base): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        base
      },
      url: super.getUrl() + "/app/td/pending_order/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getDepositOrders(userName, base, page): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        base,
        page
      },
      url: super.getUrl() + "/app/td/my_orders/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async createWithdrawOrder(userName, base, amount, baseWallet, jtWallet, agentWallet, agentID): Promise<IResponse> {
    const data = {
      agentID,
      agentWallet,
      amount,
      base,
      baseWallet,
      jtWallet
    };
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/tw/create_order/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getWithdrawOrders(userName, base, page): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        base,
        page
      },
      url: super.getUrl() + "/app/tw/my_orders/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async updateWithdrawOrder(userName, orderID, hash): Promise<IResponse> {
    const data = {
      hash,
      orderID
    };
    const params = {
      data,
      method: "post",
      url: super.getUrl() + "/app/tw/update_order/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getWithdrawDetail(userName, base, orderID): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        base,
        orderID
      },
      url: super.getUrl() + "/app/tw/order_detail/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getAgentInfo(userName, base): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        base
      },
      url: super.getUrl() + "/app/agent/agent_info/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getCoinlist(userName): Promise<IResponse> {
    const params = {
      method: "get",
      url: super.getUrl() + "/app/coin/coin_list/" + getUUID() + "/" + userName
    };
    const res = await fetch(params);
    return res;
  }

  public async getNewsReportList(count): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        count
      },
      url: super.getUrl() + "/app/adv/info/" + getUUID()
    };
    const res = await fetch(params);
    return res;
  }

  public async getNoticeList(type, count): Promise<IResponse> {
    const params = {
      method: "get",
      params: {
        count,
        type
      },
      url: super.getUrl() + "/app/adv/notice/" + getUUID()
    };
    const res = await fetch(params);
    return res;
  }
}
