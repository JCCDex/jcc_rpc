/// <reference path = "./types/index.ts" />

import JcBase from "./base";
import fetch from "./fetch";

/**
 * creation example:
 *
 * 1: `new JcExplorer(["http://localhost:8080", "https://localhost:8090"])`
 *
 * 2: `new JcExplorer(["localhost"], 8080, false)`
 *
 * @export
 * @class JcExplorer
 * @extends {JcBase}
 */
export default class JcExplorer extends JcBase {
  constructor(...args) {
    super(...args);
  }

  /**
   * request balances via explorer
   *
   * @param {string} uuid
   * @param {string} address
   * @returns {Promise<IResponse>}
   * @memberof JcExplorer
   */
  public async getBalances(uuid: string, address: string): Promise<IResponse> {
    const data = {
      method: "get",
      params: {
        w: address
      },
      url: super.getUrl() + "/wallet/balance/" + uuid
    };
    const res = await fetch(data);
    return res;
  }

  /**
   * request order detail via explorer
   *
   * @param {string} uuid
   * @param {string} hash
   * @returns {Promise<IResponse>}
   * @memberof JcExplorer
   */
  public async orderDetail(uuid: string, hash: string): Promise<IResponse> {
    const data = {
      method: "get",
      params: {
        h: hash
      },
      url: super.getUrl() + "/hash/detail/" + uuid
    };
    const res = await fetch(data);
    return res;
  }

  /**
   * request history via explorer
   *
   * @param {string} uuid
   * @param {string} address
   * @param {number} page
   * @param {number} size
   * @param {{ begin: string, end: string, currency: string, type: string, buyOrsell: number, otherWallet: string }} options
   * @returns {Promise<IResponse>}
   * @memberof JcExplorer
   */
  public async getHistory(uuid: string, address: string, page: number, size: number, options: { begin: string; end: string; currency: string; type: string; buyOrsell: number; otherWallet: string }): Promise<IResponse> {
    const url = super.getUrl() + "/wallet/trans/" + uuid;
    const data: any = {
      method: "get",
      url
    };
    data.params = {
      p: page,
      s: size,
      w: address
    };
    if (options) {
      if (options.begin) {
        data.params.b = options.begin;
      }
      if (options.end) {
        data.params.e = options.end;
      }
      if (options.currency) {
        data.params.c = options.currency;
      }
      if (options.type) {
        data.params.t = options.type;
      }
      if (options.buyOrsell) {
        data.params.bs = options.buyOrsell;
      }
      if (options.otherWallet) {
        data.params.aw = options.otherWallet;
      }
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * request current order via explorer
   *
   * @param {string} uuid
   * @param {string} address
   * @param {number} page
   * @param {number} size default 20, there are four choices of 10, 20, 50, 100
   * @param {{ pair: string, buyOrsell: number }} options pair:swtc-cny or SWTC-CNY; buyOrsell:0 buy or sell,1 buy,2 sell
   * @returns {Promise<IResponse>}
   * @memberof JcExplorer
   */
  public async getOrders(uuid: string, address: string, page: number, size: number, options: { pair: string; buyOrsell: number }): Promise<IResponse> {
    const url = super.getUrl() + "/wallet/offer/" + uuid;
    const data: any = {
      method: "get",
      url
    };
    data.params = {
      p: page,
      s: size,
      w: address
    };
    if (options) {
      if (options.pair) {
        data.params.c = options.pair;
      }
      if (options.buyOrsell) {
        data.params.bs = options.buyOrsell;
      }
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * request tokens via explorer
   *
   * @param {string} uuid
   * @param {{ currency: string }} options
   * @returns {Promise<IResponse>}
   * @memberof JcExplorer
   */
  public async getTokens(uuid: string, options: { currency: string }): Promise<IResponse> {
    const url = super.getUrl() + "/sum/all/" + uuid;
    const data: any = {
      method: "get",
      url
    };
    data.params = {};
    if (options && options.currency) {
      data.params.t = options.currency;
    }
    const res = await fetch(data);
    return res;
  }
}
