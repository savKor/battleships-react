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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextShipOnMap\": () => (/* binding */ ContextShipOnMap),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"ws\": () => (/* binding */ ws)\n/* harmony export */ });\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Main */ \"./src/components/Main.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _components_Battle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Battle */ \"./src/components/Battle.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Login */ \"./src/components/Login.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar ws = new WebSocket('ws://localhost:8082');\n\nws.onopen = function () {\n  console.log('Connected to Server');\n};\n\nvar ContextShipOnMap = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  shipsOnMap: null,\n  setShipsOnMap: function setShipsOnMap() {}\n});\n\nfunction App() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      shipsOnMap = _useState2[0],\n      setShipsOnMap = _useState2[1];\n\n  var shipArray = {\n    shipsOnMap: shipsOnMap,\n    setShipsOnMap: setShipsOnMap\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ContextShipOnMap.Provider, {\n    value: shipArray\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: _store__WEBPACK_IMPORTED_MODULE_3__.store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    path: \"/public/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Login__WEBPACK_IMPORTED_MODULE_5__.LoginPage, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    path: \"/public/main\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Main__WEBPACK_IMPORTED_MODULE_0__.MainPage, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    path: \"/public/main/battle/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Battle__WEBPACK_IMPORTED_MODULE_4__.BattlePage, null)\n  })))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://battleships-react/./src/App.js?");

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginPage\": () => (/* binding */ LoginPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction LoginPage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _useState2 = _slicedToArray(_useState, 2),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n\n  function changeUsername(e) {\n    setUsername(e.target.value);\n  }\n\n  function handleLoginClick() {\n    _App__WEBPACK_IMPORTED_MODULE_1__.ws.send(JSON.stringify(username));\n    var path = \"/public/battle/\";\n    navigate(path);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"nicknameBox\",\n    placeholder: \"Type your nickname here\",\n    style: \"display: block; width: 90%; margin-bottom: 10px; margin-left: 5%; padding: 10px;\",\n    onChange: function onChange(e) {\n      return changeUsername(e);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    id: \"send\",\n    title: \"Send Nickname!\",\n    style: \"width: 90%; margin-left: 5%; height: 30px;\",\n    onClick: handleLoginClick\n  }, \"Send Nickname\"));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Login.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4cbf775a3653c61d5651")
/******/ })();
/******/ 
/******/ }
);