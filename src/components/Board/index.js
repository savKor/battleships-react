import React, { useContext, useState } from 'react';
import { ContextChoosenShip, ContextShipState } from '../Main';

export function Board() {
	const { chooseShip, setChoseShip } = useContext(ContextChoosenShip);
	const { shipState, setShipState } = useContext(ContextShipState);
	const [ forbiddenArrayOfCells, setForbiddenArrayOfCells ] = useState([]);
	const size = 10;
	const mappedShips = [];
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

	function addIdOfCellsWhereYouCantAddShipNow(cellId) {
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

	for (let i = 0; i < matrix.length; i++) {
		const choosenRow = matrix[i];
		let rowIndex = i;
		const cells = [];

		for (let j = 0; j < choosenRow.length; j++) {
			let columnIndex = j;
			let cellId = rowIndex + '_' + columnIndex;
			async function addShipOnMap(e) {
				if (shipState === true) {
					const idInForbiddenArray = forbiddenArrayOfCells.find((id) => cellId === id);
					if (idInForbiddenArray) {
						console.log('нельзя ставить корабль тут');
					} else {
						mappedShips.push(cellId);
						e.currentTarget.style.backgroundColor = 'red';
						addIdOfCellsWhereYouCantAddShipNow(cellId);
						setShipState(false);
					}
				}
			}

			const cell = <div id={cellId} className="cell" onClick={addShipOnMap} />;

			cells[j] = cell;
		}

		const row = (
			<div id={rowIndex} className="row">
				{cells}
			</div>
		);

		field[i] = row;
	}

	return <div id="board">{field}</div>;
}
