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

var JcExchange = function (_Basic) {
    (0, _inherits3.default)(JcExchange, _Basic);

    function JcExchange(hosts, port, https) {
        (0, _classCallCheck3.default)(this, JcExchange);
        return (0, _possibleConstructorReturn3.default)(this, (JcExchange.__proto__ || (0, _getPrototypeOf2.default)(JcExchange)).call(this, hosts, port, https));
    }

    /**
     * get balance with jingtum address
     * @param {hex string} address
     */


    (0, _createClass3.default)(JcExchange, [{
        key: 'getBalances',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
                var data, res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = {
                                    url: this.getHost() + '/exchange/balances/' + address,
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

            function getBalances(_x) {
                return _ref.apply(this, arguments);
            }

            return getBalances;
        }()

        /**
         * get historic transactions with jingtum address
         * @param {hex string} address 
         * @param {number} page 
         * @param {number} ledger 
         * @param {number} seq 
         */

    }, {
        key: 'getHistoricTransactions',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(address, page) {
                var ledger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var seq = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var url, data, res;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                url = this.getHost() + '/exchange/tx/' + address + '/' + page;
                                data = {
                                    url: url,
                                    method: 'get'
                                };

                                if (page > 1) {
                                    data.params = {
                                        ledger: ledger,
                                        seq: seq
                                    };
                                }
                                _context2.next = 5;
                                return fetch(data);

                            case 5:
                                res = _context2.sent;
                                return _context2.abrupt('return', res);

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getHistoricTransactions(_x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return getHistoricTransactions;
        }()

        /**
         * get current orders with jingtum address
         * @param {hex string} address 
         * @param {number} page 
         */

    }, {
        key: 'getOrders',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(address, page) {
                var data, res;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                data = {
                                    url: this.getHost() + '/exchange/orders/' + address + '/' + page,
                                    method: 'get'
                                };
                                _context3.next = 3;
                                return fetch(data);

                            case 3:
                                res = _context3.sent;
                                return _context3.abrupt('return', res);

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getOrders(_x6, _x7) {
                return _ref3.apply(this, arguments);
            }

            return getOrders;
        }()

        /**
         * create order
         * @param {hex string} data 
         */

    }, {
        key: 'createOrder',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(data) {
                var params, res;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                params = {
                                    url: this.getHost() + '/exchange/sign_order',
                                    method: 'post',
                                    data: data
                                };
                                _context4.next = 3;
                                return fetch(params);

                            case 3:
                                res = _context4.sent;
                                return _context4.abrupt('return', res);

                            case 5:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function createOrder(_x8) {
                return _ref4.apply(this, arguments);
            }

            return createOrder;
        }()

        /**
         * cancel an order
         * @param {hex string} data 
         */

    }, {
        key: 'deleteOrder',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(data) {
                var params, res;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                params = {
                                    url: this.getHost() + '/exchange/sign_cancel_order',
                                    method: 'delete',
                                    data: data
                                };
                                _context5.next = 3;
                                return fetch(params);

                            case 3:
                                res = _context5.sent;
                                return _context5.abrupt('return', res);

                            case 5:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function deleteOrder(_x9) {
                return _ref5.apply(this, arguments);
            }

            return deleteOrder;
        }()

        /**
         * get sequence with jingtum address
         * @param {hex string} address
         */

    }, {
        key: 'getSequence',
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(address) {
                var data, res;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                data = {
                                    url: this.getHost() + '/exchange/sequence/' + address,
                                    method: 'get'
                                };
                                _context6.next = 3;
                                return fetch(data);

                            case 3:
                                res = _context6.sent;
                                return _context6.abrupt('return', res);

                            case 5:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getSequence(_x10) {
                return _ref6.apply(this, arguments);
            }

            return getSequence;
        }()

        /**
         * transfer account
         * @param {hex string} data 
         */

    }, {
        key: 'transferAccount',
        value: function () {
            var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(data) {
                var params, res;
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                params = {
                                    url: this.getHost() + '/exchange/sign_payment',
                                    method: 'post',
                                    data: data
                                };
                                _context7.next = 3;
                                return fetch(params);

                            case 3:
                                res = _context7.sent;
                                return _context7.abrupt('return', res);

                            case 5:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function transferAccount(_x11) {
                return _ref7.apply(this, arguments);
            }

            return transferAccount;
        }()
    }]);
    return JcExchange;
}(Basic);

module.exports = JcExchange;