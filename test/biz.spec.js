const JcBiz = require("../lib").JcBiz;
const chai = require('chai');
const expect = chai.expect;

describe("test JcBiz", function() {
  describe("test constructor", () => {

    it("if arguments length is 1", () => {
      const inst = new JcBiz(["http://localhost"]);
      expect(inst.urls).to.deep.equal(["http://localhost"]);
      expect(inst.hosts).to.undefined;
      expect(inst.port).to.undefined;
      expect(inst.https).to.undefined;
    })

    it("if arguments length is 3", () => {
      const inst = new JcBiz(["localhost"], 8080, false);
      expect(inst.hosts).to.deep.equal(["localhost"]);
      expect(inst.port).to.equal(8080);
      expect(inst.https).to.equal(false);
      expect(inst.urls).to.undefined;
    })
  })
})