import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ws } from '../../../../App';
import { selectState } from '../../../../features/counter/storageSlice';

export function Cells({ rowIndex, colums, playerNick }) {
	const [ classForCell ] = useState('cell');
	const store = useSelector(selectState);
	const dispatch = useDispatch();
	const username = store.username;
	const dataForTheGame = store.dataForTheGame;
	const turn = dataForTheGame.turn;
	const player1 = dataForTheGame.player1;
	const player2 = dataForTheGame.player2;
	const arrayOfMissedShotPlayer1 = dataForTheGame.arrayOfMissedShotPlayer1;
	const arrayOfMissedShotPlayer2 = dataForTheGame.arrayOfMissedShotPlayer2;
	const arrayOfShotShipsPlayer1 = dataForTheGame.arrayOfShotShipsPlayer1;
	const arrayOfShotShipsPlayer2 = dataForTheGame.arrayOfShotShipsPlayer2;

	let cells = [];

	function checkTheCell(e) {
		if (username === playerNick && username === turn) {
			const cellId = e.target.id;
			ws.send(JSON.stringify(cellId));
		} else if (username !== playerNick && username === turn) {
			alert('Не ваша доска');
		} else {
			alert('Не ваш ход');
		}
	}

	for (let j = 0; j < colums.length; j++) {
		let columnIndex = j;
		let cellId = rowIndex + '_' + columnIndex;

		let cellClass = classForCell;

		if (playerNick === player1) {
			if (arrayOfShotShipsPlayer1.find((id) => cellId === id)) {
				cellClass = 'cell-with-ships';
			} else if (arrayOfMissedShotPlayer1.find((id) => cellId === id)) {
				cellClass = 'cell-toggle-ship';
			}
		} else if (playerNick === player2) {
			if (arrayOfShotShipsPlayer2.find((id) => cellId === id)) {
				cellClass = 'cell-with-ships';
			} else if (arrayOfMissedShotPlayer2.find((id) => cellId === id)) {
				cellClass = 'cell-toggle-ship';
			}
		}

		const cell = <div id={cellId} className={cellClass} onClick={checkTheCell} />;
		cells[j] = cell;
	}

	return cells;
}
