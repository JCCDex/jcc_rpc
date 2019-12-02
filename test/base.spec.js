const JcBase = require("../lib").JcBase;
const chai = require('chai');
const expect = chai.expect;

describe("test JcBase", function() {
  describe("test constructor", () => {
    it("throw error if arguments isn't valid", () => {
      expect(() => new JcBase()).to.throws();
      expect(() => new JcBase([], 8080, false, 4)).to.throws();
      expect(() => new JcBase([], 8080)).to.throws();
      expect(() => new JcBase([], 8080, 1)).to.throws();
      expect(() => new JcBase([], -1, 1)).to.throws();
      expect(() => new JcBase([], 65536, 1)).to.throws();
      expect(() => new JcBase([], 8080.8, false)).to.throws();
      expect(() => new JcBase(1)).to.throws();
    })

    it("if arguments length is 1", () => {
      const inst = new JcBase(["http://localhost"]);
      expect(inst.urls).to.deep.equal(["http://localhost"]);
      expect(inst.hosts).to.undefined;
      expect(inst.port).to.undefined;
      expect(inst.https).to.undefined;
    })

    it("if arguments length is 3", () => {
      const inst = new JcBase(["localhost"], 8080, false);
      expect(inst.hosts).to.deep.equal(["localhost"]);
      expect(inst.port).to.equal(8080);
      expect(inst.https).to.equal(false);
      expect(inst.urls).to.undefined;
    })
  })

  describe("test setter", () => {
    it("test set urls", () => {
      const inst = new JcBase(["http://localhost"]);
      expect(inst.urls).to.deep.equal(["http://localhost"]);
      expect(() => inst.urls = null).to.throws();
      inst.urls = [];
      expect(inst.urls).to.deep.equal([]);
    })

    it("test set hosts", () => {
      const inst = new JcBase(["localhost"], 8080, false);
      expect(inst.hosts).to.deep.equal(["localhost"]);
      expect(() => inst.hosts = null).to.throws();
      inst.hosts = [];
      expect(inst.hosts).to.deep.equal([]);
    })

    it("test set port", () => {
      const inst = new JcBase(["localhost"], 8080, false);
      expect(inst.port).to.equal(8080);
      expect(() => inst.port = 1.1).to.throws();
      inst.port = 8090;
      expect(inst.port).to.equal(8090);
    })

    it("test set https", () => {
      const inst = new JcBase(["localhost"], 8080, false);
      expect(inst.https).to.equal(false);
      expect(() => inst.https = 1).to.throws();
      inst.https = true;
      expect(inst.https).to.equal(true);
    })
  })

  describe("test getUrl", () => {
    it("if the urls is valid", () => {
      const inst = new JcBase(["http://localhost"]);
      expect(inst.getUrl()).to.equal("http://localhost");
    })

    it("if the hosts is valid", () => {
      const inst = new JcBase(["localhost"], 8080, false);
      expect(inst.getUrl()).to.equal("http://localhost:8080");
      inst.https = true;
      expect(inst.getUrl()).to.equal("https://localhost:8080");
    })

    it("if the hosts and urls is empty", () => {
      const inst = new JcBase([]);
      expect(inst.getUrl()).to.equal("");
    })
  })
})