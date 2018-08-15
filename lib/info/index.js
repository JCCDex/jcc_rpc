'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fetch = require('../fetch');
var Basic = require('../Basic');

var JcInfo = function (_Basic) {
    _inherits(JcInfo, _Basic);

    function JcInfo(hosts, port, https) {
        _classCallCheck(this, JcInfo);

        return _possibleConstructorReturn(this, (JcInfo.__proto__ || Object.getPrototypeOf(JcInfo)).call(this, hosts, port, https));
    }

    /**
     * get ticker info
     * @param {string} base 
     * @param {string} counter 
     */


    _createClass(JcInfo, [{
        key: 'getTicker',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(base, counter) {
                var pair, data, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
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
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var data, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(base, counter, type) {
                var pair, data, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(base, counter, type) {
                var pair, data, res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(base, counter, type, time) {
                var pair, url, data, res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
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