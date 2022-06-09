import { Board } from './Main-board/';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectState,
	updateChoosenShipType,
	updateShipPosition,
	updateStateAreYouChooseTheShip
} from '../features/counter/storageSlice';
import { useNavigate } from 'react-router-dom';
import { ContextShipOnMap, ws } from '../App';

export function MainPage() {
	const [ usersLogin, setUsersLogin ] = useState(false);

	let main;
	let navigate = useNavigate();
	const { shipsOnMap } = useContext(ContextShipOnMap);
	const store = useSelector(selectState);
	const dispatch = useDispatch();
	const shipPosition = store.shipPosition;
	const choosenShipType = store.choosenShipType;
	const countShips = store.countShips;

	const shipType = {
		oneCellShip: [ 1, 4, 'oneCellShip' ],
		twoCellShip: [ 2, 3, 'twoCellShip' ],
		threeCellShip: [ 3, 2, 'threeCellShip' ],
		fourCellShip: [ 4, 1, 'fourCellShip' ]
	};

	async function chooseShipFromList(e) {
		dispatch(updateStateAreYouChooseTheShip(true));
		const key = e.target.id;
		dispatch(updateChoosenShipType(shipType[key]));
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
			ws.send(JSON.stringify(shipType));
			let path = `/public/main/battle/`;
			navigate(path);
		}
	}

	ws.onmessage = function({ data }) {
		debugger;
		setUsersLogin(data);
	};

	if (usersLogin === false) {
		main = <div>жди</div>;
	} else {
		main = (
			<div id="main">
				<div id="ship-counter">
					<p>Одноклеточные корабли {countShips.oneCellShip}</p>
					<p>Двухклеточные корабли {countShips.twoCellShip}</p>
					<p>Трёхклеточные корабли {countShips.threeCellShip}</p>
					<p>Четырёхклеточные корабли {countShips.fourCellShip}</p>
				</div>
				<div>
					<div id="info-position">
						<p>
							Корабль сейчас в {shipPosition} положении. Выбранный тип корабля: {choosenShipType[2]}
						</p>
					</div>
					<div id="board-of-the-game">
						<div id="list-of-ships">
							<p>Список кораблей</p>
							<button id="change-position" onClick={changePosition}>
								перевернуть корабль
							</button>
							<button id="oneCellShip" class="type-of-ship" onClick={chooseShipFromList}>
								одна клетка
							</button>
							<button id="twoCellShip" class="type-of-ship" onClick={chooseShipFromList}>
								две клетки
							</button>
							<button id="threeCellShip" class="type-of-ship" onClick={chooseShipFromList}>
								три клетки
							</button>
							<button id="fourCellShip" class="type-of-ship" onClick={chooseShipFromList}>
								четыре клетки
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
