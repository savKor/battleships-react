import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectState,
	updateArrayOfCellsDisplayedOnMap,
	updateArrayOfForbiddenCells,
	updateChosenShipType,
	updateCountShips,
	updateShipsOnMap,
	updateStateAreYouChooseTheShip
} from '../../../../features/counter/storageSlice';
import { getCellId, getRowAndColumn } from '../../../../storage';

export function Cells({ rowIndex, colums }) {
	const [ classForCell ] = useState('cell');
	const store = useSelector(selectState);
	const dispatch = useDispatch();

	const countShips = store.countShips;
	const shipPosition = store.shipPosition;
	const arrayOfCellsDisplayedOnMap = store.arrayOfCellsDisplayedOnMap;
	const stateAreYouChooseTheShip = store.stateAreYouChooseTheShip;
	const chosenShipType = store.chosenShipType;
	const arrayOfForbiddenCells = store.arrayOfForbiddenCells;
	const shipsOnMap = store.shipsOnMap;

	let cells = [];

	function addIdsOfCellsWhereYouCantAddShipNow(cellId) {
		const rowAndColumn = getRowAndColumn(cellId);
		const row = rowAndColumn[1];
		const column = rowAndColumn[0];
		for (let i = row - 1; i <= row + 1; i++) {
			let rowIndex = i;
			if (0 <= rowIndex && rowIndex < 10) {
				pushAllIdsWhereYouCantAddShipsNow(rowIndex, column);
			}
		}
	}

	function pushAllIdsWhereYouCantAddShipsNow(rowIndex, column) {
		for (let j = column - 1; j <= column + 1; j++) {
			let columnIndex = j;
			if (0 <= columnIndex && columnIndex < 10) {
				let idOfCellWhereYouCanNoLongerAddShip = getCellId(columnIndex, rowIndex);
				if (!arrayOfForbiddenCells.find((id) => idOfCellWhereYouCanNoLongerAddShip === id)) {
					dispatch(updateArrayOfForbiddenCells(idOfCellWhereYouCanNoLongerAddShip));
				}
			}
		}
	}

	function getIdsOfShip(row, column, setShipOrNot) {
		let shipIds = [];
		for (let i = 0; i < chosenShipType[0]; i++) {
			let shipElement = getIdOfCell(i, row, column, setShipOrNot);
			if (shipElement !== false) {
				shipIds.push(shipElement);
			}
		}

		return shipIds;
	}

	function getIdOfCell(checkShipSizeToPutCellInCertainPlace, row, column, setShipOrNot) {
		const value = {
			column,
			row
		};

		const key = shipPosition === 'horizontal' ? 'column' : 'row';

		if (checkShipSizeToPutCellInCertainPlace === 0) {
			value[key] = value[key];
		} else if (checkShipSizeToPutCellInCertainPlace % 2 === 0) {
			value[key] = value[key] + 1;
		} else if (checkShipSizeToPutCellInCertainPlace >= 3) {
			value[key] = value[key] + 2;
		} else {
			value[key] = value[key] - 1;
		}

		const cellId = getCellId(value['row'], value['column']);
		const shipId = checkIfYouCanAddShipOnThisCell(cellId, value[key], setShipOrNot);

		return shipId;
	}

	function checkIfYouCanAddShipOnThisCell(cellId, changeOnBoard, setShipOrNot) {
		let shipElement;
		let idInForbiddenArray = setShipOrNot === true ? arrayOfForbiddenCells.some((id) => cellId === id) : false;

		if (idInForbiddenArray || changeOnBoard < 0 || 10 <= changeOnBoard) {
			shipElement = false;
		} else {
			shipElement = cellId;
		}

		return shipElement;
	}

	function addCoordinates(idsOfShip) {
		const key = chosenShipType[2];
		if (idsOfShip.length === chosenShipType[0] && countShips[key] !== chosenShipType[1]) {
			dispatch(updateArrayOfCellsDisplayedOnMap([]));
			dispatch(updateCountShips(key));
			for (let i = 0; i < idsOfShip.length; i++) {
				dispatch(updateShipsOnMap(idsOfShip[i]));
				addIdsOfCellsWhereYouCantAddShipNow(idsOfShip[i]);
			}
			dispatch(updateStateAreYouChooseTheShip(false));
			dispatch(updateChosenShipType([]));
		} else if (countShips[key] === chosenShipType[1]) {
			alert('Все корабли этого типа уже были добавлены. Выберите другой корабль');
		} else {
			alert('нельзя тут ставить корабль');
		}
	}

	function addShipOnMap(e) {
		const rowAndColumn = getRowAndColumn(e.target.id);
		if (stateAreYouChooseTheShip === true) {
			const setOrNot = true;
			let idsOfShip = getIdsOfShip(rowAndColumn[0], rowAndColumn[1], setOrNot);
			addCoordinates(idsOfShip);
		} else {
			alert('Выбери корабль');
		}
	}

	function handleOnMouseOverOnBoard(e) {
		let cellId = getRowAndColumn(e.target.id);
		const setOrNot = false;
		let idsOfShip = getIdsOfShip(cellId[0], cellId[1], setOrNot);
		dispatch(updateArrayOfCellsDisplayedOnMap(idsOfShip));
	}

	function addListenersToShowTheShip(e) {
		if (stateAreYouChooseTheShip === true) {
			handleOnMouseOverOnBoard(e);
			e.target.onmouseout = () => {
				dispatch(updateArrayOfCellsDisplayedOnMap([]));
			};
		}
	}

	for (let j = 0; j < colums.length; j++) {
		let columnIndex = j;
		let cellId = getCellId(rowIndex, columnIndex);
		const cellOnMap = shipsOnMap.find((id) => cellId === id);
		const cellOnMouseOver = arrayOfCellsDisplayedOnMap.find((id) => cellId === id);
		const idInForbiddenArray = arrayOfForbiddenCells.find((id) => cellId === id);

		let cellClass = classForCell;

		if (cellOnMap || (cellOnMouseOver && idInForbiddenArray) || (cellOnMouseOver && cellOnMap)) {
			cellClass = 'cell-with-ships';
		} else if (cellOnMouseOver) {
			cellClass = 'cell-toggle-ship';
		}

		const cell = (
			<div id={cellId} className={cellClass} onClick={addShipOnMap} onMouseOver={addListenersToShowTheShip} />
		);
		cells[j] = cell;
	}

	return cells;
}
