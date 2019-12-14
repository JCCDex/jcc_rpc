const JcInfo = require("../lib").JcInfo;
const fetch = require("../lib/fetch");
const sinon = require("sinon");
const sandbox = sinon.createSandbox();
const chai = require("chai");
const expect = chai.expect;

describe("test JcInfo", function() {
  describe("test constructor", () => {
    it("if arguments length is 1", () => {
      const inst = new JcInfo(["http://localhost"]);
      expect(inst.urls).to.deep.equal(["http://localhost"]);
      expect(inst.hosts).to.undefined;
      expect(inst.port).to.undefined;
      expect(inst.https).to.undefined;
    });

    it("if arguments length is 3", () => {
      const inst = new JcInfo(["localhost"], 8080, false);
      expect(inst.hosts).to.deep.equal(["localhost"]);
      expect(inst.port).to.equal(8080);
      expect(inst.https).to.equal(false);
      expect(inst.urls).to.undefined;
    });
  });

  describe("test getTicker", () => {
    after(() => {
      sandbox.restore();
    });

    it("call with right parameters", async () => {
      const inst = new JcInfo(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.getTicker("swt", "cnt");
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          url: "http://localhost/info/ticker/SWT-CNY"
        })
      ).to.true;
    });
  });

  describe("test getAllTickers", () => {
    after(() => {
      sandbox.restore();
    });

    it("call with right parameters", async () => {
      const inst = new JcInfo(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.getAllTickers();
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          url: "http://localhost/info/alltickers"
        })
      ).to.true;
    });
  });

  describe("test getDepth", () => {
    after(() => {
      sandbox.restore();
    });

    it("call with right parameters", async () => {
      const inst = new JcInfo(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.getDepth("swt", "cnt", "more");
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          url: "http://localhost/info/depth/SWT-CNY/more"
        })
      ).to.true;
    });
  });

  describe("test getKline", () => {
    after(() => {
      sandbox.restore();
    });

    it("call with right parameters", async () => {
      const inst = new JcInfo(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.getKline("swt", "cnt", "more");
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          url: "http://localhost/info/kline/SWT-CNY/more"
        })
      ).to.true;
    });
  });

  describe("test getHistory", () => {
    after(() => {
      sandbox.restore();
    });

    it("call with right parameters", async () => {
      const inst = new JcInfo(["http://localhost"]);
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      await inst.getHistory("swt", "cnt", "more");
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          url: "http://localhost/info/history/SWT-CNY/more"
        })
      ).to.true;

      stub.reset();

      await inst.getHistory("swt", "cnt", "newest", 123);
      expect(
        stub.calledOnceWithExactly({
          method: "get",
          params: {
            time: 123
          },
          url: "http://localhost/info/history/SWT-CNY/newest"
        })
      ).to.true;
    });
  });

  describe("test getTickerFromCMC", () => {
    after(() => {
      sandbox.restore();
    });

    it("call with right parameters", async () => {
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      const inst = new JcInfo(["http://localhost"]);
      await inst.getTickerFromCMC("usdt", "ether");
      const args = stub.args[0][0];
      expect(args.method).to.equal("get");
      expect(args.url.includes("http://localhost/usdt_ether.json?t=")).to.true;
    });
  });
});
