const fetch = require('../fetch');
const Basic = require('../basic');

class JcExplorer extends Basic {
  constructor(hosts, port, https) {
    super(hosts, port, https);
  }

  /**
   * get balance via explorer
   *
   * @param {*} uuid
   * @param {*} address
   * @returns
   * @memberof JcExplorer
   */
  async getBalances(uuid, address) {
    let data = {
      url: this.getHost() + "/wallet/balance/" + uuid,
      method: 'get',
      params: {
        w: address
      }
    }
    let res = await fetch(data);
    return res;
  }

  /**
   * get order detail via explorer
   *
   * @param {*} uuid
   * @param {*} hash
   * @returns
   * @memberof JcExplorer
   */
  async orderDetail(uuid, hash) {
    let data = {
      url: this.getHost() + "/hash/detail/" + uuid,
      method: 'get',
      params: {
        h: hash
      }
    }
    let res = await fetch(data);
    return res;
  }

  /**
   * get history via explorer
   *
   * @param {*} uuid
   * @param {*} address
   * @param {*} page
   * @param {*} size
   * @param {*} option
   * @returns
   * @memberof JcExplorer
   */
  async getHistory(uuid, address, page, size, option) {
    let url = this.getHost() + "/wallet/trans/" + uuid;
    let data = {
      url,
      method: 'get'
    }
    data.params = {
      w: address,
      p: page,
      s: size
    }
    if (option && option.begin) {
      data.params.b = option.begin;
    }
    if (option && option.end) {
      data.params.e = option.end;
    }
    if (option && option.currency) {
      data.params.c = option.currency;
    }
    if (option && option.type) {
      data.params.t = option.type;
    }
    let res = await fetch(data);
    return res;
  }
}

module.exports = JcExplorer;