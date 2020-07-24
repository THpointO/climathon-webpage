"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));

var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));

require("./CustomNavBar.css");

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CustomNavBar = function CustomNavBar(_ref) {
  var props = _extends({}, _ref);

  console.log(props, 'test');
  return /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    collapseOnSelect: true,
    expand: "lg",
    className: "navbar navbar-expand-sm navbar-light navbar-custom",
    style: {
      backgroundColor: props.colour
    }
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default.Toggle, {
    "aria-controls": "navbarSupportedContent"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: require("./TransparentbgGREY.png"),
    height: 60
  })), /*#__PURE__*/_react.default.createElement(_Navbar.default.Collapse, {
    id: "responsive-navbar-nav ",
    style: {
      backgroundColor: props.colour
    }
  }, /*#__PURE__*/_react.default.createElement(_Nav.default, {
    className: "ml-auto"
  }, /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    className: "nav-item active"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "About Us")), /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    className: "nav-item active"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Hackathon")), /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    className: "nav-item active"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Blog")), /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    className: "nav-item active"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Contact us")), /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    className: "nav-item active"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Singup/Login")))));
};

var _default = CustomNavBar;
exports.default = _default;

//# sourceMappingURL=CustomNavBar.js.map