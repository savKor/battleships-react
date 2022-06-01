import React, { useContext, useState } from 'react';
import { ContextChoosenShip, ContextShipPosition, ContextShipState } from '../Main';

const count = {
	oneCellShip: 0,
	twoCellShip: 0,
	threeCellShip: 0,
	fourCellShip: 0
};
const size = 10;

export function Board() {
	const { stateAreYouChooseTheShip, setStateAreYouChooseTheShip } = useContext(ContextShipState);
	const { shipPosition } = useContext(ContextShipPosition);
	const { choosenShipType } = useContext(ContextChoosenShip);
	const [ forbiddenArrayOfCells, setForbiddenArrayOfCells ] = useState([]);
	const [ countShips, setCountShips ] = useState(count);
	const [ shipsOnMap, setShipsOnMap ] = useState([]);

	const matrix = createMatrix();
	const field = [];

	function createMatrix() {
		let matrix = [];
		for (let i = 0; i < size; i++) {
			matrix[i] = getMatrixRowWithEmptyElement();
		}
		return matrix;
	}

	function getMatrixRowWithEmptyElement() {
		let row = [];
		for (let j = 0; j < size; j++) {
			row[j] = undefined;
		}
		return row;
	}

	// добавление тех координат на которые уже нельзя добавлять корабли
	function addCoordinatesWhereYouCantAddShipNow(cellId) {
		const splitId = cellId.split('_');
		const idNumbers = splitId.map(Number);
		const row = idNumbers[1];
		const column = idNumbers[0];
		for (let i = row - 1; i <= row + 1; i++) {
			let rowIndex = i;
			if (0 <= rowIndex && rowIndex < 10) {
				for (let j = column - 1; j <= column + 1; j++) {
					let columnIndex = j;
					if (0 <= columnIndex && columnIndex < 10) {
						let idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + rowIndex;
						const idInForbiddenArray = forbiddenArrayOfCells.find(
							(id) => idOfCellWhereYouCanNoLongerAddShip === id
						);
						if (idInForbiddenArray) {
							console.log('id уже в массиве');
						} else {
							const newArray = forbiddenArrayOfCells;
							newArray.push(idOfCellWhereYouCanNoLongerAddShip);
							console.log(newArray);
							setForbiddenArrayOfCells(newArray);
						}
					}
				}
			}
		}
	}

	function getNewIdFromColumn(newNumber, row, column) {
		let shipElement;
		let newColumn = column + newNumber;
		let newCellId = newColumn + '_' + row;
		const idInForbiddenArray = forbiddenArrayOfCells.find((id) => newCellId === id);

		if (idInForbiddenArray || newColumn < 0 || 10 <= newColumn) {
			newColumn = column - newNumber;
			newCellId = newColumn + '_' + row;
			const idInForbiddenArray = forbiddenArrayOfCells.find((id) => newCellId === id);
			if (idInForbiddenArray || newColumn < 0 || 10 <= newColumn) {
				console.log('Клетка уже занята');
				shipElement = false;
			} else {
				shipElement = newCellId;
			}
		} else {
			shipElement = newCellId;
		}

		return shipElement;
	}

	function getNewIdFromRow(newNumber, row, column) {
		let shipElement;
		let newRow = row + newNumber;
		let newCellId = column + '_' + newRow;
		const idInForbiddenArray = forbiddenArrayOfCells.find((id) => newCellId === id);
		if (idInForbiddenArray || newRow < 0 || 10 <= newRow) {
			newRow = row - newNumber;
			newCellId = column + '_' + newRow;
			const idInForbiddenArray = forbiddenArrayOfCells.find((id) => newCellId === id);
			if (idInForbiddenArray || newRow < 0 || 10 <= newRow) {
				console.log('Клетка уже занята');
				shipElement = false;
			} else {
				shipElement = newCellId;
			}
		} else {
			shipElement = newCellId;
		}

		return shipElement;
	}

	function getIdsOfShips(row, column) {
		let shipSize = [];
		for (let i = 0; i < choosenShipType[0]; i++) {
			let cycleNumber = i;
			let shipElement;
			if (shipPosition === 'horizontal') {
				shipElement = getNewIdFromColumn(cycleNumber, row, column);
				if (shipElement !== false) {
					shipSize.push(shipElement);
				}
			} else {
				shipElement = getNewIdFromRow(cycleNumber, row, column);
				if (shipElement !== false) {
					shipSize.push(shipElement);
				}
			}
		}

		return shipSize;
	}

	function addCoordinates(idsAndSizeOfShip) {
		const newCountOfShips = countShips;
		const key = choosenShipType[2];
		if (idsAndSizeOfShip.length === choosenShipType[0] && newCountOfShips[key] !== choosenShipType[1]) {
			newCountOfShips[key] += 1;
			setCountShips(newCountOfShips);
			for (let i = 0; i < idsAndSizeOfShip.length; i++) {
				const mappedShips = shipsOnMap;
				let newCellId = idsAndSizeOfShip[i];
				mappedShips.push(newCellId);
				setShipsOnMap(mappedShips);
				addCoordinatesWhereYouCantAddShipNow(newCellId);
			}
			setStateAreYouChooseTheShip(false);
		} else if (newCountOfShips[key] === choosenShipType[1]) {
			alert('Все корабли этого типа уже были добавлены');
		} else {
			console.log('Нельзя ставить тут корабль');
			alert('Нельзя ставить тут корабль');
		}
	}

	function getCells(rowIndex, choosenRow) {
		let cells = [];

		for (let j = 0; j < choosenRow.length; j++) {
			let columnIndex = j;
			let cellId = rowIndex + '_' + columnIndex;

			// добавление корабля на сетку

			function addShipOnMap(e) {
				const offsetX = e.nativeEvent;
				console.log(offsetX);
				if (stateAreYouChooseTheShip === true) {
					const splitId = cellId.split('_');
					const idNumbers = splitId.map(Number);
					const row = idNumbers[1];
					const column = idNumbers[0];
					let idsAndSizeOfShip = getIdsOfShips(row, column);
					addCoordinates(idsAndSizeOfShip);
				} else {
					alert('Выбери корабль');
				}
			}

			const idOfCellWithAShip = shipsOnMap.find((id) => cellId === id);

			if (idOfCellWithAShip) {
				const cell = <div id={cellId} className="cell-with-ships" onClick={addShipOnMap} />;
				cells[j] = cell;
			} else {
				const cell = <div id={cellId} className="cell" onClick={addShipOnMap} />;
				cells[j] = cell;
			}
		}
		return cells;
	}

	for (let i = 0; i < matrix.length; i++) {
		const choosenRow = matrix[i];
		let rowIndex = i;
		const cells = getCells(rowIndex, choosenRow);

		const row = (
			<div id={rowIndex} className="row">
				{cells}
			</div>
		);

		field[i] = row;
	}

	return <div id="board">{field}</div>;
}

//newRow

function getNewIdFromRow(cycleNumber, row, column) {
	let shipElement;
	let newRow;
	let cellId;
	if (idInForbiddenArray || newRow < 0 || 10 <= newRow) {
		newRow = row - cycleNumber;
		cellId = column + '_' + newRow;
		const idInForbiddenArray = forbiddenArrayOfCells.find((id) => cellId === id);
		if (idInForbiddenArray || newRow < 0 || 10 <= newRow) {
			console.log('Клетка уже занята');
			shipElement = false;
		} else {
			shipElement = cellId;
		}
	} else {
		shipElement = cellId;
	}

	if (cycleNumber === 0) {
		cellId = column + '_' + row;
		const idInForbiddenArray = forbiddenArrayOfCells.find((id) => cellId === id);
		if (idInForbiddenArray) {
			console.log('Клетка уже занята');
			shipElement = false;
		} else {
			shipElement = cellId;
		}
	} else if (0 < cycleNumber < 3) {
		if (cycleNumber % 2 === 0) {
			newRow = row + 1;
		} else {
			newRow = row - 1;
		}
	} else {
	}

	return shipElement;
}
