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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkedCellsSelector\": () => (/* binding */ checkedCellsSelector),\n/* harmony export */   \"counterSlice\": () => (/* binding */ counterSlice),\n/* harmony export */   \"dataForTheGameSelector\": () => (/* binding */ dataForTheGameSelector),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"incrementAsync\": () => (/* binding */ incrementAsync),\n/* harmony export */   \"selectState\": () => (/* binding */ selectState),\n/* harmony export */   \"updateArrayOfCellsDisplayedOnMap\": () => (/* binding */ updateArrayOfCellsDisplayedOnMap),\n/* harmony export */   \"updateArrayOfForbiddenCells\": () => (/* binding */ updateArrayOfForbiddenCells),\n/* harmony export */   \"updateCheckedCells\": () => (/* binding */ updateCheckedCells),\n/* harmony export */   \"updateChosenShipType\": () => (/* binding */ updateChosenShipType),\n/* harmony export */   \"updateCountShips\": () => (/* binding */ updateCountShips),\n/* harmony export */   \"updateDataForTheGame\": () => (/* binding */ updateDataForTheGame),\n/* harmony export */   \"updateShipPosition\": () => (/* binding */ updateShipPosition),\n/* harmony export */   \"updateShipsOnMap\": () => (/* binding */ updateShipsOnMap),\n/* harmony export */   \"updateStateAreYouChooseTheShip\": () => (/* binding */ updateStateAreYouChooseTheShip),\n/* harmony export */   \"updateUsername\": () => (/* binding */ updateUsername),\n/* harmony export */   \"usernameSelector\": () => (/* binding */ usernameSelector)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/reselect/es/index.js\");\n\nvar count = {\n  oneCellShip: 0,\n  twoCellShip: 0,\n  threeCellShip: 0,\n  fourCellShip: 0\n};\nvar counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'storage',\n  initialState: {\n    shipPosition: 'horizontal',\n    chosenShipType: [],\n    stateAreYouChooseTheShip: false,\n    countShips: count,\n    arrayOfCellsDisplayedOnMap: [],\n    arrayOfForbiddenCells: [],\n    shipsOnMap: [],\n    username: null,\n    dataForTheGame: null,\n    checkedCells: []\n  },\n  reducers: {\n    updateShipPosition: function updateShipPosition(state, action) {\n      state.shipPosition = action.payload;\n    },\n    updateChosenShipType: function updateChosenShipType(state, action) {\n      state.chosenShipType = action.payload;\n    },\n    updateStateAreYouChooseTheShip: function updateStateAreYouChooseTheShip(state, action) {\n      state.stateAreYouChooseTheShip = action.payload;\n    },\n    updateCountShips: function updateCountShips(state, action) {\n      var countShips = state.countShips;\n      var key = action.payload;\n      countShips[key] += 1;\n      state.countShips = countShips;\n    },\n    updateArrayOfCellsDisplayedOnMap: function updateArrayOfCellsDisplayedOnMap(state, action) {\n      state.arrayOfCellsDisplayedOnMap = action.payload;\n    },\n    updateArrayOfForbiddenCells: function updateArrayOfForbiddenCells(state, action) {\n      var arrayOfForbiddenCells = state.arrayOfForbiddenCells;\n      arrayOfForbiddenCells.push(action.payload);\n      state.arrayOfForbiddenCells = arrayOfForbiddenCells;\n    },\n    updateShipsOnMap: function updateShipsOnMap(state, action) {\n      var shipsOnMap = state.shipsOnMap;\n      shipsOnMap.push(action.payload);\n      state.shipsOnMap = shipsOnMap;\n    },\n    updateUsername: function updateUsername(state, action) {\n      state.username = action.payload;\n    },\n    updateDataForTheGame: function updateDataForTheGame(state, action) {\n      state.dataForTheGame = action.payload;\n    },\n    updateCheckedCells: function updateCheckedCells(state, action) {\n      var checkedCells = state.checkedCells;\n      checkedCells.push(action.payload);\n      state.checkedCells = checkedCells;\n    }\n  }\n});\nvar _counterSlice$actions = counterSlice.actions,\n    updateShipPosition = _counterSlice$actions.updateShipPosition,\n    updateChosenShipType = _counterSlice$actions.updateChosenShipType,\n    updateStateAreYouChooseTheShip = _counterSlice$actions.updateStateAreYouChooseTheShip,\n    updateCountShips = _counterSlice$actions.updateCountShips,\n    updateArrayOfCellsDisplayedOnMap = _counterSlice$actions.updateArrayOfCellsDisplayedOnMap,\n    updateArrayOfForbiddenCells = _counterSlice$actions.updateArrayOfForbiddenCells,\n    updateShipsOnMap = _counterSlice$actions.updateShipsOnMap,\n    updateUsername = _counterSlice$actions.updateUsername,\n    updateDataForTheGame = _counterSlice$actions.updateDataForTheGame,\n    updateCheckedCells = _counterSlice$actions.updateCheckedCells;\n\nvar incrementAsync = function incrementAsync(action, fn) {\n  return function (dispatch) {\n    setTimeout(function () {\n      dispatch(fn(action));\n    }, 1000);\n  };\n};\nvar selectState = function selectState(state) {\n  return state.storage;\n};\nvar checkedCellsSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectState, function (state) {\n  return state.checkedCells;\n});\nvar dataForTheGameSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectState, function (state) {\n  return state.dataForTheGame;\n});\nvar usernameSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectState, function (state) {\n  return state.username;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\n\n//# sourceURL=webpack://battleships-react/./src/features/counter/storageSlice.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0865b0aaa5de09067cc2")
/******/ })();
/******/ 
/******/ }
);