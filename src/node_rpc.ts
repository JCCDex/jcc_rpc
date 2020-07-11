import JcBase from "./base";
const axios = require("axios");

const service = axios.create({
  timeout: 30000
});
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * request data from node and submit data to node directly, instead of `JcExchange` class
 *
 * creation example:
 *
 * 1: `new JcNodeRpc(["http://localhost:8080", "https://localhost:8090"])`
 *
 * 2: `new JcNodeRpc(["localhost"], 8080, false)`
 *
 * @export
 * @class JcNodeRpc
 * @extends {JcBase}
 */
export default class JcNodeRpc extends JcBase {
  constructor(...args) {
    super(...args);
  }

  /**
   * get sequence
   *
   * @param {string} address
   * @returns {Promise<number>}
   * @memberof JcNodeRpc
   */
  public async getSequence(address: string): Promise<number> {
    const data = {
      data: {
        method: "account_info",
        params: [
          {
            account: address
          }
        ]
      },
      method: "post",
      url: super.getUrl()
    };
    const res = await service(data);
    const status = res?.result?.status;
    if (status !== "success") {
      throw new Error(res.result.error_message);
    }

    return res.result.account_data.Sequence;
  }

  /**
   * request transaction detail
   *
   * @param {string} hash
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async requestTransaction(hash: string): Promise<any> {
    const data = {
      data: {
        method: "tx",
        params: [
          {
            binary: false,
            transaction: hash
          }
        ]
      },
      method: "post",
      url: super.getUrl()
    };
    const res = await service(data);
    return res;
  }

  /**
   * create order with signed data
   *
   * @link [How to sign and create](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L99)
   * @param {string} blob
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async createOrder(blob: string): Promise<any> {
    return this.submit(blob);
  }

  /**
   * cancel order with signed data
   *
   * @link [How to sign and cancel](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L124)
   * @param {string} blob
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async cancelOrder(blob: string): Promise<any> {
    return this.submit(blob);
  }

  /**
   * transfer token with signed data
   *
   * @link [How to sign and transfer](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L153)
   * @param {string} blob
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async transfer(blob: string): Promise<any> {
    return this.submit(blob);
  }

  /**
   * set brokerage with signed data
   *
   * @link [How to sign and set](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L182)
   * @param {string} blob
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async setBrokerage(blob: string): Promise<any> {
    return this.submit(blob);
  }

  /**
   * set signer list with signed data
   *
   * @link [How to sign and set](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L182)
   * @param {string} blob
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async setSignerList(blob: string): Promise<any> {
    return this.submit(blob);
  }

  /**
   * disable/enable account master key
   *
   * @link [How to sign and set](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L182)
   * @param {string} blob
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async setAccount(blob: string): Promise<any> {
    return this.submit(blob);
  }

  /**
   * send raw transaction
   *
   * @link [How to sign and set](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L182)
   * @param {string} blob
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async sendRawTransaction(blob: string): Promise<any> {
    return this.submit(blob);
  }

  /**
   * submit multi sign transaction
   *
   * @protected
   * @param {string} params
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async submit_multisigned(params: any): Promise<any> {
    const data = {
      data: {
        method: "submit_multisigned",
        params: [
          {
            tx_json: params
          }
        ]
      },
      method: "post",
      url: super.getUrl()
    };
    const res = await service(data);
    return res;
  }

  /**
   * submit transaction
   *
   * @protected
   * @param {string} blob
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  protected async submit(blob: string): Promise<any> {
    const data = {
      data: {
        method: "submit",
        params: [
          {
            tx_blob: blob
          }
        ]
      },
      method: "post",
      url: super.getUrl()
    };
    const res = await service(data);
    return res;
  }
}
