import { Board } from './Main-board/';
import React, { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectState,
	updateChoosenShipType,
	updateShipPosition,
	updateStateAreYouChooseTheShip
} from '../features/counter/storageSlice';

export const ContextShipOnMap = createContext({
	shipsOnMap: null,
	setShipsOnMap: () => {}
});

export function MainPage() {
	const [ shipsOnMap, setShipsOnMap ] = useState([]);
	const store = useSelector(selectState);
	const dispatch = useDispatch();
	const shipPosition = store.shipPosition;

	const shipArray = { shipsOnMap, setShipsOnMap };

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

	return (
		<div id="main">
			<button id="changePosition" onClick={changePosition}>
				переверни фигуру
			</button>
			<div id="list-of-ship">
				<p>Список кораблей</p>
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
			<ContextShipOnMap.Provider value={shipArray}>
				<Board />
			</ContextShipOnMap.Provider>

			<button>Начать игру</button>
		</div>
	);
}
