/// <reference path = "./types/index.ts" />

import JcBase from "./base";
import fetch from "./fetch";

/**
 * creation example:
 *
 * 1: `new JcConfig(["http://localhost:8080", "https://localhost:8090"])`
 *
 * 2: `new JcConfig(["localhost"], 8080, false)`
 *
 * @export
 * @class JcConfig
 * @extends {JcBase}
 */
export default class JcConfig extends JcBase {
  constructor(...args) {
    super(...args);
  }

  /**
   * request config of jccdex
   *
   * `bizHosts`: biz nodes
   *
   * `cfgHosts`: config nodes
   *
   * `exHosts`: exchange nodes
   *
   * `infoHosts`: info nodes
   *
   * `scanHosts`: explorer nodes
   *
   * @returns {Promise<IResponse>}
   * @memberof JcConfig
   */
  public async getConfig(): Promise<IResponse> {
    const data = {
      method: "get",
      url: super.getUrl() + "/static/config/jc_config.json" + "?t=" + new Date().getTime()
    };
    const res = await fetch(data);
    return res;
  }
}
