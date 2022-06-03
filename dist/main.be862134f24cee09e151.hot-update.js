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

/***/ "./src/components/Board/Row/Cell/index.js":
/*!************************************************!*\
  !*** ./src/components/Board/Row/Cell/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Main */ \"./src/components/Main.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar count = {\n  oneCellShip: 0,\n  twoCellShip: 0,\n  threeCellShip: 0,\n  fourCellShip: 0\n};\nfunction Cells(_ref) {\n  var rowIndex = _ref.rowIndex,\n      colums = _ref.colums;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextShipState),\n      stateAreYouChooseTheShip = _useContext.stateAreYouChooseTheShip,\n      setStateAreYouChooseTheShip = _useContext.setStateAreYouChooseTheShip;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextShipPosition),\n      shipPosition = _useContext2.shipPosition;\n\n  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextChoosenShip),\n      choosenShipType = _useContext3.choosenShipType;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      arrayOfForbiddenCells = _useState2[0],\n      setForbiddenArrayOfCells = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(count),\n      _useState4 = _slicedToArray(_useState3, 2),\n      countShips = _useState4[0],\n      setCountShips = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      shipsOnMap = _useState6[0],\n      setShipsOnMap = _useState6[1];\n\n  var cells = [];\n\n  var _loop = function _loop(j) {\n    var columnIndex = j;\n    var cellId = rowIndex + '_' + columnIndex;\n\n    function addShipOnMap(e) {\n      var offsetX = e.nativeEvent.offsetX;\n      console.log(offsetX);\n\n      if (stateAreYouChooseTheShip === true) {\n        var idsOfShip = getIdsOfShip(rowIndex, columnIndex);\n        addCoordinates(idsOfShip);\n      } else {\n        alert('Выбери корабль');\n      }\n    }\n\n    var idOfCellWithAShip = shipsOnMap.find(function (id) {\n      return cellId === id;\n    });\n\n    if (idOfCellWithAShip) {\n      var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell-with-ships\",\n        onClick: addShipOnMap\n      });\n      cells[j] = cell;\n    } else {\n      var _cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell\",\n        onClick: addShipOnMap\n      });\n\n      cells[j] = _cell;\n    }\n  };\n\n  for (var j = 0; j < colums.length; j++) {\n    _loop(j);\n  }\n\n  return cells;\n} // добавление тех координат на которые уже нельзя добавлять корабли\n\nfunction addCoordinatesWhereYouCantAddShipNow(cellId) {\n  var splitId = cellId.split('_');\n  var idNumbers = splitId.map(Number);\n  var row = idNumbers[1];\n  var column = idNumbers[0];\n\n  for (var i = row - 1; i <= row + 1; i++) {\n    var rowIndex = i;\n\n    if (0 <= rowIndex && rowIndex < 10) {\n      for (var j = column - 1; j <= column + 1; j++) {\n        var columnIndex = j;\n\n        if (0 <= columnIndex && columnIndex < 10) {\n          (function () {\n            var idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + rowIndex;\n            var idInForbiddenArray = arrayOfForbiddenCells.find(function (id) {\n              return idOfCellWhereYouCanNoLongerAddShip === id;\n            });\n\n            if (idInForbiddenArray) {\n              console.log('id уже в массиве');\n            } else {\n              var newArray = arrayOfForbiddenCells;\n              newArray.push(idOfCellWhereYouCanNoLongerAddShip);\n              setForbiddenArrayOfCells(newArray);\n            }\n          })();\n        }\n      }\n    }\n  }\n}\n\nfunction getId(cycleNumber, row, column) {\n  var cellId;\n  var newColumn;\n  var newRow;\n\n  if (shipPosition === 'horizontal') {\n    if (cycleNumber % 2 === 0) {\n      newColumn = column + 1;\n    } else if (cycleNumber >= 3) {\n      newColumn = column + 2;\n    } else {\n      newColumn = column - 1;\n    }\n\n    cellId = newColumn + '_' + row;\n    checkIfYouCanAddShip(cellId, newColumn);\n  } else {\n    if (cycleNumber % 2 === 0) {\n      newRow = row + 1;\n    } else if (cycleNumber >= 3) {\n      newRow = row + 2;\n    } else {\n      newRow = row - 1;\n    }\n\n    cellId = column + '_' + newRow;\n    checkIfYouCanAddShip(cellId, newRow);\n  }\n\n  return shipIds;\n}\n\nfunction checkIfYouCanAddShip(cellId, changeInBoard) {\n  var shipElement;\n\n  if (idInForbiddenArray || changeInBoard < 0 || 10 <= changeInBoard) {\n    shipElement = false;\n  } else {\n    shipElement = cellId;\n  }\n}\n\nfunction getIdsOfShip(row, column) {\n  var shipIds = [];\n\n  for (var i = 0; i < choosenShipType[0]; i++) {\n    var numberOfCycle = i;\n    var shipElement = getId(numberOfCycle, row, column);\n\n    if (shipElement !== false) {\n      shipIds.push(shipElement);\n    }\n  }\n\n  return shipIds;\n}\n\nfunction addCoordinates(idsOfShip) {\n  var newCountOfShips = countShips;\n  var key = choosenShipType[2];\n\n  if (idsOfShip.length === choosenShipType[0] && newCountOfShips[key] !== choosenShipType[1]) {\n    newCountOfShips[key] += 1;\n    setCountShips(newCountOfShips);\n\n    for (var i = 0; i < idsOfShip.length; i++) {\n      var mappedShips = shipsOnMap;\n      var newCellId = idsOfShip[i];\n      mappedShips.push(newCellId);\n      setShipsOnMap(mappedShips);\n      addCoordinatesWhereYouCantAddShipNow(newCellId);\n    }\n  } else if (newCountOfShips[key] === choosenShipType[1]) {\n    alert('Все корабли этого типа уже были добавлены. Выберите другой корабль');\n    setStateAreYouChooseTheShip(false);\n  }\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Board/Row/Cell/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca8540d203aa3e3da799")
/******/ })();
/******/ 
/******/ }
);