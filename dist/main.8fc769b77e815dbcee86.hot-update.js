"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatebattleships_react"]("main",{

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextShip\": () => (/* binding */ ContextShip),\n/* harmony export */   \"MainPage\": () => (/* binding */ MainPage)\n/* harmony export */ });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/components/Board/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar ContextShip = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  chooseShip: null,\n  setChoseShip: function setChoseShip() {}\n});\nfunction MainPage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      chooseShip = _useState2[0],\n      setChoseShip = _useState2[1];\n\n  var value = {\n    chooseShip: chooseShip,\n    setChoseShip: setChoseShip\n  };\n\n  function chooseShipFromList() {\n    setChoseShip(true);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"spinner-border\",\n    role: \"status\",\n    id: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ContextShip.Provider, {\n    value: value\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    id: \"player-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, \"\\u0421\\u043F\\u0438\\u0441\\u043E\\u043A \\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u0435\\u0439\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: chooseShipFromList\n  }, \"\\u043E\\u0434\\u043D\\u0430 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Board__WEBPACK_IMPORTED_MODULE_0__.Board, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, \"\\u041D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0438\\u0433\\u0440\\u0443\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    id: \"player-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, \"\\u0421\\u043F\\u0438\\u0441\\u043E\\u043A \\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u0435\\u0439\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", null, \"\\u043E\\u0434\\u043D\\u0430 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Board__WEBPACK_IMPORTED_MODULE_0__.Board, null))));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ff657b249e9384b308a5")
/******/ })();
/******/ 
/******/ }
);