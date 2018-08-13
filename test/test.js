const chai = require('chai');
const expect = chai.expect;

describe('test jc exchange', function () {

    const jcExchange = require('../lib/exchange');
    let hosts = ["ewdjbbl8jgf.weidex.vip", "ektjsbdyfg.weidex.vip"];
    let instance = new jcExchange(hosts, 443, true);
    it('get balance', async function () {
        let res = await instance.getBalances('jJm16ySuvd4Po5miAfBWXg8kSdRSdbVxL6');
        expect(res.result).to.equal(true);
        expect(res.data).to.be.a('array');
    });

    it('get historical transactions when page is 1', async function () {
        let res = await instance.getHistoricTransactions('jnyf1huZEJgCLezJ2mQkzVtdjkZsF9CSvT', 1);
        expect(res.result).to.equal(true);
        expect(res.data.transactions).to.be.a('array');
    })

    it('get historical transactions when page more than 1', async function () {
        let res = await instance.getHistoricTransactions('jnyf1huZEJgCLezJ2mQkzVtdjkZsF9CSvT', 2, 10345007, 1);
        expect(res.result).to.equal(true);
        expect(res.data.transactions).to.be.a('array');
    })
});