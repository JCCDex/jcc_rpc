'use strict';
const getUUID = require('jcc_common').getUUID;
const fetch = require('../fetch');
const Basic = require('../basic');

class JcBiz extends Basic {
  constructor(hosts, port, https) {
    super(hosts, port, https);
  }

  async getSmsCode(phone, verifyType) {
    const params = {
      url: this.getHost() + '/app/code/sms/' + getUUID() + '/' + phone,
      method: 'get',
      params: {
        verifyType
      }
    }
    const res = await fetch(params);
    return res;
  }

  async getImgCode() {
    const params = {
      url: this.getHost() + '/app/code/img_code/' + getUUID() + '/' + getUUID(),
      method: 'get'
    }
    const res = await fetch(params);
    return res;
  }

  async checkSmsCode(phone, verifyCode, verifyCodeType) {
    const params = {
      url: this.getHost() + '/app/code/check_sms_code/' + getUUID() + '/' + phone,
      params: {
        verifyCode,
        verifyCodeType
      },
      method: 'get'
    }
    const res = await fetch(params);
    return res;
  }

  async checkImgCode(username, imgCode) {
    const params = {
      url: this.getHost() + '/app/code/check_img_code/' + getUUID() + '/' + username,
      params: {
        verifyImgCode: imgCode
      },
      method: 'get'
    }
    const res = await fetch(params);
    return res;
  }

  async isActive(userName) {
    const params = {
      url: this.getHost() + '/app/user/is_active/' + getUUID() + '/' + userName,
      method: 'get'
    }
    const res = await fetch(params);
    return res;
  }

  async register(userName, password, publicKey, verifyCode, imgCode) {
    const data = {
      password,
      verifyCode,
      publicKey
    }
    if (imgCode && imgCode.length > 0) {
      data.imgCode = imgCode;
    }
    const params = {
      url: this.getHost() + '/app/user/register/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async emailRegister(userName, password, publicKey, verifyCode, imgCode) {
    const data = {
      password,
      verifyCode,
      publicKey
    }
    if (imgCode && imgCode.length > 0) {
      data.imgCode = imgCode;
    }
    const params = {
      url: this.getHost() + '/app/user/email_register/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async login(userName, password, imgCode) {
    const data = {
      password
    }
    if (imgCode && imgCode.length > 0) {
      data.imgCode = imgCode;
    }
    const params = {
      url: this.getHost() + '/app/user/pwd_login/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async logout(userName) {
    const params = {
      url: this.getHost() + '/app/user/logout/' + getUUID() + '/' + userName,
      method: 'post'
    }
    const res = await fetch(params);
    return res;
  }

  async getMyself(userName) {
    const params = {
      url: this.getHost() + '/app/user/get_myself/' + getUUID() + '/' + userName,
      method: 'get',
      params: {
        t: new Date().getTime()
      }
    }
    const res = await fetch(params);
    return res;
  }

  async uploadImage(userName, data) {
    const params = {
      url: this.getHost() + '/app/user/upload_image/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async verify(userName, data) {
    const params = {
      url: this.getHost() + '/app/user/verify/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async changeMobile(phone, verifyCode, password) {
    const data = {
      verifyCode,
      password
    }
    const params = {
      url: this.getHost() + '/app/user/bind_phone/' + getUUID() + '/' + phone,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async changePassword(userName, newPwd, oldPwd) {
    const data = {
      newPwd,
      oldPwd
    }
    const params = {
      url: this.getHost() + '/app/user/change_pwd/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async resetPassword(userName, verifyCode, newPwd) {
    const data = {
      verifyCode,
      newPwd
    }
    const params = {
      url: this.getHost() + '/app/user/reset_pwd/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async bindEmail(userName, email, verifyCode, password) {
    const data = {
      email,
      verifyCode,
      password
    }
    const params = {
      url: this.getHost() + '/app/user/bind_email/' + getUUID() + '/' + userName + '/' + email,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async uploadWallet(userName, publicKey) {
    const params = {
      url: this.getHost() + '/app/user/upload_wallet/' + getUUID() + '/' + userName,
      method: 'post',
      data: {
        publicKey
      }
    }
    const res = await fetch(params);
    return res;
  }

  async getToken(userName) {
    const params = {
      url: this.getHost() + '/app/user/token/' + getUUID() + '/' + userName,
      method: 'get'
    }
    const res = await fetch(params);
    return res;
  }

  async getHelp(url) {
    const params = {
      url: this.getHost() + url,
      method: 'get'
    }
    const res = await fetch(params);
    return res;
  }

  async getAbout(url) {
    const params = {
      url: this.getHost() + url,
      method: 'get'
    }
    const res = await fetch(params);
    return res;
  }

  async createDepositOrder(userName, base, amount, baseWallet, jtWallet, agentWallet, agentID) {
    const data = {
      base,
      amount,
      baseWallet,
      jtWallet,
      agentWallet,
      agentID
    }
    const params = {
      url: this.getHost() + '/app/td/create_order/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async cancelDepositOrder(userName, base, orderID) {
    const data = {
      base,
      orderID
    }
    const params = {
      url: this.getHost() + '/app/td/cancle_order/' + getUUID() + '/' + userName,
      method: 'delete',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async updateDepositOrder(userName, base, orderID, hash) {
    const data = {
      base,
      orderID,
      hash
    }
    const params = {
      url: this.getHost() + '/app/td/update_order/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async getDepositDetail(userName, base, orderID) {
    const params = {
      url: this.getHost() + '/app/td/order_detail/' + getUUID() + '/' + userName,
      method: 'get',
      params: {
        base,
        orderID
      }
    }
    const res = await fetch(params);
    return res;
  }

  async getPendingDeposit(userName, base) {
    const params = {
      url: this.getHost() + '/app/td/pending_order/' + getUUID() + '/' + userName,
      method: 'get',
      params: {
        base
      }
    }
    const res = await fetch(params);
    return res;
  }

  async getDepositOrders(userName, base, page) {
    const params = {
      url: this.getHost() + '/app/td/my_orders/' + getUUID() + '/' + userName,
      method: 'get',
      params: {
        base,
        page
      }
    }
    const res = await fetch(params);
    return res;
  }

  async createWithdrawOrder(userName, base, amount, baseWallet, jtWallet, agentWallet, agentID) {
    const data = {
      base,
      amount,
      baseWallet,
      jtWallet,
      agentWallet,
      agentID
    }
    const params = {
      url: this.getHost() + '/app/tw/create_order/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async getWithdrawOrders(userName, base, page) {
    const params = {
      url: this.getHost() + '/app/tw/my_orders/' + getUUID() + '/' + userName,
      method: 'get',
      params: {
        base,
        page
      }
    }
    const res = await fetch(params);
    return res;
  }

  async updateWithdrawOrder(userName, orderID, hash) {
    const data = {
      orderID,
      hash
    }
    const params = {
      url: this.getHost() + '/app/tw/update_order/' + getUUID() + '/' + userName,
      method: 'post',
      data
    }
    const res = await fetch(params);
    return res;
  }

  async getWithdrawDetail(userName, base, orderID) {
    const params = {
      url: this.getHost() + '/app/tw/order_detail/' + getUUID() + '/' + userName,
      method: 'get',
      params: {
        base,
        orderID
      }
    }
    const res = await fetch(params);
    return res;
  }

  async getAgentInfo(userName, base) {
    const params = {
      url: this.getHost() + '/app/agent/agent_info/' + getUUID() + '/' + userName,
      method: 'get',
      params: {
        base
      }
    }
    const res = await fetch(params);
    return res;
  }

  async getCoinlist(userName) {
    const params = {
      url: this.getHost() + '/app/coin/coin_list/' + getUUID() + '/' + userName,
      method: 'get'
    }
    const res = await fetch(params);
    return res;
  }

  async getNewsReportList(count) {
    const params = {
      url: this.getHost() + '/app/adv/info/' + getUUID(),
      method: 'get',
      params: {
        count
      }
    }
    const res = await fetch(params);
    return res;
  }

  async getNoticeList(type, count) {
    const params = {
      url: this.getHost() + '/app/adv/notice/' + getUUID(),
      method: 'get',
      params: {
        type,
        count
      }
    }
    const res = await fetch(params);
    return res;
  }
}

module.exports = JcBiz;