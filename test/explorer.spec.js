const JcExplorer = require("../lib").JcExplorer;
const fetch = require("../lib/fetch");
const sinon = require("sinon");
const sandbox = sinon.createSandbox();
const chai = require("chai");
const expect = chai.expect;
const testAddress = "jpgWGpfHz8GxqUjz5nb6ej8eZJQtiF6KhH";

describe("test JcExplorer", function() {
  describe("test constructor", () => {
    it("if arguments length is 1", () => {
      const inst = new JcExplorer(["http://localhost"]);
      expect(inst.urls).to.deep.equal(["http://localhost"]);
      expect(inst.hosts).to.undefined;
      expect(inst.port).to.undefined;
      expect(inst.https).to.undefined;
    });

    it("if arguments length is 3", () => {
      const inst = new JcExplorer(["localhost"], 8080, false);
      expect(inst.hosts).to.deep.equal(["localhost"]);
      expect(inst.port).to.equal(8080);
      expect(inst.https).to.equal(false);
      expect(inst.urls).to.undefined;
    });
  });

  describe("test getBalances", () => {
    after(() => {
      sandbox.restore();
    });

    it("call with right parameters", async () => {
      const inst = new JcExplorer(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.getBalances("123", testAddress);
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          params: {
            w: testAddress
          },
          url: "http://localhost/wallet/balance/123"
        })
      ).to.true;
    });
  });

  describe("test orderDetail", () => {
    after(() => {
      sandbox.restore();
    });

    it("call with right parameters", async () => {
      const inst = new JcExplorer(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.orderDetail("123", "123456");
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          params: {
            h: "123456"
          },
          url: "http://localhost/hash/detail/123"
        })
      ).to.true;
    });
  });

  describe("test getHistory", () => {
    after(() => {
      sandbox.restore();
    });

    it("call with right parameters", async () => {
      const inst = new JcExplorer(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.getHistory("123", testAddress, 1, 20);
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          params: {
            p: 1,
            s: 20,
            w: testAddress
          },
          url: "http://localhost/wallet/trans/123"
        })
      ).to.true;

      stub.reset();
      await inst.getHistory("123", testAddress, 1, 20, { begin: 1 });
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          params: {
            p: 1,
            s: 20,
            w: testAddress,
            b: 1
          },
          url: "http://localhost/wallet/trans/123"
        })
      ).to.true;

      stub.reset();
      await inst.getHistory("123", testAddress, 1, 20, { end: 1 });
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          params: {
            p: 1,
            s: 20,
            w: testAddress,
            e: 1
          },
          url: "http://localhost/wallet/trans/123"
        })
      ).to.true;

      stub.reset();
      await inst.getHistory("123", testAddress, 1, 20, { currency: 1 });
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          params: {
            p: 1,
            s: 20,
            w: testAddress,
            c: 1
          },
          url: "http://localhost/wallet/trans/123"
        })
      ).to.true;

      stub.reset();
      await inst.getHistory("123", testAddress, 1, 20, { type: 1 });
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          params: {
            p: 1,
            s: 20,
            w: testAddress,
            t: 1
          },
          url: "http://localhost/wallet/trans/123"
        })
      ).to.true;
    });
  });
});
