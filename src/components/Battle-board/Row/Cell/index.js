import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ws } from '../../../../App';
import {
	checkedCellsSelector,
	dataForTheGameSelector,
	updateCheckedCells,
	usernameSelector
} from '../../../../features/counter/storageSlice';
import { getCellId } from '../../../../storage';

export function Cells({ rowIndex, colums, playerNick }) {
	const dispatch = useDispatch();
	const username = useSelector(usernameSelector);
	const dataForTheGame = useSelector(dataForTheGameSelector);

	const checkedCells = useSelector(checkedCellsSelector);

	const {
		turn,
		winner,
		player1,
		arrayOfMissedShotPlayer1,
		arrayOfMissedShotPlayer2,
		arrayOfShotShipsPlayer1,
		arrayOfShotShipsPlayer2
	} = dataForTheGame;

	let cells = [];

	function setClass(cellId) {
		let cellClass;
		if (playerNick === player1) {
			cellClass = getCellClass(arrayOfShotShipsPlayer1, arrayOfMissedShotPlayer1, cellId);
		} else {
			cellClass = getCellClass(arrayOfShotShipsPlayer2, arrayOfMissedShotPlayer2, cellId);
		}
		return cellClass;
	}

	function checkTheCellIfYouHitShipOrNot(e) {
		if (winner === null) {
			const cellId = e.target.id;
			const cellThatNotInArray = !checkedCells.some((id) => cellId === id);
			if (username === playerNick && username === turn && cellThatNotInArray === true) {
				dispatch(updateCheckedCells(cellId));
				ws.send(JSON.stringify(cellId));
			} else if (username !== playerNick && username === turn) {
				alert('Не ваша доска');
			} else if (cellThatNotInArray == false) {
				console.log('Ты уже проверял эту кнопку');
			} else {
				alert('Не ваш ход');
			}
		} else {
			alert('Игра закончена');
		}
	}

	for (let j = 0; j < colums.length; j++) {
		let columnIndex = j;
		let cellId = getCellId(rowIndex, columnIndex);

		let cellClass = setClass(cellId);

		const cell = <div id={cellId} className={cellClass} onClick={checkTheCellIfYouHitShipOrNot} />;
		cells[j] = cell;
	}

	return cells;
}

function getCellClass(arrayOfShotShips, arrayOfMissedShot, cellId) {
	let newCellClass;
	const missedShot = arrayOfMissedShot.some((id) => cellId === id);
	const hit = arrayOfShotShips.some((id) => cellId === id);
	if (hit) {
		newCellClass = 'cell-with-ships';
	} else if (missedShot) {
		newCellClass = 'cell-toggle-ship';
	} else {
		newCellClass = 'cell';
	}
	return newCellClass;
}
