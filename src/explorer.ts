import JcBase from "./base";
import fetch from "./fetch";
import { IResponse } from "./types";

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
   * @param {{ begin: string, end: string, currency: string, type: string }} options
   * @returns {Promise<IResponse>}
   * @memberof JcExplorer
   */
  public async getHistory(uuid: string, address: string, page: number, size: number, options: { begin: string, end: string, currency: string, type: string }): Promise<IResponse> {
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
    }

    const res = await fetch(data);
    return res;
  }
}
