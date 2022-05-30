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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Main */ \"./src/components/Main.js\");\n\n\nfunction Board() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextShip),\n      chooseShip = _useContext.chooseShip,\n      setChoseShip = _useContext.setChoseShip;\n\n  var size = 10;\n  var amountOfShip = {\n    oneCellShip: 0\n  };\n  var forbiddenCells = [];\n  var idOfShip = [];\n\n  function createMatrix() {\n    var matrix = [];\n\n    for (var i = 0; i < size; i++) {\n      matrix[i] = getMatrixRowWithEmptyElement();\n    }\n\n    return matrix;\n  }\n\n  function getMatrixRowWithEmptyElement() {\n    var row = [];\n\n    for (var j = 0; j < size; j++) {\n      row[j] = undefined;\n    }\n\n    return row;\n  }\n\n  function addIdOfCellsWhereYouCantAddShipNow(cellId) {\n    var splitId = cellId.split('_');\n    var idNumbers = splitId.map(Number);\n    var row = idNumbers[1];\n    var column = idNumbers[0];\n\n    for (var i = row - 1; i <= row + 1; i++) {\n      var rowIndex = i;\n\n      if (0 <= rowIndex && rowIndex < 10) {\n        for (var j = column - 1; j <= column + 1; j++) {\n          var columnIndex = j;\n\n          if (0 <= columnIndex && columnIndex < 10) {\n            (function () {\n              var idOfCell = columnIndex + '_' + rowIndex;\n              var idInArray = forbiddenCells.find(function (id) {\n                return idOfCell === id;\n              });\n\n              if (idInArray) {\n                console.log('id уже в массиве');\n              } else {\n                forbiddenCells.push(idOfCell);\n                console.log(forbiddenCells);\n              }\n            })();\n          }\n        }\n      }\n    }\n  }\n\n  var matrix = createMatrix();\n  var field = [];\n\n  for (var i = 0; i < matrix.length; i++) {\n    var choosenRow = matrix[i];\n    var rowIndex = i;\n    var cells = [];\n\n    var _loop = function _loop(j) {\n      var columnIndex = j;\n      var cellId = rowIndex + '_' + columnIndex;\n\n      function addShipOnMap(e) {\n        if (chooseShip === true) {\n          var idInArray = forbiddenCells.find(function (id) {\n            return cellId === id;\n          });\n          debugger;\n\n          if (idInArray) {\n            console.log('нельзя ставить корабль тут');\n          } else {\n            idOfShip.push(cellId);\n            e.currentTarget.style.backgroundColor = 'red';\n            console.log(idOfShip);\n            addIdOfCellsWhereYouCantAddShipNow(cellId);\n          }\n        }\n      }\n\n      var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell\",\n        onClick: addShipOnMap\n      });\n      cells[j] = cell;\n    };\n\n    for (var j = 0; j < choosenRow.length; j++) {\n      _loop(j);\n    }\n\n    var row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: rowIndex,\n      className: \"row\"\n    }, cells);\n    field[i] = row;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board\"\n  }, field);\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Board/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("93e17ce2305d825326e0")
/******/ })();
/******/ 
/******/ }
);