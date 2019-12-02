const JcExchange = require("../lib").JcExchange;
const fetch = require("../lib/fetch");
const sinon = require("sinon");
const sandbox = sinon.createSandbox();
const chai = require('chai');
const expect = chai.expect;

const testAddress = 'jpgWGpfHz8GxqUjz5nb6ej8eZJQtiF6KhH';

describe("test JcExchange", function() {
  describe("test constructor", () => {

    it("if arguments length is 1", () => {
      const inst = new JcExchange(["http://localhost"]);
      expect(inst.urls).to.deep.equal(["http://localhost"]);
      expect(inst.hosts).to.undefined;
      expect(inst.port).to.undefined;
      expect(inst.https).to.undefined;
    })

    it("if arguments length is 3", () => {
      const inst = new JcExchange(["localhost"], 8080, false);
      expect(inst.hosts).to.deep.equal(["localhost"]);
      expect(inst.port).to.equal(8080);
      expect(inst.https).to.equal(false);
      expect(inst.urls).to.undefined;
    })
  })

  describe("test getBalances", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      const inst = new JcExchange(["http://localhost"]);
      await inst.getBalances(testAddress);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/balances/" + testAddress
      })).to.true;
    })
  })

  describe("test getBalances", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const inst = new JcExchange(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.getBalances(testAddress);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/balances/" + testAddress
      })).to.true;
    })
  })

  describe("test getHistoricTransactions", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const inst = new JcExchange(["http://localhost"]);
      let stub = sandbox.stub(fetch, "default");
      stub.resolves();

      await inst.getHistoricTransactions(testAddress, 1, 1);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/tx/" + testAddress,
        params: {
          ledger: 1,
          seq: 1
        }
      })).to.true;

      stub.reset();

      await inst.getHistoricTransactions(testAddress, undefined, 1);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/tx/" + testAddress
      })).to.true;

      stub.reset();

      await inst.getHistoricTransactions(testAddress, 1);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/tx/" + testAddress
      })).to.true;
    })
  })

  describe("test getHistoricPayments", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const inst = new JcExchange(["http://localhost"]);
      let stub = sandbox.stub(fetch, "default");
      stub.resolves();

      await inst.getHistoricPayments(testAddress, 1, 1);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/payments/" + testAddress,
        params: {
          ledger: 1,
          seq: 1
        }
      })).to.true;

      stub.reset();

      await inst.getHistoricPayments(testAddress, undefined, 1);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/payments/" + testAddress
      })).to.true;

      stub.reset();

      await inst.getHistoricPayments(testAddress, 1);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/payments/" + testAddress
      })).to.true;
    })
  })

  describe("test getOrders", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const inst = new JcExchange(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.getOrders(testAddress, 1);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/orders/" + testAddress + "/1"
      })).to.true;
    })
  })

  describe("test createOrder", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const inst = new JcExchange(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.createOrder("test");
      expect(stub.calledOnceWithExactly({
        data: {
          sign: "test"
        },
        method: "post",
        url: "http://localhost/exchange/sign_order"
      })).to.true;
    })
  })

  describe("test deleteOrder", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const inst = new JcExchange(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.deleteOrder("test");
      expect(stub.calledOnceWithExactly({
        data: {
          sign: "test"
        },
        method: "delete",
        url: "http://localhost/exchange/sign_cancel_order"
      })).to.true;
    })
  })

  describe("test getSequence", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const inst = new JcExchange(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.getSequence(testAddress);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/sequence/" + testAddress
      })).to.true;
    })
  })

  describe("test transferAccount", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const inst = new JcExchange(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.transferAccount("test");
      expect(stub.calledOnceWithExactly({
        data: {
          sign: "test"
        },
        method: "post",
        url: "http://localhost/exchange/sign_payment"
      })).to.true;
    })
  })

  describe("test orderDetail", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      const inst = new JcExchange(["http://localhost"]);
      await inst.orderDetail(testAddress);
      expect(stub.calledOnceWithExactly({
        method: "get",
        url: "http://localhost/exchange/detail/" + testAddress
      })).to.true;
    })
  })

  describe("test setBrokerage", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const inst = new JcExchange(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.setBrokerage("test");
      expect(stub.calledOnceWithExactly({
        data: {
          sign: "test"
        },
        method: "post",
        url: "http://localhost/exchange/brokerage"
      })).to.true;
    })
  })

})