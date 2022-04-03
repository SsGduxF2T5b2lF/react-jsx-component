'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded$1 = ["label"];
var Text = _ref => {
  var props = _extends({}, _ref);

  var {
    label
  } = props,
      rest = _objectWithoutProperties(props, _excluded$1);

  label = label != null && label != undefined && String(props.label) || '';
  return /*#__PURE__*/React__default["default"].createElement("p", rest, label);
};

var _excluded = ["label", "style"];
var Button = _ref => {
  var props = _extends({}, _ref);

  var {
    label,
    style
  } = props,
      rest = _objectWithoutProperties(props, _excluded);

  label = label != null && label != undefined && String(label) || '';
  style = style || {};
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    style: {
      style
    }
  }, rest), label, " Ipsum");
};

exports.Button = Button;
exports.Text = Text;
//# sourceMappingURL=index.js.map
