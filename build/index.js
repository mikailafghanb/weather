'use strict';

Liferay.Loader.define('cuaca@1.0.0/index', ['module', 'exports', 'require', 'cuaca$react', 'cuaca$react-dom', './App'], function (module, exports, require) {
    var define = undefined;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = main;

    var _react = require('cuaca$react');

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = require('cuaca$react-dom');

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _App = require('./App');

    var _App2 = _interopRequireDefault(_App);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    // import 'weather-icons2/css/weather-icons.css';
    //import 'bootstrap/dist/css/bootstrap.min.css';
    //import './assets/test.css';
    /**
     * This is the main entry point of the portlet.
     *
     * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
     * information on the signature of this function.
     *
     * @param  {Object} params a hash with values of interest to the portlet
     * @return {void}
     */
    function main(_ref) {
        var portletNamespace = _ref.portletNamespace,
            user_name = _ref.user_name,
            portletElementId = _ref.portletElementId;

        _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById(portletElementId));
    }
    //# sourceMappingURL=index.js.map
});
//# sourceMappingURL=index.js.map