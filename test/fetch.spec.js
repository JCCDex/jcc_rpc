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
    const spy2 = sandbox.spy(pendingTasks, "cancel")
    const res = await fetch.default({ url: "http://localhost/exchange/sign_order", method: "post" })
    expect(spy.called).to.true;
    expect(spy1.called).to.true;
    expect(spy2.called).to.true;
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

  it("test cancel", async () => {
    const mock = new MockAdapter(fetch.default, { delayResponse: 100 });
    mock.onPost('http://localhost/exchange/sign_order').reply(200, {
      code: '0',
      data: {
        hash: "111"
      }
    }, {
      date: "Tue Dec 03 2019 11:37:57 GMT+0800 (China Standard Time)"
    });

    mock.onPost('http://localhost/exchange/sign_order/test').reply(200, {
      code: '0',
      data: {
        hash: "123"
      }
    }, {
      date: "Tue Dec 03 2019 11:37:57 GMT+0800 (China Standard Time)"
    });
    let props = [fetch.default({ url: "http://localhost/exchange/sign_order", method: "post" }), fetch.default({ url: "http://localhost/exchange/sign_order", method: "post" })]
    let res = await Promise.all(props);
    expect(res).to.deep.nested.include({
      host: undefined,
      msg: 'pending request had been canceled',
      port: undefined,
      result: false
    })
    expect(pendingTasks.get()).to.deep.equal([]);
    props = [fetch.default({ url: "http://localhost/exchange/sign_order", method: "post" }), fetch.default({ url: "http://localhost/exchange/sign_order/test", method: "post" })]
    res = await Promise.all(props);
    expect(res).to.deep.equal([{
        result: true,
        code: '0',
        data: { hash: '111' },
        date: 'Tue Dec 03 2019 11:37:57 GMT+0800 (China Standard Time)'
      },
      {
        result: true,
        code: '0',
        data: { hash: '123' },
        date: 'Tue Dec 03 2019 11:37:57 GMT+0800 (China Standard Time)'
      }
    ])
  })
})