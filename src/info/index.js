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
        let pair = base + '-' + counter.replace(/CNT/i, 'CNY');
        let data = {
            url: this.getHost() + '/info/ticker/' + pair,
            method: 'get'
        }
        let res = await fetch(data);
        return res;
    }

    /**
     * get all tickers info
     */
    async getAllTickers() {
        let data = {
            url: this.getHost() + '/info/alltickers',
            method: 'get'
        }
        let res = await fetch(data);
        return res;
    }

    /**
     * @param {string} base
     * @param {string} counter
     * @param {string} type
     */
    async getDepth(base, counter, type) {
        let pair = base + '-' + counter.replace(/CNT/i, 'CNY');
        let data = {
            url: this.getHost() + '/info/depth/' + pair + '/' + type,
            method: 'get'
        }
        let res = await fetch(data);
        return res;
    }

    /**
     * @param {string} base
     * @param {string} counter
     * @param {string} type
     */
    async getKline(base, counter, type) {
        let pair = base + '-' + counter.replace(/CNT/i, 'CNY');
        let data = {
            url: this.getHost() + '/info/kline/' + pair + '/' + type,
            method: 'get'
        }
        let res = await fetch(data);
        return res;
    }

    /**
     * @param {string} base
     * @param {string} counter
     * @param {string} type
     * @param {unix time} time
     */
    async getHistory(base, counter, type, time) {
        let pair = base + '-' + counter.replace(/CNT/i, 'CNY');
        let url = this.getHost() + '/info/history/' + pair + '/' + type;
        let data = {
            url,
            method: 'get'
        }
        if (type === 'newest') {
            data.params = {
                time
            }
        }
        let res = await fetch(data);
        return res;
    }
}

module.exports = JcInfo;