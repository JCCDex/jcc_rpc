import JcBase from "./base";
import fetch from "./fetch";
import { IResponse } from "./types";

/**
 * creation example:
 *
 * 1: `new JcExchange(["http://localhost:8080", "https://localhost:8090"])`
 *
 * 2: `new JcExchange(["localhost"], 8080, false)`
 *
 * @deprecated
 * @export
 * @class JcExchange
 * @extends {JcBase}
 */
export default class JcExchange extends JcBase {
  constructor(...args) {
    super(...args);
  }

  /**
   * request balances
   *
   * @deprecated
   * @param {string} address
   * @returns {Promise<IResponse>}
   * @memberof JcExchange
   */
  public async getBalances(address: string): Promise<IResponse> {
    const data = {
      method: "get",
      url: super.getUrl() + "/exchange/balances/" + address
    };
    const res = await fetch(data);
    return res;
  }

  /**
   * request historic transactions
   *
   * @deprecated
   * @param {string} address
   * @param {number} ledger
   * @param {number} seq
   * @returns {Promise<IResponse>}
   * @memberof JcExchange
   */
  public async getHistoricTransactions(address: string, ledger: number, seq: number): Promise<IResponse> {
    const url = super.getUrl() + "/exchange/tx/" + address;
    const data: any = {
      method: "get",
      url
    };
    if (Number.isInteger(ledger) && Number.isInteger(seq)) {
      data.params = {
        ledger,
        seq
      };
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * request historic payments
   *
   * @deprecated
   * @param {string} address
   * @param {number} ledger
   * @param {number} seq
   * @returns {Promise<IResponse>}
   * @memberof JcExchange
   */
  public async getHistoricPayments(address: string, ledger: number, seq: number): Promise<IResponse> {
    const url = super.getUrl() + "/exchange/payments/" + address;
    const data: any = {
      method: "get",
      url
    };
    if (Number.isInteger(ledger) && Number.isInteger(seq)) {
      data.params = {
        ledger,
        seq
      };
    }
    const res = await fetch(data);
    return res;
  }

  /**
   * request current orders
   *
   * @deprecated
   * @param {string} address
   * @param {number} page
   * @returns {Promise<IResponse>}
   * @memberof JcExchange
   */
  public async getOrders(address: string, page: number): Promise<IResponse> {
    const data = {
      method: "get",
      url: super.getUrl() + "/exchange/orders/" + address + "/" + page
    };

    const res = await fetch(data);
    return res;
  }

  /**
   * create an order
   *
   * [How to sign and create](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L99)
   *
   * @deprecated
   * @param {string} sign
   * @returns {Promise<IResponse>}
   * @memberof JcExchange
   */
  public async createOrder(sign: string): Promise<IResponse> {
    const params = {
      data: {
        sign
      },
      method: "post",
      url: super.getUrl() + "/exchange/sign_order"
    };
    const res = await fetch(params);
    return res;
  }

  /**
   * cancel an order
   *
   * [How to sign and cancel](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L124)
   *
   * @deprecated
   * @param {string} sign
   * @returns {Promise<IResponse>}
   * @memberof JcExchange
   */
  public async deleteOrder(sign: string): Promise<IResponse> {
    const params = {
      data: {
        sign
      },
      method: "delete",
      url: super.getUrl() + "/exchange/sign_cancel_order"
    };
    const res = await fetch(params);
    return res;
  }

  /**
   * request sequence
   *
   * @deprecated
   * @param {string} address
   * @returns {Promise<IResponse>}
   * @memberof JcExchange
   */
  public async getSequence(address: string): Promise<IResponse> {
    const data = {
      method: "get",
      url: super.getUrl() + "/exchange/sequence/" + address
    };
    const res = await fetch(data);
    return res;
  }

  /**
   * transfer token
   *
   * [How to sign and transfer](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L153)
   *
   * @deprecated
   * @param {string} sign
   * @returns {Promise<IResponse>}
   * @memberof JcExchange
   */
  public async transferAccount(sign: string): Promise<IResponse> {
    const params = {
      data: {
        sign
      },
      method: "post",
      url: super.getUrl() + "/exchange/sign_payment"
    };
    const res = await fetch(params);
    return res;
  }

  /**
   * request order detail
   *
   * @deprecated
   * @param {string} hash
   * @returns {Promise<IResponse>}
   * @memberof JcExchange
   */
  public async orderDetail(hash: string): Promise<IResponse> {
    const data = {
      method: "get",
      url: super.getUrl() + "/exchange/detail/" + hash
    };
    const res = await fetch(data);
    return res;
  }

  /**
   * set brokerage
   *
   * @deprecated
   * @param {string} sign
   * @returns {Promise<IResponse>}
   * @memberof JcExchange
   */
  public async setBrokerage(sign: string): Promise<IResponse> {
    const params = {
      data: {
        sign
      },
      method: "post",
      url: super.getUrl() + "/exchange/brokerage"
    };
    const res = await fetch(params);
    return res;
  }
}
