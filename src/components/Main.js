import { Board } from './Board';
import React, { createContext, useState } from 'react';

export const ContextShipPosition = createContext({
	shipPosition: null,
	setShipPosition: () => {}
});

export const ContextChoosenShip = createContext({
	choosenShipType: null,
	setChoosenShipType: () => {}
});

export const ContextShipState = createContext({
	stateAreYouChooseTheShip: null,
	setStateAreYouChooseTheShip: () => {}
});

export function MainPage() {
	const [ choosenShipType, setChoosenShipType ] = useState([]);
	const [ stateAreYouChooseTheShip, setStateAreYouChooseTheShip ] = useState(false);
	const [ shipPosition, setShipPosition ] = useState('horizontal');

	const shipType = {
		oneCellShip: [ 1, 4, 'oneCellShip' ],
		twoCellShip: [ 2, 3, 'twoCellShip' ],
		threeCellShip: [ 3, 2, 'threeCellShip' ],
		fourCellShip: [ 4, 1, 'fourCellShip' ]
	};

	const stateCheck = { stateAreYouChooseTheShip, setStateAreYouChooseTheShip };
	const position = { shipPosition, setShipPosition };
	const choosenShip = { choosenShipType, setChoosenShipType };

	async function chooseShipFromList(e) {
		setStateAreYouChooseTheShip(true);
		const key = e.target.id;
		setChoosenShipType(shipType[key]);
		console.log(choosenShipType);
	}

	async function changePosition() {
		if (shipPosition === 'horizontal') {
			setShipPosition('vertical');
		} else {
			setShipPosition('horizontal');
		}
	}

	return (
		<div id="main">
			<div id="list-of-ship">
				<div id="oneCellShip">
					<div className="ship-type" />
				</div>
				<div id="twoCellShip">
					<div className="ship-type" />
					<div className="ship-type" />
				</div>
				<div id="threeCellShip">
					<div className="ship-type" />
					<div className="ship-type" />
					<div className="ship-type" />
				</div>
				<div id="fourCellShip">
					<div className="ship-type" />
					<div className="ship-type" />
					<div className="ship-type" />
					<div className="ship-type" />
				</div>
			</div>
			<ContextShipState.Provider value={stateCheck}>
				<ContextChoosenShip.Provider value={choosenShip}>
					<ContextShipPosition.Provider value={position}>
						<button id="changePosition" onClick={changePosition}>
							переверни фигуру
						</button>
						<div>Список кораблей</div>
						<button id="oneCellShip" onClick={chooseShipFromList}>
							одна клетка
						</button>
						<button id="twoCellShip" onClick={chooseShipFromList}>
							две клетки
						</button>
						<button id="threeCellShip" onClick={chooseShipFromList}>
							три клетки
						</button>
						<button id="fourCellShip" onClick={chooseShipFromList}>
							четыре клетки
						</button>
						<Board />
						<div>Начать игру</div>
					</ContextShipPosition.Provider>
				</ContextChoosenShip.Provider>
			</ContextShipState.Provider>
		</div>
	);
}
