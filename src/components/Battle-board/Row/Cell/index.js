import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ws } from '../../../../App';
import {
	checkedCellsSelector,
	dataForTheGameSelector,
	selectState,
	updateCheckedCells
} from '../../../../features/counter/storageSlice';
import { getCellId } from '../../../../storage';

export function Cells({ rowIndex, colums, playerNick }) {
	const [ classForCell ] = useState('cell');
	const store = useSelector(selectState);
	const dispatch = useDispatch();
	// const checkedCells = store.checkedCells;
	const username = store.username;
	const dataForTheGame = useSelector(dataForTheGameSelector);

	const checkedCells = useSelector(checkedCellsSelector);

	const {
		turn,
		winner,
		player1,
		player2,
		arrayOfMissedShotPlayer1,
		arrayOfMissedShotPlayer2,
		arrayOfShotShipsPlayer1,
		arrayOfShotShipsPlayer2
	} = dataForTheGame;

	let cells = [];

	function changeCellClass(arrayOfShotShips, arrayOfMissedShot) {
		let newCellClass;
		if (arrayOfShotShips.find((id) => cellId === id)) {
			newCellClass = 'cell-with-ships';
		} else if (arrayOfMissedShot.find((id) => cellId === id)) {
			newCellClass = 'cell-toggle-ship';
		} else {
			newCellClass = classForCell;
		}
		return newCellClass;
	}

	function checkTheCell(e) {
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

		let cellClass;

		if (playerNick === player1) {
			cellClass = changeCellClass(arrayOfShotShipsPlayer1, arrayOfMissedShotPlayer1);
		} else if (playerNick === player2) {
			cellClass = changeCellClass(arrayOfShotShipsPlayer2, arrayOfMissedShotPlayer2);
		}

		const cell = <div id={cellId} className={cellClass} onClick={checkTheCell} />;
		cells[j] = cell;
	}

	return cells;
}
