const utils = require("../lib/util");
const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const sandbox = sinon.createSandbox();

describe("test utils", function() {

  before(() => {
    utils.pendingTasks.clear();
  })

  describe("test getPath", () => {

    it("if url is valid", () => {
      const path = utils.getPath({ url: "http://localhost:8080/test", method: "get" });
      expect(path).to.equal("2F74657374676574");
    })

    it("if url is invalid", () => {
      const path = utils.getPath({ url: "localhost", method: "get" });
      expect(path).to.equal(null);
    })
  })

  describe("test pendingTasks", () => {
    it("test add", () => {
      const task = {
        pathname: "2F74657374676574",
        cancel: () => {}
      }
      utils.pendingTasks.add(task);
      expect(utils.pendingTasks.get()).to.deep.equal([task]);
    })

    it("test clear", () => {
      utils.pendingTasks.clear();
      expect(utils.pendingTasks.get()).to.deep.equal([]);
    })

    it("test remove", () => {
      const task = {
        pathname: "2F74657374676574",
        cancel: () => {}
      }
      utils.pendingTasks.add(task);
      expect(utils.pendingTasks.get()).to.deep.equal([task]);
      utils.pendingTasks.remove({ url: "localhost", method: "post" })
      expect(utils.pendingTasks.get()).to.deep.equal([task]);
      utils.pendingTasks.remove({ url: "http://localhost:8080/test", method: "get" })
      expect(utils.pendingTasks.get()).to.deep.equal([]);
    })

    it("test cancel", () => {
      const task = {
        pathname: "2F74657374676574",
        cancel: () => {}
      }
      const task1 = {
        pathname: "2F74657374676575",
        cancel: () => {}
      }
      const spy = sandbox.spy(task, "cancel");
      const spy1 = sandbox.spy(task1, "cancel");
      utils.pendingTasks.add(task);
      utils.pendingTasks.cancel({ url: "localhost", method: "post" })
      expect(utils.pendingTasks.get()).to.deep.equal([task]);
      expect(spy.called).to.false;
      expect(spy1.called).to.false;
      utils.pendingTasks.cancel({ url: "http://localhost:8080/test", method: "get" });
      expect(spy.called).to.true;
      expect(spy1.called).to.false;
      expect(utils.pendingTasks.get()).to.deep.equal([]);
    })
  })
})