import * as assert from "assert";

export default class JcBase {

  private _urls: string[];
  private _hosts: string[];
  private _port: number;
  private _https: boolean;

  public set urls(urls: string[]) {
    assert(Array.isArray(urls), 'the type of "urls" should be an array');
    this._urls = urls;
  }

  public get urls(): string[] {
    return this._urls;
  }

  public set hosts(hosts: string[]) {
    assert(Array.isArray(hosts), 'the type of "hosts" should be an array');
    this._hosts = hosts;
  }

  public get hosts(): string[] {
    return this._hosts;
  }

  public set port(port: number) {
    assert(Number.isInteger(port) && port > 0 && port <= 65535, 'the "port" should be valid');
    this._port = port;
  }

  public get port(): number {
    return this._port;
  }

  public set https(https: boolean) {
    assert(typeof https === "boolean", 'the type of "https" should be boolean');
    this._https = https;
  }

  public get https(): boolean {
    return this._https;
  }

  /**
   * Creates an instance of JcBase.
   * @param {*} args
   * @memberof JcBase
   */
  constructor(...args) {
    assert(args.length === 1 || args.length === 3, "arguments length should be 1 or 3");
    if (args.length === 1) {
      const urls = args[0];
      assert(Array.isArray(urls), 'the type of "urls" should be an array');
      this._urls = urls;
    } else {
      const [hosts, port, https] = args;
      assert(Array.isArray(hosts), 'the type of "hosts" should be an array');
      assert(Number.isInteger(port) && port > 0 && port <= 65535, 'the "port" should be valid');
      assert(typeof https === "boolean", 'the type of "https" should be boolean');
      this._hosts = hosts;
      this._port = port;
      this._https = https;
    }
  }

  public getUrl(): string {
    let url: string;
    if (Array.isArray(this._urls) && this._urls.length > 0) {
      url = this._urls[Math.floor(Math.random() * this._urls.length)];
    } else if (Array.isArray(this._hosts) && this._hosts.length > 0) {
      const host = this._hosts[Math.floor(Math.random() * this._hosts.length)];
      const protocol = this._https ? "https://" : "http://";
      url = `${protocol}${host}:${this._port}`;
    } else {
      url = "";
    }
    return url;
  }
}
