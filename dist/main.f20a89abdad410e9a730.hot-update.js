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

/***/ "./src/features/counter/storageSlice.js":
/*!**********************************************!*\
  !*** ./src/features/counter/storageSlice.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": () => (/* binding */ counterSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"incrementAsync\": () => (/* binding */ incrementAsync),\n/* harmony export */   \"selectState\": () => (/* binding */ selectState),\n/* harmony export */   \"updateArrayOfCellsDisplaedOnMap\": () => (/* binding */ updateArrayOfCellsDisplaedOnMap),\n/* harmony export */   \"updateArrayOfForbiddenCells\": () => (/* binding */ updateArrayOfForbiddenCells),\n/* harmony export */   \"updateChoosenShipType\": () => (/* binding */ updateChoosenShipType),\n/* harmony export */   \"updateCountShips\": () => (/* binding */ updateCountShips),\n/* harmony export */   \"updateShipPosition\": () => (/* binding */ updateShipPosition),\n/* harmony export */   \"updateShipsOnMap\": () => (/* binding */ updateShipsOnMap),\n/* harmony export */   \"updateStateAreYouChooseTheShip\": () => (/* binding */ updateStateAreYouChooseTheShip)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar count = {\n  oneCellShip: 0,\n  twoCellShip: 0,\n  threeCellShip: 0,\n  fourCellShip: 0\n};\nvar counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'storage',\n  initialState: {\n    shipPosition: 'horizontal',\n    choosenShipType: [],\n    stateAreYouChooseTheShip: false,\n    countShips: count,\n    shipsOnMap: [],\n    arrayOfForbiddenCells: [],\n    arrayOfCellsDisplaedOnMap: []\n  },\n  reducers: {\n    updateShipPosition: function updateShipPosition(state, action) {\n      state.shipPosition = action.payload;\n    },\n    updateChoosenShipType: function updateChoosenShipType(state, action) {\n      state.choosenShipType = action.payload;\n    },\n    updateStateAreYouChooseTheShip: function updateStateAreYouChooseTheShip(state, action) {\n      state.stateAreYouChooseTheShip = action.payload;\n    },\n    updateCountShips: function updateCountShips(state, action) {\n      state.countShips = action.payload;\n    },\n    updateShipsOnMap: function updateShipsOnMap(state, action) {\n      state.shipsOnMap = action.payload;\n    },\n    updateArrayOfForbiddenCells: function updateArrayOfForbiddenCells(state, action) {\n      state.arrayOfForbiddenCells = action.payload;\n    },\n    updateArrayOfCellsDisplaedOnMap: function updateArrayOfCellsDisplaedOnMap(state, action) {\n      state.arrayOfCellsDisplaedOnMap = action.payload;\n    }\n  }\n});\nvar _counterSlice$actions = counterSlice.actions,\n    updateShipPosition = _counterSlice$actions.updateShipPosition,\n    updateChoosenShipType = _counterSlice$actions.updateChoosenShipType,\n    updateStateAreYouChooseTheShip = _counterSlice$actions.updateStateAreYouChooseTheShip,\n    updateCountShips = _counterSlice$actions.updateCountShips,\n    updateShipsOnMap = _counterSlice$actions.updateShipsOnMap,\n    updateArrayOfForbiddenCells = _counterSlice$actions.updateArrayOfForbiddenCells,\n    updateArrayOfCellsDisplaedOnMap = _counterSlice$actions.updateArrayOfCellsDisplaedOnMap;\n\nvar incrementAsync = function incrementAsync(action, fn) {\n  return function (dispatch) {\n    setTimeout(function () {\n      dispatch(fn(action));\n    }, 1000);\n  };\n};\nvar selectState = function selectState(state) {\n  return state.storage;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\n\n//# sourceURL=webpack://battleships-react/./src/features/counter/storageSlice.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c17dd92c85c922969c9d")
/******/ })();
/******/ 
/******/ }
);