'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Basic = function () {
    function Basic(hosts, port, https) {
        (0, _classCallCheck3.default)(this, Basic);

        this.hosts = hosts;
        this.port = port;
        this.https = https;
    }

    (0, _createClass3.default)(Basic, [{
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