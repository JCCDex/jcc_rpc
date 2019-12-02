const JcConfig = require("../lib").JcConfig;
const fetch = require("../lib/fetch");
const sinon = require("sinon");
const sandbox = sinon.createSandbox();
const chai = require('chai');
const expect = chai.expect;

describe("test JcConfig", function() {
  describe("test constructor", () => {

    it("if arguments length is 1", () => {
      const inst = new JcConfig(["http://localhost"]);
      expect(inst.urls).to.deep.equal(["http://localhost"]);
      expect(inst.hosts).to.undefined;
      expect(inst.port).to.undefined;
      expect(inst.https).to.undefined;
    })

    it("if arguments length is 3", () => {
      const inst = new JcConfig(["localhost"], 8080, false);
      expect(inst.hosts).to.deep.equal(["localhost"]);
      expect(inst.port).to.equal(8080);
      expect(inst.https).to.equal(false);
      expect(inst.urls).to.undefined;
    })
  })

  describe("test getConfig", () => {

    after(() => {
      sandbox.restore();
    })

    it("call with right parameters", async () => {
      const stub = sandbox.stub(fetch, "default");
      stub.resolves();
      const inst = new JcConfig(["http://localhost"]);
      await inst.getConfig();
      const args = stub.args[0][0];
      expect(args.method).to.equal("get");
      expect(args.url.includes("http://localhost/static/config/jc_config.json?t=")).to.true;
    })
  })
})