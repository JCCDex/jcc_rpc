const utils = require("../lib/util");
const chai = require('chai');
const expect = chai.expect;

describe("test utils", function() {
  describe("test getPath", () => {

    it("if url is valid", () => {
      const path = utils.getPath({ url: "http://localhost:8080/test", method: "get" });
      expect(path).to.equal("/testget");
    })

    it("if url is invalid", () => {
      const path = utils.getPath({ url: "localhost", method: "get" });
      expect(path).to.equal(null);
    })
  })
})