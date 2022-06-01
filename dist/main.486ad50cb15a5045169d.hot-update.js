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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextChoosenShip\": () => (/* binding */ ContextChoosenShip),\n/* harmony export */   \"ContextShipPosition\": () => (/* binding */ ContextShipPosition),\n/* harmony export */   \"ContextShipState\": () => (/* binding */ ContextShipState),\n/* harmony export */   \"MainPage\": () => (/* binding */ MainPage)\n/* harmony export */ });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/components/Board/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar ContextShipPosition = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  shipPosition: null,\n  setShipPosition: function setShipPosition() {}\n});\nvar ContextChoosenShip = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  choosenShipType: null,\n  setChoosenShipType: function setChoosenShipType() {}\n});\nvar ContextShipState = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  stateAreYouChooseTheShip: null,\n  setStateAreYouChooseTheShip: function setStateAreYouChooseTheShip() {}\n});\nfunction MainPage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      choosenShipType = _useState2[0],\n      setChoosenShipType = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      stateAreYouChooseTheShip = _useState4[0],\n      setStateAreYouChooseTheShip = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('horizontal'),\n      _useState6 = _slicedToArray(_useState5, 2),\n      shipPosition = _useState6[0],\n      setShipPosition = _useState6[1];\n\n  var shipType = {\n    oneCellShip: [1, 4, 'oneCellShip'],\n    twoCellShip: [2, 3, 'twoCellShip'],\n    threeCellShip: [3, 2, 'threeCellShip'],\n    fourCellShip: [4, 1, 'fourCellShip']\n  };\n  var stateCheck = {\n    stateAreYouChooseTheShip: stateAreYouChooseTheShip,\n    setStateAreYouChooseTheShip: setStateAreYouChooseTheShip\n  };\n  var position = {\n    shipPosition: shipPosition,\n    setShipPosition: setShipPosition\n  };\n  var choosenShip = {\n    choosenShipType: choosenShipType,\n    setChoosenShipType: setChoosenShipType\n  };\n\n  function chooseShipFromList(e) {\n    setStateAreYouChooseTheShip(true);\n    var key = e.target.id;\n    setChoosenShipType(shipType[key]);\n    console.log(shipType[key]);\n  }\n\n  function changePosition() {\n    if (shipPosition === 'horizontal') {\n      setShipPosition('vertical');\n    } else {\n      setShipPosition('horizontal');\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"spinner-border\",\n    role: \"status\",\n    id: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ContextShipState.Provider, {\n    value: stateCheck\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ContextChoosenShip.Provider, {\n    value: position\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"changePosition\",\n    onClick: changePosition\n  }, \"\\u043F\\u0435\\u0440\\u0435\\u0432\\u0435\\u0440\\u043D\\u0438 \\u0432\\u0438\\u0433\\u0443\\u0440\\u0443\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    id: \"player-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, \"\\u0421\\u043F\\u0438\\u0441\\u043E\\u043A \\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u0435\\u0439\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"oneCellShip\",\n    onClick: chooseShipFromList\n  }, \"\\u043E\\u0434\\u043D\\u0430 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"twoCellShip\",\n    onClick: chooseShipFromList\n  }, \"\\u0434\\u0432\\u0435 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"threeCellShip\",\n    onClick: chooseShipFromList\n  }, \"\\u0442\\u0440\\u0438 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"fourCellShip\",\n    onClick: chooseShipFromList\n  }, \"\\u0447\\u0435\\u0442\\u044B\\u0440\\u0435 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Board__WEBPACK_IMPORTED_MODULE_0__.Board, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, \"\\u041D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0438\\u0433\\u0440\\u0443\"))));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ea0ee0bd87289de7c677")
/******/ })();
/******/ 
/******/ }
);