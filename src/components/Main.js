import { Board } from './Main-board/';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectState,
	updateChosenShipType,
	updateShipPosition,
	updateStateAreYouChooseTheShip
} from '../features/counter/storageSlice';
import { useNavigate } from 'react-router-dom';
import { ws } from '../App';

const shipType = {
	oneCellShip: [ 1, 4, 'oneCellShip' ],
	twoCellShip: [ 2, 3, 'twoCellShip' ],
	threeCellShip: [ 3, 2, 'threeCellShip' ],
	fourCellShip: [ 4, 1, 'fourCellShip' ]
};

export function MainPage() {
	const [ usersLogin, setUsersLogin ] = useState(null);
	let navigate = useNavigate();
	const store = useSelector(selectState);
	const dispatch = useDispatch();
	const shipPosition = store.shipPosition;
	const chosenShipType = store.chosenShipType;
	const countShips = store.countShips;
	const shipsOnMap = store.shipsOnMap;
	let main;

	async function chooseShipFromList(e) {
		dispatch(updateStateAreYouChooseTheShip(true));
		const key = e.target.id;
		dispatch(updateChosenShipType(shipType[key]));
	}

	async function changePosition() {
		if (shipPosition === 'horizontal') {
			dispatch(updateShipPosition('vertical'));
		} else {
			dispatch(updateShipPosition('horizontal'));
		}
	}

	function addIdsOsShips() {
		if (shipsOnMap.length === 20) {
			ws.send(JSON.stringify(shipsOnMap));
			let path = `/public/main/battle/`;
			navigate(path);
		} else {
			console.log('Второй игрок ещё не зашёл');
		}
	}

	ws.onmessage = function({ data }) {
		setUsersLogin(data);
	};

	if (usersLogin === null) {
		main = <div className="loader" />;
	} else {
		main = (
			<div id="main">
				<div>
					<div id="info-position">
						<p>
							Корабль сейчас в {shipPosition} положении. Выбранный тип корабля: {chosenShipType[2]}
						</p>
					</div>
					<div id="board-of-the-game">
						<div id="list-of-ships">
							<p>Список кораблей</p>
							<button id="change-position" onClick={changePosition}>
								перевернуть корабль
							</button>
							<button id="oneCellShip" class="type-of-ship" onClick={chooseShipFromList}>
								Одноклеточные корабли {countShips.oneCellShip}
							</button>
							<button id="twoCellShip" class="type-of-ship" onClick={chooseShipFromList}>
								Двухклеточные корабли {countShips.twoCellShip}
							</button>
							<button id="threeCellShip" class="type-of-ship" onClick={chooseShipFromList}>
								Трёхклеточные корабли {countShips.threeCellShip}
							</button>
							<button id="fourCellShip" class="type-of-ship" onClick={chooseShipFromList}>
								Четырёхклеточные корабли {countShips.fourCellShip}
							</button>
						</div>
						<Board />
						<button id="start-the-game" onClick={addIdsOsShips}>
							Начать игру
						</button>
					</div>
				</div>
			</div>
		);
	}
	return main;
}
