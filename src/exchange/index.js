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
    const data = {
      url: this.getHost() + '/exchange/balances/' + address,
      method: 'get'
    }
    const res = await fetch(data);
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
    const url = this.getHost() + '/exchange/tx/' + address;
    const data = {
      url,
      method: 'get'
    }
    if (Number.isInteger(ledger) && Number.isInteger(seq)) {
      data.params = {
        ledger,
        seq
      }
    }
    const res = await fetch(data);
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
    const url = this.getHost() + '/exchange/payments/' + address;
    const data = {
      url,
      method: 'get'
    }
    if (Number.isInteger(ledger) && Number.isInteger(seq)) {
      data.params = {
        ledger,
        seq
      }
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * get current orders with jingtum address
   * @param {hex string} address
   * @param {number} page
   */
  async getOrders(address, page) {
    const data = {
      url: this.getHost() + '/exchange/orders/' + address + '/' + page,
      method: 'get'
    }

    const res = await fetch(data);
    return res;
  }

  /**
   * create order
   * @param {hex string} sign
   */
  async createOrder(sign) {
    const params = {
      url: this.getHost() + '/exchange/sign_order',
      method: 'post',
      data: {
        sign
      }
    }
    const res = await fetch(params);
    return res;
  }

  /**
   * cancel an order
   * @param {hex string} sign
   */
  async deleteOrder(sign) {
    const params = {
      url: this.getHost() + '/exchange/sign_cancel_order',
      method: 'delete',
      data: {
        sign
      }
    }
    const res = await fetch(params);
    return res;
  }

  /**
   * get sequence with jingtum address
   * @param {hex string} address
   */
  async getSequence(address) {
    const data = {
      url: this.getHost() + '/exchange/sequence/' + address,
      method: 'get'
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * transfer account
   * @param {hex string} sign
   */
  async transferAccount(sign) {
    const params = {
      url: this.getHost() + '/exchange/sign_payment',
      method: 'post',
      data: {
        sign
      }
    }
    const res = await fetch(params);
    return res;
  }

  /**
   * order detail
   * @param {hex string} hash
   */
  async orderDetail(hash) {
    const data = {
      url: this.getHost() + '/exchange/detail/' + hash,
      method: 'get'
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * set brokerage
   * @param {hex string} sign
   */
  async setBrokerage(sign) {
    const params = {
      url: this.getHost() + '/exchange/brokerage',
      method: 'post',
      data: {
        sign
      }
    }
    const res = await fetch(params);
    return res;
  }
}

module.exports = JcExchange;