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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Board() {\n  var idOfCells = [];\n  var idOfShip = [];\n\n  function createMatrix() {\n    var matrix = [];\n    var n = 10,\n        m = 10;\n\n    for (var _i = 0; _i < n; _i++) {\n      matrix[_i] = getMatrixRowWithEmptyElement(m);\n    }\n\n    return matrix;\n  }\n\n  function getMatrixRowWithEmptyElement(size) {\n    var row = [];\n\n    for (var _j = 0; _j < size; _j++) {\n      row[_j] = undefined;\n    }\n\n    return row;\n  }\n\n  function addIdOfCellsWhereYouCantAddShipNow(cellId) {\n    var splitId = cellId.split('_');\n    var idNumbers = splitId.map(Number);\n    var row = idNumbers[1];\n    var column = idNumbers[0];\n\n    for (i = row - 1; i <= row + 1; i++) {\n      var rowIndex = i;\n\n      if (0 <= rowIndex || rowIndex < 10) {\n        for (j = column - 1; j <= column + 1; j++) {\n          var columnIndex = j;\n\n          if (0 <= columnIndex || columnIndex < 10) {\n            (function () {\n              var idOfCell = rowIndex + '_' + columnIndex;\n              var idInArray = idOfCells.find(function (id) {\n                return idOfCell === id;\n              });\n\n              if (idInArray) {\n                console.log('id уже в массиве');\n              } else {\n                idOfCells.push(idOfCell);\n              }\n            })();\n          }\n        }\n      }\n    }\n  }\n\n  var matrix = createMatrix();\n  var field = [];\n\n  for (var _i2 = 0; _i2 < matrix.length; _i2++) {\n    var choosenRow = matrix[_i2];\n    var rowIndex = _i2;\n    var cells = [];\n\n    var _loop = function _loop(_j2) {\n      var columnIndex = _j2;\n      var cellId = rowIndex + '_' + columnIndex;\n\n      function addShipOnMap() {\n        var idInArray = idOfCells.find(function (id) {\n          return cellId === id;\n        });\n\n        if (idInArray) {\n          console.log('id уже в массиве');\n        } else {\n          idOfShip.push(cellId);\n          addIdOfCellsWhereYouCantAddShipNow(cellId);\n        }\n      }\n\n      var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell\",\n        onClick: addShipOnMap\n      });\n      cells[_j2] = cell;\n    };\n\n    for (var _j2 = 0; _j2 < choosenRow.length; _j2++) {\n      _loop(_j2);\n    }\n\n    var row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: rowIndex,\n      className: \"row\"\n    }, cells);\n    field[_i2] = row;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board\"\n  }, field);\n} //a-1_b-1=<a+1_b-1\n//a-1_b=<a+1_b\n//a-1_b+1=<a+1_b+1\n// for(i==a-1; i<=a+1; i++)\n\n//# sourceURL=webpack://battleships-react/./src/components/Board/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d096bd66e8827067f408")
/******/ })();
/******/ 
/******/ }
);