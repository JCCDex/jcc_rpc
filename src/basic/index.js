class Basic {
  constructor(hosts, port, https) {
    this.hosts = hosts;
    this.port = port;
    this.https = https;
  }

  getHost() {
    const hosts = this.hosts;
    let url;
    if (Array.isArray(hosts) && hosts.length > 0) {
      const host = hosts[Math.floor(Math.random() * hosts.length)]
      const protocol = this.https ? 'https://' : 'http://';
      url = `${protocol}${host}:${this.port}`
    } else {
      url = '';
    }
    return url;
  }

  setHosts(hosts) {
    this.hosts = hosts;
  }

  setPort(port) {
    this.port = port;
  }

  setHttps(https) {
    this.https = https;
  }
}

module.exports = Basic;