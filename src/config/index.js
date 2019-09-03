'use strict';

const fetch = require('../fetch');
const Basic = require('../basic');

class JcConfig extends Basic {
  constructor(hosts, port, https) {
    super(hosts, port, https);
  }

  /**
   * get config
   */
  async getConfig() {
    const data = {
      url: this.getHost() + '/static/config/jc_config.json' + '?t=' + new Date().getTime(),
      method: 'get'
    }
    const res = await fetch(data);
    return res;
  }
}

module.exports = JcConfig;