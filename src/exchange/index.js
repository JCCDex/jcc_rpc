const fetch = require('../fetch');
const Basic = require('../basic');

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
    async getHistoricTransactions(address, ledger, seq) {
        let url = this.getHost() + '/exchange/tx/' + address;
        let data = {
            url,
            method: 'get'
        }
        if (Number.isInteger(ledger) && Number.isInteger(seq)) {
            data.params = {
                ledger,
                seq
            }
        }
        let res = await fetch(data);
        return res;
    }

    /**
     * get historic payments with jingtum address
     * @param {hex string} address
     * @param {number} page
     * @param {number} ledger
     * @param {number} seq
     */
    async getHistoricPayments(address, ledger, seq) {
        let url = this.getHost() + '/exchange/payments/' + address;
        let data = {
            url,
            method: 'get'
        }
        if (Number.isInteger(ledger) && Number.isInteger(seq)) {
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
     * @param {hex string} sign
     */
    async createOrder(sign) {
        let params = {
            url: this.getHost() + '/exchange/sign_order',
            method: 'post',
            data: {
                sign
            }
        }
        let res = await fetch(params);
        return res;
    }

    /**
     * cancel an order
     * @param {hex string} sign
     */
    async deleteOrder(sign) {
        let params = {
            url: this.getHost() + '/exchange/sign_cancel_order',
            method: 'delete',
            data: {
                sign
            }
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
     * @param {hex string} sign
     */
    async transferAccount(sign) {
        let params = {
            url: this.getHost() + '/exchange/sign_payment',
            method: 'post',
            data: {
                sign
            }
        }
        let res = await fetch(params);
        return res;
    }
}

module.exports = JcExchange;