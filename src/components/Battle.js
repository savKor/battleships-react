import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ws } from '../App';
import { selectState, updateDataForTheGame } from '../features/counter/storageSlice';
import { Board } from './Battle-board';

export function BattlePage() {
	const store = useSelector(selectState);
	const dispatch = useDispatch();
	const dataForTheGame = store.dataForTheGame;

	let battle;

	ws.onmessage = function({ data }) {
		const object = JSON.parse(data);
		dispatch(updateDataForTheGame(object));
	};

	if (dataForTheGame === null) {
		battle = <div>жди</div>;
	} else {
		battle = (
			<div id="main">
				<div id="board-of-the-game">
					<Board playerNick={dataForTheGame.player1} />
				</div>
				<p>Сейчас ходит этот игрок:{dataForTheGame.turn}</p>
				<div id="board-of-the-game">
					<Board playerNick={dataForTheGame.player2} />
				</div>
			</div>
		);
	}

	return battle;
}
