const fetch = require('../fetch');
const Basic = require('../Basic');

class JcExchange extends Basic {
    constructor(hosts, port, https) {
        super(hosts, port, https);
    }

    /**
     * get balance with jingtum address
     * @param {hex string} address
     */
    async getBalances(address) {
        let data = {
            url: this.getHost() + '/exchange/balances/' + address,
            method: 'get'
        }
        let res = await fetch(data);
        return res;
    }

    /**
     * get historic transactions with jingtum address
     * @param {hex string} address 
     * @param {number} page 
     * @param {number} ledger 
     * @param {number} seq 
     */
    async getHistoricTransactions(address, page, ledger = 0, seq = 0) {
        let url = this.getHost() + '/exchange/tx/' + address + '/' + page
        let data = {
            url,
            method: 'get'
        }
        if (page > 1) {
            data.params = {
                ledger,
                seq
            }
        }
        let res = await fetch(data);
        return res;
    }

    /**
     * get current orders with jingtum address
     * @param {hex string} address 
     * @param {number} page 
     */
    async getOrders(address, page) {
        let data = {
            url: this.getHost() + '/exchange/orders/' + address + '/' + page,
            method: 'get'
        }

        let res = await fetch(data);
        return res;
    }

    /**
     * create order
     * @param {signed string} data 
     */
    async createOrder(data) {
        let params = {
            url: this.getHost() + '/exchange/sign_order',
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }

    /**
     * cancel an order
     * @param {signed string} data 
     */
    async deleteOrder(data) {
        let params = {
            url: this.getHost() + '/exchange/sign_cancel_order',
            method: 'delete',
            data
        }
        let res = await fetch(params);
        return res;
    }

    /**
     * get sequence with jingtum address
     * @param {hex string} address
     */
    async getSequence(address) {
        let data = {
            url: this.getHost() + '/exchange/sequence/' + address,
            method: 'get'
        }
        let res = await fetch(data);
        return res;
    }

    /**
     * transfer account
     * @param {signed string} data 
     */
    async transferAccount(data) {
        let params = {
            url: this.getHost() + '/exchange/sign_payment',
            method: 'post',
            data
        }
        let res = await fetch(params);
        return res;
    }
}

module.exports = JcExchange;