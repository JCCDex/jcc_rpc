'use strict';

const fetch = require('../fetch');
const Basic = require('../basic');

class JcInfo extends Basic {
  constructor(hosts, port, https) {
    super(hosts, port, https);
  }

  /**
   * get ticker info
   * @param {string} base
   * @param {string} counter
   */
  async getTicker(base, counter) {
    const pair = base.toUpperCase() + '-' + counter.toUpperCase().replace(/CNT/i, 'CNY');
    const data = {
      url: this.getHost() + '/info/ticker/' + pair,
      method: 'get'
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * get all tickers info
   */
  async getAllTickers() {
    const data = {
      url: this.getHost() + '/info/alltickers',
      method: 'get'
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * @param {string} base
   * @param {string} counter
   * @param {string} type
   */
  async getDepth(base, counter, type) {
    const pair = base.toUpperCase() + '-' + counter.toUpperCase().replace(/CNT/i, 'CNY');
    const data = {
      url: this.getHost() + '/info/depth/' + pair + '/' + type,
      method: 'get'
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * @param {string} base
   * @param {string} counter
   * @param {string} type
   */
  async getKline(base, counter, type) {
    const pair = base.toUpperCase() + '-' + counter.toUpperCase().replace(/CNT/i, 'CNY');
    const data = {
      url: this.getHost() + '/info/kline/' + pair + '/' + type,
      method: 'get'
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * @param {string} base
   * @param {string} counter
   * @param {string} type
   * @param {unix time} time
   */
  async getHistory(base, counter, type, time) {
    const pair = base.toUpperCase() + '-' + counter.toUpperCase().replace(/CNT/i, 'CNY');
    const url = this.getHost() + '/info/history/' + pair + '/' + type;
    const data = {
      url,
      method: 'get'
    }
    if (type === 'newest') {
      data.params = {
        time
      }
    }
    const res = await fetch(data);
    return res;
  }

  async getTickerFromCMC(token, currency) {
    const params = {
      url: this.getHost() + `/${token.toLowerCase()}_${currency.toLowerCase()}.json` + '?t=' + new Date().getTime(),
      methods: 'get'
    }
    const res = await fetch(params);
    return res;
  }
}

module.exports = JcInfo;