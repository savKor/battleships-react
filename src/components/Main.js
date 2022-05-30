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
	const [ chooseShip, setChoseShip ] = useState(false);
	const [ shipState, setShipState ] = useState(false);

	const amountOfShip = {
		oneCellShip: [ 1, 4 ],
		twoCellShip: [ 2, 3 ],
		threeCellShip: [ 3, 2 ],
		fourCellShip: [ 4, 1 ]
	};
	const value = { chooseShip, setChoseShip };

	function chooseShipFromList(e) {
		setChoseShip(true);
		console.log(e.target.id);
	}

	return (
		<div className="spinner-border" role="status" id="main">
			<ContextChoosenShip.Provider value={value}>
				<div id="player-1">
					<div>Список кораблей</div>
					<button id="one" onClick={chooseShipFromList}>
						одна клетка
					</button>
					<Board />
				</div>
				<div>Начать игру</div>
			</ContextChoosenShip.Provider>
		</div>
	);
}
