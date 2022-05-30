import { Board } from './Board';
import React, { createContext, useState } from 'react';

export const ContextChoosenShip = createContext({
	chooseShip: null,
	setChoseShip: () => {}
});

export const ContextShipState = createContext({
	shipState: null,
	setShipState: () => {}
});

export function MainPage() {
	const [ shipSize, setShipSize ] = useState(null);
	const [ shipState, setShipState ] = useState(false);

	const amountOfShip = {
		oneCellShip: [ 1, 4 ],
		twoCellShip: [ 2, 3 ],
		threeCellShip: [ 3, 2 ],
		fourCellShip: [ 4, 1 ]
	};
	const value = { shipState, setShipState };

	function chooseShipFromList(e) {
		setShipState(true);
		console.log(e.target.id);
		if (e.target.id === 'four') {
		} else if (e.target.id === 'three') {
		} else if (e.target.id === 'two') {
		} else {
		}
	}

	return (
		<div className="spinner-border" role="status" id="main">
			<ContextChoosenShip.Provider value={value}>
				<div id="player-1">
					<div>Список кораблей</div>
					<button id="one" onClick={chooseShipFromList}>
						одна клетка
					</button>
					<button id="two" onClick={chooseShipFromList}>
						две клетки
					</button>
					<button id="three" onClick={chooseShipFromList}>
						три клетки
					</button>
					<button id="four" onClick={chooseShipFromList}>
						четыре клетки
					</button>
					<Board />
				</div>
				<div>Начать игру</div>
			</ContextChoosenShip.Provider>
		</div>
	);
}
