'use strict';

Liferay.Loader.define("cuaca@1.0.0/AppComponent", ['module', 'exports', 'require', 'cuaca$react', 'cuaca$react-dom'], function (module, exports, require) {
	var define = undefined;
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _react = require("cuaca$react");

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = require("cuaca$react-dom");

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _class = function (_React$Component) {
		_inherits(_class, _React$Component);

		function _class() {
			_classCallCheck(this, _class);

			return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
		}

		_createClass(_class, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'tag' }, 'Portlet Namespace:'), _react2.default.createElement('span', { className: 'value' }, this.props.user_name)), _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'tag' }, 'Context Path:'), _react2.default.createElement('span', { className: 'value' }, this.props.contextPath)), _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'tag' }, 'Portlet Element Id:'), _react2.default.createElement('span', { className: 'value' }, this.props.portletElementId)));
			}
		}]);

		return _class;
	}(_react2.default.Component);

	exports.default = _class;
	//# sourceMappingURL=AppComponent.js.map
});
//# sourceMappingURL=AppComponent.js.map