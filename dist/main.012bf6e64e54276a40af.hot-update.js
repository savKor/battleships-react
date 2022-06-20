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

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginPage\": () => (/* binding */ LoginPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n/* harmony import */ var _features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/counter/storageSlice */ \"./src/features/counter/storageSlice.js\");\n\n\n\n\n\nfunction LoginPage() {\n  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.selectState);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();\n  var username = store.username;\n\n  function changeUsername(e) {\n    dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateUsername)(e.target.value));\n  }\n\n  function handleLoginClick() {\n    if ('WebSocket' in window) {\n      _App__WEBPACK_IMPORTED_MODULE_2__.ws.send(JSON.stringify(username));\n      var path = \"/public/main/\";\n      navigate(path);\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"login-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"nickname-box\",\n    placeholder: \"Type your nickname here\",\n    onChange: function onChange(e) {\n      return changeUsername(e);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    id: \"send\",\n    title: \"Send Nickname!\",\n    onClick: handleLoginClick\n  }, \"Send Nickname\")));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Login.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d71958d6197f0b6194f8")
/******/ })();
/******/ 
/******/ }
);