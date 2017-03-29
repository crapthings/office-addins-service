module.exports = { contents: "'use strict';\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = require('react-dom');\n\nvar _domready = require('domready');\n\nvar _domready2 = _interopRequireDefault(_domready);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Index = function Index() {\n  return _react2.default.createElement(\n    'h1',\n    null,\n    'hello kitty'\n  );\n};\n\n(0, _domready2.default)(function () {\n  (0, _reactDom.render)(_react2.default.createElement(Index, null), document.getElementById('wrapper'));\n});",
dependencies: ["react","react-dom","domready"],
sourceMap: {},
headerContent: undefined,
mtime: 1490773161000
};