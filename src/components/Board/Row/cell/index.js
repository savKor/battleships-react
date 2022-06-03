import React, { useContext, useState } from 'react';
import { ContextCounter, ContextForbiddenCells, ContextShipOnMap } from '../..';
import { ContextChoosenShip, ContextShipPosition, ContextShipState } from '../../../Main';

export function Cells({ rowIndex, colums }) {
	const { stateAreYouChooseTheShip, setStateAreYouChooseTheShip } = useContext(ContextShipState);
	const { shipPosition } = useContext(ContextShipPosition);
	const { choosenShipType } = useContext(ContextChoosenShip);
	const { arrayOfForbiddenCells, setArrayOfForbiddenCells } = useContext(ContextForbiddenCells);
	const { countShips, setCountShips } = useContext(ContextCounter);
	const { shipsOnMap, setShipsOnMap } = useContext(ContextShipOnMap);

	let cells = [];

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
						const idInForbiddenArray = arrayOfForbiddenCells.find(
							(id) => idOfCellWhereYouCanNoLongerAddShip === id
						);
						if (!idInForbiddenArray) {
							const newArray = arrayOfForbiddenCells;
							newArray.push(idOfCellWhereYouCanNoLongerAddShip);
							setArrayOfForbiddenCells(newArray);
						}
					}
				}
			}
		}
	}

	function getIdOfCell(cycleNumber, row, column) {
		let cellId;
		let newColumn;
		let newRow;
		let shipId;
		if (shipPosition === 'horizontal') {
			if (cycleNumber === 0) {
				newColumn = column;
			} else if (cycleNumber % 2 === 0) {
				newColumn = column + 1;
			} else if (cycleNumber >= 3) {
				newColumn = column + 2;
			} else {
				newColumn = column - 1;
			}
			cellId = row + '_' + newColumn;
			shipId = checkIfYouCanAddShipOnThisCell(cellId, newColumn);
		} else {
			if (cycleNumber === 0) {
				newRow = row;
			} else if (cycleNumber % 2 === 0) {
				newRow = row + 1;
			} else if (cycleNumber >= 3) {
				newRow = row + 2;
			} else {
				newRow = row - 1;
			}
			cellId = newRow + '_' + column;
			shipId = checkIfYouCanAddShipOnThisCell(cellId, newRow);
		}
		return shipId;
	}

	function checkIfYouCanAddShipOnThisCell(cellId, changeInBoard) {
		let shipElement;
		const idInForbiddenArray = arrayOfForbiddenCells.find((id) => cellId === id);
		if (idInForbiddenArray || changeInBoard < 0 || 10 <= changeInBoard) {
			shipElement = false;
		} else {
			shipElement = cellId;
		}
		return shipElement;
	}

	function getIdsOfShip(row, column) {
		let shipIds = [];
		for (let i = 0; i < choosenShipType[0]; i++) {
			let shipElement = getIdOfCell(i, row, column);
			if (shipElement !== false) {
				shipIds.push(shipElement);
			}
		}

		return shipIds;
	}

	function addCoordinates(idsOfShip) {
		const newCountOfShips = countShips;
		const key = choosenShipType[2];
		if (idsOfShip.length === choosenShipType[0] && newCountOfShips[key] !== choosenShipType[1]) {
			newCountOfShips[key] += 1;
			setCountShips(newCountOfShips);
			for (let i = 0; i < idsOfShip.length; i++) {
				const mappedShips = [ ...shipsOnMap ];
				mappedShips.push(idsOfShip[i]);
				setShipsOnMap(mappedShips);
				addCoordinatesWhereYouCantAddShipNow(idsOfShip[i]);
				setStateAreYouChooseTheShip(false);
			}
		} else if (newCountOfShips[key] === choosenShipType[1]) {
			alert('Все корабли этого типа уже были добавлены. Выберите другой корабль');
		} else {
			alert('нельзя тут ставить корабль');
		}
	}

	for (let j = 0; j < colums.length; j++) {
		let columnIndex = j;
		let cellId = rowIndex + '_' + columnIndex;

		async function addShipOnMap(e) {
			const offsetX = e.nativeEvent.offsetX;
			console.log(offsetX);
			if (stateAreYouChooseTheShip === true) {
				let idsOfShip = getIdsOfShip(rowIndex, columnIndex);
				addCoordinates(idsOfShip);
			} else {
				alert('Выбери корабль');
			}
		}

		if (shipsOnMap.find((id) => cellId === id)) {
			console.log(arrayOfForbiddenCells);
			console.log(shipsOnMap);
			const cell = <div id={cellId} className="cell-with-ships" onClick={addShipOnMap} />;
			cells[j] = cell;
		} else {
			const cell = <div id={cellId} className="cell" onClick={addShipOnMap} />;
			cells[j] = cell;
		}
	}

	return cells;
}
