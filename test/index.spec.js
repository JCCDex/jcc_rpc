const ConfigFactory = require("../lib").ConfigFactory;
// const JcBase = require("../lib").JcBase;
const chai = require("chai");
const expect = chai.expect;

describe("test Factory", function() {
  describe("test constructor", () => {
    it("if arguments length is 1", () => {
      ConfigFactory.init(["http://localhost"]);
      expect(ConfigFactory.get()).to.not.null;
      ConfigFactory.destroy();
      expect(ConfigFactory.get()).to.null;
    });
  });
});
