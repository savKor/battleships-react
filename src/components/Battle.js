import React, { useState } from 'react';
import { ws } from '../App';
import { Board } from './Battle-board';

export function BattlePage() {
	const [ dataForTheGame, setDataForTheGame ] = useState(false);

	let battle;

	ws.onmessage = function({ data }) {
		debugger;
		setDataForTheGame(data);
	};

	if (dataForTheGame === false) {
		battle = <div>жди</div>;
	} else {
		battle = (
			<div id="main">
				<div id="board-of-the-game">
					<Board />
				</div>
				<p>Сейчас ходит этот игрок</p>
				<div id="board-of-the-game">
					<Board />
				</div>
			</div>
		);
	}

	return (
		<div id="main">
			<div id="board-of-the-game">
				<Board />
			</div>
			<p>Сейчас ходит этот игрок</p>
			<div id="board-of-the-game">
				<Board />
			</div>
		</div>
	);
}
