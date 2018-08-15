'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = require('../fetch');
var Basic = require('../Basic');

var JcConfig = function (_Basic) {
    (0, _inherits3.default)(JcConfig, _Basic);

    function JcConfig(hosts, port, https) {
        (0, _classCallCheck3.default)(this, JcConfig);
        return (0, _possibleConstructorReturn3.default)(this, (JcConfig.__proto__ || (0, _getPrototypeOf2.default)(JcConfig)).call(this, hosts, port, https));
    }

    /**
     * get config
     */


    (0, _createClass3.default)(JcConfig, [{
        key: 'getConfig',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var data, res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    url: this.getHost() + '/static/config/jc_config.json' + '?t=' + new Date().getTime(),
                                    method: 'get'
                                };
                                _context.next = 3;
                                return fetch(data);

                            case 3:
                                res = _context.sent;
                                return _context.abrupt('return', res);

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getConfig() {
                return _ref.apply(this, arguments);
            }

            return getConfig;
        }()
    }]);
    return JcConfig;
}(Basic);

module.exports = JcConfig;