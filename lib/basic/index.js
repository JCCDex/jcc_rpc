'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Basic = function () {
    function Basic(hosts, port, https) {
        _classCallCheck(this, Basic);

        this.hosts = hosts;
        this.port = port;
        this.https = https;
    }

    _createClass(Basic, [{
        key: 'getHost',
        value: function getHost() {
            var hosts = this.hosts;
            var url = void 0;
            if (Array.isArray(hosts) && hosts.length > 0) {
                var host = hosts[Math.floor(Math.random() * hosts.length)];
                var protocol = this.https ? 'https://' : 'http://';
                url = '' + protocol + host + ':' + this.port;
            } else {
                url = '';
            }
            return url;
        }
    }]);

    return Basic;
}();

module.exports = Basic;