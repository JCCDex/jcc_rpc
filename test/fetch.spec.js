const fetch = require("../lib/fetch");
const pendingTasks = require("../lib/util").pendingTasks;
const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const sandbox = sinon.createSandbox();
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(fetch.default);

describe("test fetch", function() {
  it("if response is object and code is '0'", async () => {
    mock.onPost('http://localhost/exchange/sign_order').reply(200, {
      code: '0',
      data: {
        hash: "111"
      }
    }, {
      date: "Tue Dec 03 2019 11:37:57 GMT+0800 (China Standard Time)"
    });
    const spy = sandbox.spy(pendingTasks, "add")
    const spy1 = sandbox.spy(pendingTasks, "remove")
    const res = await fetch.default({ url: "http://localhost/exchange/sign_order", method: "post" })
    expect(spy.called).to.true;
    expect(spy1.called).to.true;
    expect(res).to.deep.equal({
      result: true,
      code: '0',
      data: {
        hash: "111"
      },
      date: "Tue Dec 03 2019 11:37:57 GMT+0800 (China Standard Time)"
    })
  })

  it("if response is object and code isn't '1010'", async () => {
    mock.onPost('http://localhost/exchange/sign_order').reply(200, {
      code: '1010',
      data: {
        hash: "111"
      }
    }, {
      date: "Tue Dec 03 2019 11:37:57 GMT+0800 (China Standard Time)"
    });
    const res = await fetch.default({ url: "http://localhost/exchange/sign_order", method: "post" })
    expect(res).to.deep.equal({
      result: false,
      code: '1010',
      data: {
        hash: "111"
      },
      date: "Tue Dec 03 2019 11:37:57 GMT+0800 (China Standard Time)"
    })
  })

  it("if response is not object", async () => {
    mock.onPost('http://localhost/exchange/sign_order').reply(200, "test", {
      date: "Tue Dec 03 2019 11:37:57 GMT+0800 (China Standard Time)"
    });
    const res = await fetch.default({ url: "http://localhost/exchange/sign_order", method: "post" })
    expect(res).to.deep.equal({
      result: true,
      data: 'test',
      date: 'Tue Dec 03 2019 11:37:57 GMT+0800 (China Standard Time)'
    })
  })

  it("if status isn't 200", async () => {
    mock.onPost('http://localhost/exchange/sign_order').reply(404);
    const res = await fetch.default({ url: "http://localhost/exchange/sign_order", method: "post" })
    expect(res).to.deep.equal({
      host: undefined,
      msg: 'Request failed with status code 404',
      port: undefined,
      result: false
    })
  })
})