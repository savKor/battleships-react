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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Main */ \"./src/components/Main.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction Board() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextShipState),\n      shipState = _useContext.shipState,\n      setShipState = _useContext.setShipState;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      forbiddenArrayOfCells = _useState2[0],\n      setForbiddenArrayOfCells = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(count),\n      _useState4 = _slicedToArray(_useState3, 2),\n      countShips = _useState4[0],\n      setCountShips = _useState4[1];\n\n  var sizeAndAmountOfShips = [1, 4, 'oneCellShip'];\n  var shipPosition = 'horizontal';\n  var size = 10;\n  var mappedShips = [];\n  var matrix = createMatrix();\n  var field = [];\n  var count = {\n    oneCellShip: 0,\n    twoCellShip: 0,\n    threeCellShip: 0,\n    fourCellShip: 0\n  };\n\n  function createMatrix() {\n    var matrix = [];\n\n    for (var i = 0; i < size; i++) {\n      matrix[i] = getMatrixRowWithEmptyElement();\n    }\n\n    return matrix;\n  }\n\n  function getMatrixRowWithEmptyElement() {\n    var row = [];\n\n    for (var j = 0; j < size; j++) {\n      row[j] = undefined;\n    }\n\n    return row;\n  } // добавление тех координат на которые уже нельзя добавлять корабли\n\n\n  function addIdOfCellsWhereYouCantAddShipNow(cellId) {\n    var splitId = cellId.split('_');\n    var idNumbers = splitId.map(Number);\n    var row = idNumbers[1];\n    var column = idNumbers[0];\n\n    for (var i = row - 1; i <= row + 1; i++) {\n      var rowIndex = i;\n\n      if (0 <= rowIndex && rowIndex < 10) {\n        for (var j = column - 1; j <= column + 1; j++) {\n          var columnIndex = j;\n\n          if (0 <= columnIndex && columnIndex < 10) {\n            (function () {\n              var idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + rowIndex;\n              var idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n                return idOfCellWhereYouCanNoLongerAddShip === id;\n              });\n\n              if (idInForbiddenArray) {\n                console.log('id уже в массиве');\n              } else {\n                var newArray = forbiddenArrayOfCells;\n                newArray.push(idOfCellWhereYouCanNoLongerAddShip);\n                console.log(newArray);\n                setForbiddenArrayOfCells(newArray);\n              }\n            })();\n          }\n        }\n      }\n    }\n  }\n\n  function getIdsOfShipInHorizontalPosition(row, column) {\n    var shipSize = [];\n    debugger;\n\n    var _loop = function _loop(i) {\n      var newColumn = column + i;\n      var newCellId = void 0;\n\n      if (newColumn < 10) {\n        newColumn = column - i;\n        newCellId = row + '_' + newColumn;\n        var idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n          return newCellId === id;\n        });\n\n        if (idInForbiddenArray) {\n          console.log('нельзя ставить корабль тут1');\n        } else {\n          shipSize.push(newCellId);\n        }\n      } else {\n        newCellId = row + '_' + newColumn;\n\n        var _idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n          return newCellId === id;\n        });\n\n        if (_idInForbiddenArray) {\n          console.log('нельзя ставить корабль тут2');\n        } else {\n          shipSize.push(newCellId);\n        }\n      }\n    };\n\n    for (var i = 0; i < sizeAndAmountOfShips[0]; i++) {\n      _loop(i);\n    }\n\n    return shipSize;\n  }\n\n  for (var i = 0; i < matrix.length; i++) {\n    var choosenRow = matrix[i];\n    var rowIndex = i;\n    var cells = [];\n\n    var _loop2 = function _loop2(j) {\n      var columnIndex = j;\n      var cellId = rowIndex + '_' + columnIndex; // добавление корабля на корабль\n\n      function addShipOnMap(e) {\n        if (shipState === true) {\n          var splitId = cellId.split('_');\n          var idNumbers = splitId.map(Number);\n          var _row = idNumbers[1];\n          var column = idNumbers[0];\n          var key = sizeAndAmountOfShips[2];\n          debugger;\n\n          if (shipPosition === 'horizontal') {\n            var shipSize = getIdsOfShipInHorizontalPosition(_row, column);\n            console.log(newCountOfShips);\n            debugger;\n\n            if (shipSize === sizeAndAmountOfShips[0] && newCountOfShips[key] !== sizeAndAmountOfShips[1]) {\n              for (var _i2 = 0; _i2 < shipSize; _i2++) {\n                var newCellId = shipSize[_i2];\n                mappedShips.push(newCellId);\n                newCountOfShips[key] += 1;\n                e.currentTarget.style.backgroundColor = 'red';\n                addIdOfCellsWhereYouCantAddShipNow(newCellId);\n                setShipState(false);\n                setCountShips(newCountOfShips);\n              }\n            } else {\n              console.log('Нельзя ставить корабль3');\n            }\n          } else {\n            console.log('Тоже самое но один элемент изменится');\n          }\n        }\n      }\n\n      var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell\",\n        onClick: addShipOnMap\n      });\n      cells[j] = cell;\n    };\n\n    for (var j = 0; j < choosenRow.length; j++) {\n      _loop2(j);\n    }\n\n    var row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: rowIndex,\n      className: \"row\"\n    }, cells);\n    field[i] = row;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board\"\n  }, field);\n}\n\nfunction addCoordinates(row, column, key) {\n  var shipSize = getIdsOfShipInHorizontalPosition(row, column);\n  var newCountOfShips = countShips;\n  console.log(newCountOfShips);\n  debugger;\n\n  if (shipSize === sizeAndAmountOfShips[0] && newCountOfShips[key] !== sizeAndAmountOfShips[1]) {\n    for (var i = 0; i < shipSize; i++) {\n      var newCellId = shipSize[i];\n      mappedShips.push(newCellId);\n      newCountOfShips[key] += 1;\n      e.currentTarget.style.backgroundColor = 'red';\n      addIdOfCellsWhereYouCantAddShipNow(newCellId);\n      setShipState(false);\n      setCountShips(newCountOfShips);\n    }\n  } else {\n    console.log('Нельзя ставить корабль3');\n  }\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Board/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3342fa79b14f9add919d")
/******/ })();
/******/ 
/******/ }
);