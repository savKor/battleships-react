import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContextForbiddenCells } from '../..';
import {
	selectState,
	updateArrayOfCellsDisplaedOnMap,
	updateChoosenShipType,
	updateCountShips,
	updateStateAreYouChooseTheShip
} from '../../../../features/counter/storageSlice';
import { getRowAndColumn } from '../../../../storage';
import { ContextShipOnMap } from '../../../Main';

export function Cells({ rowIndex, colums }) {
	const { arrayOfForbiddenCells, setArrayOfForbiddenCells } = useContext(ContextForbiddenCells);
	const { shipsOnMap, setShipsOnMap } = useContext(ContextShipOnMap);
	const [ classForCell ] = useState('cell');

	const store = useSelector(selectState);
	const dispatch = useDispatch();

	const countShips = store.countShips;
	const shipPosition = store.shipPosition;
	const arrayOfCellsDisplaedOnMap = store.arrayOfCellsDisplaedOnMap;
	const stateAreYouChooseTheShip = store.stateAreYouChooseTheShip;
	const choosenShipType = store.choosenShipType;

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
				let idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + rowIndex;
				if (!arrayOfForbiddenCells.find((id) => idOfCellWhereYouCanNoLongerAddShip === id)) {
					const newArray = arrayOfForbiddenCells;
					newArray.push(idOfCellWhereYouCanNoLongerAddShip);
					setArrayOfForbiddenCells(newArray);
				}
			}
		}
	}

	function getIdsOfShip(row, column, setShipOrNot) {
		let shipIds = [];
		for (let i = 0; i < choosenShipType[0]; i++) {
			let shipElement = getIdOfCell(i, row, column, setShipOrNot);
			if (shipElement !== false) {
				shipIds.push(shipElement);
			}
		}

		return shipIds;
	}

	function getIdOfCell(cycleNumber, row, column, setShipOrNot) {
		const value = {
			column,
			row
		};

		const key = shipPosition === 'horizontal' ? 'column' : 'row';

		if (cycleNumber === 0) {
			value[key] = value[key];
		} else if (cycleNumber % 2 === 0) {
			value[key] = value[key] + 1;
		} else if (cycleNumber >= 3) {
			value[key] = value[key] + 2;
		} else {
			value[key] = value[key] - 1;
		}

		const cellId = value['row'] + '_' + value['column'];
		const shipId = checkIfYouCanAddShipOnThisCell(cellId, value[key], setShipOrNot);

		return shipId;
	}

	function checkIfYouCanAddShipOnThisCell(cellId, changeOnBoard, setShipOrNot) {
		let shipElement;
		let idInForbiddenArray = setShipOrNot === true ? arrayOfForbiddenCells.find((id) => cellId === id) : false;

		if (idInForbiddenArray || changeOnBoard < 0 || 10 <= changeOnBoard) {
			shipElement = false;
		} else {
			shipElement = cellId;
		}

		return shipElement;
	}

	function addCoordinates(idsOfShip) {
		const key = choosenShipType[2];
		if (idsOfShip.length === choosenShipType[0] && countShips[key] !== choosenShipType[1]) {
			dispatch(updateArrayOfCellsDisplaedOnMap([]));
			dispatch(updateCountShips(key));
			const mappedShips = [ ...shipsOnMap ];
			for (let i = 0; i < idsOfShip.length; i++) {
				mappedShips.push(idsOfShip[i]);
				addIdsOfCellsWhereYouCantAddShipNow(idsOfShip[i]);
			}
			dispatch(updateStateAreYouChooseTheShip(false));
			dispatch(updateChoosenShipType([]));
			setShipsOnMap(mappedShips);
		} else if (countShips[key] === choosenShipType[1]) {
			alert('Все корабли этого типа уже были добавлены. Выберите другой корабль');
		} else {
			alert('нельзя тут ставить корабль');
		}
	}

	function addShipOnMap(e) {
		const rowAndColumn = getRowAndColumn(e.target.id);
		if (stateAreYouChooseTheShip === true) {
			e.target.onmouseover;
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
		dispatch(updateArrayOfCellsDisplaedOnMap(idsOfShip));
	}

	function addListenersToShowTheShip(e) {
		if (stateAreYouChooseTheShip === true) {
			handleOnMouseOverOnBoard(e);
			e.target.onmouseout = () => {
				dispatch(updateArrayOfCellsDisplaedOnMap([]));
			};
		}
	}

	for (let j = 0; j < colums.length; j++) {
		let columnIndex = j;
		let cellId = rowIndex + '_' + columnIndex;
		const cellOnMap = shipsOnMap.find((id) => cellId === id);
		const cellOnMouseOver = arrayOfCellsDisplaedOnMap.find((id) => cellId === id);
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
