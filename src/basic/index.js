class Basic {
    constructor(hosts, port, https) {
        this.hosts = hosts;
        this.port = port;
        this.https = https;
    }

    getHost() {
        let hosts = this.hosts;
        let url;
        if (Array.isArray(hosts) && hosts.length > 0) {
            let host = hosts[Math.floor(Math.random() * hosts.length)]
            let protocol = this.https ? 'https://' : 'http://';
            url = `${protocol}${host}:${this.port}`
        } else {
            url = '';
        }
        return url;
    }
}

module.exports = Basic;