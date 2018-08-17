'use strict';

const fetch = require('../fetch');
const Basic = require('../Basic');

class JcConfig extends Basic {
    constructor(hosts, port, https) {
        super(hosts, port, https);
    }

    /**
     * get config
     */
    async getConfig() {
        let data = {
            url: this.getHost() + '/static/config/jc_config.json' + '?t=' + new Date().getTime(),
            method: 'get'
        }
        let res = await fetch(data);
        return res;
    }
}

module.exports = JcConfig;