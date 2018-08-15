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

var JcInfo = function (_Basic) {
    (0, _inherits3.default)(JcInfo, _Basic);

    function JcInfo(hosts, port, https) {
        (0, _classCallCheck3.default)(this, JcInfo);
        return (0, _possibleConstructorReturn3.default)(this, (JcInfo.__proto__ || (0, _getPrototypeOf2.default)(JcInfo)).call(this, hosts, port, https));
    }

    /**
     * get ticker info
     * @param {string} base 
     * @param {string} counter 
     */


    (0, _createClass3.default)(JcInfo, [{
        key: 'getTicker',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(base, counter) {
                var pair, data, res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                pair = base + '-' + counter.replace(/CNT/i, 'CNY');
                                data = {
                                    url: this.getHost() + '/info/ticker/' + pair,
                                    method: 'get'
                                };
                                _context.next = 4;
                                return fetch(data);

                            case 4:
                                res = _context.sent;
                                return _context.abrupt('return', res);

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getTicker(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return getTicker;
        }()

        /**
         * get all tickers info
         */

    }, {
        key: 'getAllTickers',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var data, res;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                data = {
                                    url: this.getHost() + '/info/alltickers',
                                    method: 'get'
                                };
                                _context2.next = 3;
                                return fetch(data);

                            case 3:
                                res = _context2.sent;
                                return _context2.abrupt('return', res);

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getAllTickers() {
                return _ref2.apply(this, arguments);
            }

            return getAllTickers;
        }()

        /**
         * 
         * @param {string} base 
         * @param {string} counter 
         * @param {string} type 
         */

    }, {
        key: 'getDepth',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(base, counter, type) {
                var pair, data, res;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                pair = base + '-' + counter.replace(/CNT/i, 'CNY');
                                data = {
                                    url: this.getHost() + '/info/depth/' + pair + '/' + type,
                                    method: 'get'
                                };
                                _context3.next = 4;
                                return fetch(data);

                            case 4:
                                res = _context3.sent;
                                return _context3.abrupt('return', res);

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getDepth(_x3, _x4, _x5) {
                return _ref3.apply(this, arguments);
            }

            return getDepth;
        }()

        /**
         * 
         * @param {string} base 
         * @param {string} counter 
         * @param {string} type 
         */

    }, {
        key: 'getKline',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(base, counter, type) {
                var pair, data, res;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                pair = base + '-' + counter.replace(/CNT/i, 'CNY');
                                data = {
                                    url: this.getHost() + '/info/kline/' + pair + '/' + type,
                                    method: 'get'
                                };
                                _context4.next = 4;
                                return fetch(data);

                            case 4:
                                res = _context4.sent;
                                return _context4.abrupt('return', res);

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getKline(_x6, _x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return getKline;
        }()

        /**
         * 
         * @param {string} base 
         * @param {string} counter 
         * @param {string} type 
         * @param {unix time} time
         */

    }, {
        key: 'getHistory',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(base, counter, type, time) {
                var pair, url, data, res;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                pair = base + '-' + counter.replace(/CNT/i, 'CNY');
                                url = this.getHost() + '/info/history/' + pair + '/' + type;
                                data = {
                                    url: url,
                                    method: 'get'
                                };

                                if (type === 'newest') {
                                    data.params = {
                                        time: time
                                    };
                                }
                                _context5.next = 6;
                                return fetch(data);

                            case 6:
                                res = _context5.sent;
                                return _context5.abrupt('return', res);

                            case 8:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getHistory(_x9, _x10, _x11, _x12) {
                return _ref5.apply(this, arguments);
            }

            return getHistory;
        }()
    }]);
    return JcInfo;
}(Basic);

module.exports = JcInfo;