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
   * @param {string} address wallet public key
   * @param {string} _url rpc server host
   * @returns {Promise<number>}
   * @memberof JcNodeRpc
   */
  public async getSequence(address: string, _url?: string): Promise<number> {
    let rpcUrl: string;
    if (_url) rpcUrl = _url;
    else rpcUrl = super.getUrl();
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
      url: rpcUrl
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
   * @param {string} hash traction hash
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async requestTransaction(hash: string): Promise<any> {
    let tx: string = "";
    for (const url of this.urls) {
      const res = await this.requestTx(hash, url);
      if (res.result && res.result.status === "success" && res.result.validated) {
        tx = res;
        break;
      }
    }
    return tx;
  }

  /**
   * create order with signed data
   *
   * @link [How to sign and create](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L99)
   * @param {string} blob
   * @param {string} _url rpc server host
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async createOrder(blob: string, _url?: string): Promise<any> {
    if (_url) return this.submit(blob, _url);
    else return this.submit(blob);
  }

  /**
   * cancel order with signed data
   *
   * @link [How to sign and cancel](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L124)
   * @param {string} blob
   * @param {string} _url rpc server host
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async cancelOrder(blob: string, _url?: string): Promise<any> {
    if (_url) return this.submit(blob, _url);
    else return this.submit(blob);
  }

  /**
   * transfer token with signed data
   *
   * @link [How to sign and transfer](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L153)
   * @param {string} blob
   * @param {string} _url rpc server host
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async transfer(blob: string, _url?: string): Promise<any> {
    if (_url) return this.submit(blob, _url);
    else return this.submit(blob);
  }

  /**
   * set brokerage with signed data
   *
   * @link [How to sign and set](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L182)
   * @param {string} blob
   * @param {string} _url rpc server host
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async setBrokerage(blob: string, _url?: string): Promise<any> {
    if (_url) return this.submit(blob, _url);
    else return this.submit(blob);
  }

  /**
   * set signer list with signed data
   *
   * @link [How to sign and set](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L182)
   * @param {string} blob
   * @param {string} _url rpc server host
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async setSignerList(blob: string, _url?: string): Promise<any> {
    if (_url) return this.submit(blob, _url);
    else return this.submit(blob);
  }

  /**
   * disable/enable account master key
   *
   * @link [How to sign and set](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L182)
   * @param {string} blob
   * @param {string} _url rpc server host
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async setAccount(blob: string, _url?: string): Promise<any> {
    if (_url) return this.submit(blob, _url);
    else return this.submit(blob);
  }

  /**
   * send raw transaction
   *
   * @link [How to sign and set](https://github.com/JCCDex/jcc_exchange/blob/master/src/index.ts#L182)
   * @param {string} blob
   * @param {string} _url rpc server host
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async sendRawTransaction(blob: string, _url?: string): Promise<any> {
    if (_url) return this.submit(blob, _url);
    else return this.submit(blob);
  }

  /**
   * submit multi sign transaction
   *
   * @protected
   * @param {string} params
   * @param {string} _url rpc server host
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  public async submit_multisigned(params: any, _url?: string): Promise<any> {
    let rpcUrl: string;
    if (_url) rpcUrl = _url;
    else rpcUrl = super.getUrl();
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
      url: rpcUrl
    };
    const res = await service(data);
    return res;
  }

  /**
   * submit transaction to specified rpc server
   *
   * @protected
   * @param {string} blob
   * @param {string} _url rpc server host
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  protected async submit(blob: string, _url?: string): Promise<any> {
    let rpcUrl: string;
    if (_url) rpcUrl = _url;
    else rpcUrl = super.getUrl();
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
      url: rpcUrl
    };
    const res = await service(data);
    return res;
  }

  /**
   * request transaction detail from the fixed rpc host
   *
   * @param {string} hash traction hash
   * @param {string} _url rpc server host
   * @returns {Promise<any>}
   * @memberof JcNodeRpc
   */
  private async requestTx(hash: string, _url?: string): Promise<any> {
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
      url: _url
    };
    const res = await service(data);
    return res;
  }
}
