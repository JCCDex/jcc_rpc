"use strict";
/// <reference path = "./types/index.ts" />

import JcBase from "./base";
import fetch from "./fetch";

/**
 * creation example:
 *
 * 1: `new JcInfo(["http://localhost:8080", "https://localhost:8090"])`
 *
 * 2: `new JcInfo(["localhost"], 8080, false)`
 *
 * @export
 * @class JcInfo
 * @extends {JcBase}
 */
export default class JcInfo extends JcBase {
  constructor(...args) {
    super(...args);
  }

  /**
   * request ticker info
   *
   * @param {string} base
   * @param {string} counter
   * @returns {Promise<IResponse>}
   * @memberof JcInfo
   */
  public async getTicker(base: string, counter: string): Promise<IResponse> {
    const pair = base.toUpperCase() + "-" + counter.toUpperCase().replace(/CNT/i, "CNY");
    const data = {
      method: "get",
      url: super.getUrl() + "/info/ticker/" + pair
    };
    const res = await fetch(data);
    return res;
  }

  /**
   * request all tickers info
   *
   * @returns {Promise<IResponse>}
   * @memberof JcInfo
   */
  public async getAllTickers(): Promise<IResponse> {
    const data = {
      method: "get",
      url: super.getUrl() + "/info/alltickers"
    };
    const res = await fetch(data);
    return res;
  }

  /**
   * request order depth
   *
   * @param {string} base
   * @param {string} counter
   * @param {string} type
   * @returns {Promise<IResponse>}
   * @memberof JcInfo
   */
  public async getDepth(base: string, counter: string, type: string): Promise<IResponse> {
    const pair = base.toUpperCase() + "-" + counter.toUpperCase().replace(/CNT/i, "CNY");
    const data = {
      method: "get",
      url: super.getUrl() + "/info/depth/" + pair + "/" + type
    };
    const res = await fetch(data);
    return res;
  }

  /**
   * request kline data
   *
   * @param {string} base
   * @param {string} counter
   * @param {string} type
   * @returns {Promise<IResponse>}
   * @memberof JcInfo
   */
  public async getKline(base: string, counter: string, type: string): Promise<IResponse> {
    const pair = base.toUpperCase() + "-" + counter.toUpperCase().replace(/CNT/i, "CNY");
    const data = {
      method: "get",
      url: super.getUrl() + "/info/kline/" + pair + "/" + type
    };
    const res = await fetch(data);
    return res;
  }

  /**
   * request history
   *
   * @param {string} base
   * @param {string} counter
   * @param {string} type
   * @param {string} time
   * @returns {Promise<IResponse>}
   * @memberof JcInfo
   */
  public async getHistory(base: string, counter: string, type: string, time: string): Promise<IResponse> {
    const pair = base.toUpperCase() + "-" + counter.toUpperCase().replace(/CNT/i, "CNY");
    const url = super.getUrl() + "/info/history/" + pair + "/" + type;
    const data: any = {
      method: "get",
      url
    };
    if (type === "newest") {
      data.params = {
        time
      };
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * request ticker from cmc
   *
   * @param {string} token
   * @param {string} currency
   * @returns {Promise<IResponse>}
   * @memberof JcInfo
   */
  public async getTickerFromCMC(token: string, currency: string): Promise<IResponse> {
    const params = {
      method: "get",
      url: super.getUrl() + `/${token.toLowerCase()}_${currency.toLowerCase()}.json` + "?t=" + new Date().getTime()
    };
    const res = await fetch(params);
    return res;
  }
}
