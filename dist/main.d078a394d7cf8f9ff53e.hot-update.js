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

/***/ "./src/components/Board/index.js":
/*!***************************************!*\
  !*** ./src/components/Board/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Main */ \"./src/components/Main.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './Row'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar count = {\n  oneCellShip: 0,\n  twoCellShip: 0,\n  threeCellShip: 0,\n  fourCellShip: 0\n};\nvar size = 10;\nfunction Board() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextShipState),\n      stateAreYouChooseTheShip = _useContext.stateAreYouChooseTheShip,\n      setStateAreYouChooseTheShip = _useContext.setStateAreYouChooseTheShip;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextShipPosition),\n      shipPosition = _useContext2.shipPosition;\n\n  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextChoosenShip),\n      choosenShipType = _useContext3.choosenShipType;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      forbiddenArrayOfCells = _useState2[0],\n      setForbiddenArrayOfCells = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(count),\n      _useState4 = _slicedToArray(_useState3, 2),\n      countShips = _useState4[0],\n      setCountShips = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      shipsOnMap = _useState6[0],\n      setShipsOnMap = _useState6[1];\n\n  var matrix = createMatrix();\n  var field = [];\n\n  function createMatrix() {\n    var matrix = [];\n\n    for (var i = 0; i < size; i++) {\n      matrix[i] = getMatrixRowWithEmptyElement();\n    }\n\n    return matrix;\n  }\n\n  function getMatrixRowWithEmptyElement() {\n    var row = [];\n\n    for (var j = 0; j < size; j++) {\n      row[j] = undefined;\n    }\n\n    return row;\n  } // добавление тех координат на которые уже нельзя добавлять корабли\n\n\n  function addCoordinatesWhereYouCantAddShipNow(cellId) {\n    var splitId = cellId.split('_');\n    var idNumbers = splitId.map(Number);\n    var row = idNumbers[1];\n    var column = idNumbers[0];\n\n    for (var i = row - 1; i <= row + 1; i++) {\n      var rowIndex = i;\n\n      if (0 <= rowIndex && rowIndex < 10) {\n        for (var j = column - 1; j <= column + 1; j++) {\n          var columnIndex = j;\n\n          if (0 <= columnIndex && columnIndex < 10) {\n            (function () {\n              var idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + rowIndex;\n              var idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n                return idOfCellWhereYouCanNoLongerAddShip === id;\n              });\n\n              if (idInForbiddenArray) {\n                console.log('id уже в массиве');\n              } else {\n                var newArray = forbiddenArrayOfCells;\n                newArray.push(idOfCellWhereYouCanNoLongerAddShip);\n                console.log(newArray);\n                setForbiddenArrayOfCells(newArray);\n              }\n            })();\n          }\n        }\n      }\n    }\n  }\n\n  function getNewIdFromColumn(newNumber, row, column) {\n    var shipElement;\n    var newColumn = column + newNumber;\n    var newCellId = newColumn + '_' + row;\n    var idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n      return newCellId === id;\n    });\n\n    if (idInForbiddenArray || newColumn < 0 || 10 <= newColumn) {\n      newColumn = column - newNumber;\n      newCellId = newColumn + '_' + row;\n\n      var _idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n        return newCellId === id;\n      });\n\n      if (_idInForbiddenArray || newColumn < 0 || 10 <= newColumn) {\n        console.log('Клетка уже занята');\n        shipElement = false;\n      } else {\n        shipElement = newCellId;\n      }\n    } else {\n      shipElement = newCellId;\n    }\n\n    return shipElement;\n  }\n\n  function getNewIdFromRow(newNumber, row, column) {\n    var shipElement;\n    var newRow = row + newNumber;\n    var newCellId = column + '_' + newRow;\n    var idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n      return newCellId === id;\n    });\n\n    if (idInForbiddenArray || newRow < 0 || 10 <= newRow) {\n      newRow = row - newNumber;\n      newCellId = column + '_' + newRow;\n\n      var _idInForbiddenArray2 = forbiddenArrayOfCells.find(function (id) {\n        return newCellId === id;\n      });\n\n      if (_idInForbiddenArray2 || newRow < 0 || 10 <= newRow) {\n        console.log('Клетка уже занята');\n        shipElement = false;\n      } else {\n        shipElement = newCellId;\n      }\n    } else {\n      shipElement = newCellId;\n    }\n\n    return shipElement;\n  }\n\n  function getIdsOfShips(row, column) {\n    var shipSize = [];\n\n    for (var i = 0; i < choosenShipType[0]; i++) {\n      var cycleNumber = i;\n      var shipElement = void 0;\n\n      if (shipPosition === 'horizontal') {\n        shipElement = getNewIdFromColumn(cycleNumber, row, column);\n\n        if (shipElement !== false) {\n          shipSize.push(shipElement);\n        }\n      } else {\n        shipElement = getNewIdFromRow(cycleNumber, row, column);\n\n        if (shipElement !== false) {\n          shipSize.push(shipElement);\n        }\n      }\n    }\n\n    return shipSize;\n  }\n\n  function addCoordinates(idsAndSizeOfShip) {\n    var newCountOfShips = countShips;\n    var key = choosenShipType[2];\n\n    if (idsAndSizeOfShip.length === choosenShipType[0] && newCountOfShips[key] !== choosenShipType[1]) {\n      newCountOfShips[key] += 1;\n      setCountShips(newCountOfShips);\n\n      for (var i = 0; i < idsAndSizeOfShip.length; i++) {\n        var mappedShips = shipsOnMap;\n        var newCellId = idsAndSizeOfShip[i];\n        mappedShips.push(newCellId);\n        setShipsOnMap(mappedShips);\n        addCoordinatesWhereYouCantAddShipNow(newCellId);\n      }\n\n      setStateAreYouChooseTheShip(false);\n    } else if (newCountOfShips[key] === choosenShipType[1]) {\n      alert('Все корабли этого типа уже были добавлены');\n    } else {\n      console.log('Нельзя ставить тут корабль');\n      alert('Нельзя ставить тут корабль');\n    }\n  }\n\n  function getCells(rowIndex, choosenRow) {\n    var cells = [];\n\n    var _loop = function _loop(j) {\n      var columnIndex = j;\n      var cellId = rowIndex + '_' + columnIndex; // добавление корабля на сетку\n\n      function addShipOnMap(e) {\n        var offsetX = e.nativeEvent.offsetX;\n        console.log(offsetX);\n\n        if (stateAreYouChooseTheShip === true) {\n          var splitId = cellId.split('_');\n          var idNumbers = splitId.map(Number);\n          var row = idNumbers[1];\n          var column = idNumbers[0];\n          var idsAndSizeOfShip = getIdsOfShips(row, column);\n          addCoordinates(idsAndSizeOfShip);\n        } else {\n          alert('Выбери корабль');\n        }\n      }\n\n      var idOfCellWithAShip = shipsOnMap.find(function (id) {\n        return cellId === id;\n      });\n\n      if (idOfCellWithAShip) {\n        var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          id: cellId,\n          className: \"cell-with-ships\",\n          onClick: addShipOnMap\n        });\n        cells[j] = cell;\n      } else {\n        var _cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          id: cellId,\n          className: \"cell\",\n          onClick: addShipOnMap\n        });\n\n        cells[j] = _cell;\n      }\n    };\n\n    for (var j = 0; j < choosenRow.length; j++) {\n      _loop(j);\n    }\n\n    return cells;\n  }\n\n  for (var i = 0; i < matrix.length; i++) {\n    var choosenRow = matrix[i];\n    var rowIndex = i;\n    var cells = getCells(rowIndex, choosenRow);\n    var row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: rowIndex,\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Row'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n      rowIndex: rowIndex,\n      choosenRow: choosenRow\n    }));\n    field[i] = row;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board\"\n  }, field);\n} //newRow\n\nfunction getNewIdFromRow(cycleNumber, row, column) {\n  var shipElement;\n  var newRow;\n  var cellId;\n\n  if (idInForbiddenArray || newRow < 0 || 10 <= newRow) {\n    newRow = row - cycleNumber;\n    cellId = column + '_' + newRow;\n\n    var _idInForbiddenArray3 = forbiddenArrayOfCells.find(function (id) {\n      return cellId === id;\n    });\n\n    if (_idInForbiddenArray3 || newRow < 0 || 10 <= newRow) {\n      console.log('Клетка уже занята');\n      shipElement = false;\n    } else {\n      shipElement = cellId;\n    }\n  } else {\n    shipElement = cellId;\n  }\n\n  if (cycleNumber === 0) {\n    cellId = column + '_' + row;\n\n    var _idInForbiddenArray4 = forbiddenArrayOfCells.find(function (id) {\n      return cellId === id;\n    });\n\n    if (_idInForbiddenArray4) {\n      console.log('Клетка уже занята');\n      shipElement = false;\n    } else {\n      shipElement = cellId;\n    }\n  } else if (0 < cycleNumber < 3) {\n    if (cycleNumber % 2 === 0) {\n      newRow = row + 1;\n    } else {\n      newRow = row - 1;\n    }\n  } else {}\n\n  return shipElement;\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Board/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d802d3b53ba1ea7a6074")
/******/ })();
/******/ 
/******/ }
);