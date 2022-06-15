import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ws } from '../App';
import { selectState, updateDataForTheGame } from '../features/counter/storageSlice';
import { Board } from './Battle-board';

export function BattlePage() {
	const [ winner, setWinner ] = useState(null);
	const store = useSelector(selectState);
	const dispatch = useDispatch();
	const dataForTheGame = store.dataForTheGame;
	const username = store.username;

	let battle;

	ws.onmessage = function({ data }) {
		const object = JSON.parse(data);
		console.log(object);
		dispatch(updateDataForTheGame(object));
		setWinner(object.winner);
	};

	if (dataForTheGame === null) {
		battle = <div className="loader" />;
	} else if (winner !== null) {
		battle = <div id="main">Победитель {winner}</div>;
	} else {
		battle = (
			<div id="main">
				<div>
					<p>Игрок на этой странице {username}</p>
					<div id="info-position">
						<p>Сейчас ходит этот игрок:{dataForTheGame.turn}</p>
					</div>
					<div id="board-of-the-game">
						<Board playerNick={dataForTheGame.player1} />
						<p>vs</p>
						<Board playerNick={dataForTheGame.player2} />
					</div>
				</div>
			</div>
		);
	}

	return battle;
}
