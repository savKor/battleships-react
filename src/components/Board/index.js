import React, { createContext, useContext, useState } from 'react';
import { Row } from './Row';

const count = {
	oneCellShip: 0,
	twoCellShip: 0,
	threeCellShip: 0,
	fourCellShip: 0
};
const size = 10;

export const ContextCounter = createContext({
	countShips: null,
	setCountShips: () => {}
});

export const ContextForbiddenCells = createContext({
	arrayOfForbiddenCells: null,
	setArrayOfForbiddenCells: () => {}
});

export const ContextShipOnMap = createContext({
	shipsOnMap: null,
	setShipsOnMap: () => {}
});

export function Board() {
	const [ countShips, setCountShips ] = useState(count);
	const [ shipsOnMap, setShipsOnMap ] = useState([]);
	const [ arrayOfForbiddenCells, setArrayOfForbiddenCells ] = useState([]);

	const counter = { countShips, setCountShips };
	const shipArray = { shipsOnMap, setShipsOnMap };
	const forbiddenArray = { arrayOfForbiddenCells, setArrayOfForbiddenCells };

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

	const matrix = createMatrix();
	const field = [];

	function onAddToForbiddenArray(cells) {
		setForbiddenArray((forbiddenArray) => ({ ...forbiddenArray, cells }));
	}

	for (let i = 0; i < matrix.length; i++) {
		const colums = matrix[i];
		let rowIndex = i;

		const row = <Row rowIndex={rowIndex} colums={colums} />;

		field[i] = row;
	}

	return (
		<ContextCounter.Provider value={counter}>
			<ContextForbiddenCells.Provider value={forbiddenArray}>
				<ContextShipOnMap.Provider value={shipArray}>
					<div id="board">{field}</div>
				</ContextShipOnMap.Provider>
			</ContextForbiddenCells.Provider>
		</ContextCounter.Provider>
	);
}
