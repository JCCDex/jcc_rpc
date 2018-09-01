'use strict';
const getUUID = require('jcc_common').getUUID;
const fetch = require('../fetch');
const Basic = require('../basic');

class JcBiz extends Basic {
    constructor(hosts, port, https) {
        super(hosts, port, https);
    }

    async getSmsCode(phone, verifyType) {
        let params = {
            url: this.getHost() + '/app/code/sms/' + getUUID() + '/' + phone,
            method: 'get',
            params: {
                verifyType
            }
        }
        let res = await fetch(params);
        return res;
    }

    async getImgCode() {
        let params = {
            url: this.getHost() + '/app/code/img_code/' + getUUID() + '/' + getUUID(),
            method: 'get'
        }
        let res = await fetch(params);
        return res;
    }

    async checkSmsCode(phone, verifyCode, verifyCodeType) {
        let params = {
            url: this.getHost() + '/app/code/check_sms_code/' + getUUID() + '/' + phone,
            params: {
                verifyCode,
                verifyCodeType
            },
            method: 'get'
        }
        let res = await fetch(params);
        return res;
    }

    async checkImgCode(username, imgCode) {
        let params = {
            url: this.getHost() + '/app/code/check_img_code/' + getUUID() + '/' + username,
            params: {
                verifyImgCode: imgCode
            },
            method: 'get'
        }
        let res = await fetch(params);
        return res;
    }

    async isActive(userName) {
        let params = {
            url: this.getHost() + '/app/user/is_active/' + getUUID() + '/' + userName,
            method: 'get'
        }
        let res = await fetch(params);
        return res;
    }

    async register(userName, password, publicKey, verifyCode, imgCode) {
        let data = {
            password,
            verifyCode,
            publicKey
        }
        if (imgCode && imgCode.length > 0) {
            data.imgCode = imgCode;
        }
        let params = {
            url: this.getHost() + '/app/user/register/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async emailRegister(userName, password, publicKey, verifyCode, imgCode) {
        let data = {
            password,
            verifyCode,
            publicKey
        }
        if (imgCode && imgCode.length > 0) {
            data.imgCode = imgCode;
        }
        let params = {
            url: this.getHost() + '/app/user/email_register/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async login(userName, password, imgCode) {
        let data = {
            password
        }
        if (imgCode && imgCode.length > 0) {
            data.imgCode = imgCode;
        }
        let params = {
            url: this.getHost() + '/app/user/pwd_login/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async logout(userName) {
        let params = {
            url: this.getHost() + '/app/user/logout/' + getUUID() + '/' + userName,
            method: 'post'
        }
        let res = await fetch(params);
        return res;
    }

    async getMyself(userName) {
        let params = {
            url: this.getHost() + '/app/user/get_myself/' + getUUID() + '/' + userName,
            method: 'get',
            params: {
                t: new Date().getTime()
            }
        }
        let res = await fetch(params);
        return res;
    }

    async uploadImage(userName, data) {
        let params = {
            url: this.getHost() + '/app/user/upload_image/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async verify(userName, data) {
        let params = {
            url: this.getHost() + '/app/user/verify/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async changeMobile(phone, verifyCode, password) {
        let data = {
            verifyCode,
            password
        }
        let params = {
            url: this.getHost() + '/app/user/bind_phone/' + getUUID() + '/' + phone,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async changePassword(userName, newPwd, oldPwd) {
        let data = {
            newPwd,
            oldPwd
        }
        let params = {
            url: this.getHost() + '/app/user/change_pwd/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async resetPassword(userName, verifyCode, newPwd) {
        let data = {
            verifyCode,
            newPwd
        }
        let params = {
            url: this.getHost() + '/app/user/reset_pwd/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async bindEmail(userName, email, verifyCode, password) {
        let data = {
            email,
            verifyCode,
            password
        }
        let params = {
            url: this.getHost() + '/app/user/bind_email/' + getUUID() + '/' + userName + '/' + email,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async uploadWallet(userName, publicKey) {
        let params = {
            url: this.getHost() + '/app/user/upload_wallet/' + getUUID() + '/' + userName,
            method: 'post',
            data: {
                publicKey
            }
        }
        let res = await fetch(params);
        return res;
    }

    async getToken(userName) {
        let params = {
            url: this.getHost() + '/app/user/token/' + getUUID() + '/' + userName,
            method: 'get'
        }
        let res = await fetch(params);
        return res;
    }

    async getHelp(url) {
        let params = {
            url: this.getHost() + url,
            method: 'get'
        }
        let res = await fetch(params);
        return res;
    }

    async getAbout(url) {
        let params = {
            url: this.getHost() + url,
            method: 'get'
        }
        let res = await fetch(params);
        return res;
    }

    async createDepositOrder(userName, base, amount, baseWallet, jtWallet, agentWallet, agentID) {
        let data = {
            base,
            amount,
            baseWallet,
            jtWallet,
            agentWallet,
            agentID
        }
        let params = {
            url: this.getHost() + '/app/td/create_order/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async cancelDepositOrder(userName, base, orderID) {
        let data = {
            base,
            orderID
        }
        let params = {
            url: this.getHost() + '/app/td/cancle_order/' + getUUID() + '/' + userName,
            method: 'delete',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async updateDepositOrder(userName, base, orderID, hash) {
        let data = {
            base,
            orderID,
            hash
        }
        let params = {
            url: this.getHost() + '/app/td/update_order/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async getDepositDetail(userName, base, orderID) {
        let params = {
            url: this.getHost() + '/app/td/order_detail/' + getUUID() + '/' + userName,
            method: 'get',
            params: {
                base,
                orderID
            }
        }
        let res = await fetch(params);
        return res;
    }

    async getPendingDeposit(userName, base) {
        let params = {
            url: this.getHost() + '/app/td/pending_order/' + getUUID() + '/' + userName,
            method: 'get',
            params: {
                base
            }
        }
        let res = await fetch(params);
        return res;
    }

    async getDepositOrders(userName, base, page) {
        let params = {
            url: this.getHost() + '/app/td/my_orders/' + getUUID() + '/' + userName,
            method: 'get',
            params: {
                base,
                page
            }
        }
        let res = await fetch(params);
        return res;
    }

    async createWithdrawOrder(userName, base, amount, baseWallet, jtWallet, agentWallet, agentID) {
        let data = {
            base,
            amount,
            baseWallet,
            jtWallet,
            agentWallet,
            agentID
        }
        let params = {
            url: this.getHost() + '/app/tw/create_order/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async getWithdrawOrders(userName, base, page) {
        let params = {
            url: this.getHost() + '/app/tw/my_orders/' + getUUID() + '/' + userName,
            method: 'get',
            params: {
                base,
                page
            }
        }
        let res = await fetch(params);
        return res;
    }

    async updateWithdrawOrder(userName, orderID, hash) {
        let data = {
            orderID,
            hash
        }
        let params = {
            url: this.getHost() + '/app/tw/update_order/' + getUUID() + '/' + userName,
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    async getWithdrawDetail(userName, base, orderID) {
        let params = {
            url: this.getHost() + '/app/tw/order_detail/' + getUUID() + '/' + userName,
            method: 'get',
            params: {
                base,
                orderID
            }
        }
        let res = await fetch(params);
        return res;
    }

    async getAgentInfo(userName, base) {
        let params = {
            url: this.getHost() + '/app/agent/agent_info/' + getUUID() + '/' + userName,
            method: 'get',
            params: {
                base
            }
        }
        let res = await fetch(params);
        return res;
    }

    async getCoinlist(userName) {
        let params = {
            url: this.getHost() + '/app/coin/coin_list/' + getUUID() + '/' + userName,
            method: 'get'
        }
        let res = await fetch(params);
        return res;
    }

    async getNewsReportList(count) {
        let params = {
            url: this.getHost() + '/app/adv/info/' + getUUID(),
            method: 'get',
            params: {
                count
            }
        }
        let res = await fetch(params);
        return res;
    }

    async getNoticeList(type, count) {
        let params = {
            url: this.getHost() + '/app/adv/notice/' + getUUID(),
            method: 'get',
            params: {
                type,
                count
            }
        }
        let res = await fetch(params);
        return res;
    }

    async getTickerFromCMC(token, currency) {
        let params = {
            url: this.getHost() + `/${token.toLowerCase()}_${currency.toLowerCase()}.json` + '?t=' + new Date().getTime(),
            methods: 'get'
        }
        let res = await fetch(params);
        return res;
    }
}

module.exports = JcBiz;