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
				<div className="prison">
					<div id="oneCellShip_chosen">
						<div className="ship-type" id="oneCellShip_chosen" />
					</div>
				</div>
				<div className="prison">
					<div id="twoCellShip_chosen">
						<div className="ship-type" id="twoCellShip_chosen" />
						<div className="ship-type" id="twoCellShip_chosen" />
					</div>
				</div>
			</div>
			<ContextShipState.Provider value={stateCheck}>
				<ContextChoosenShip.Provider value={choosenShip}>
					<ContextShipPosition.Provider value={position}>
						<button id="changePosition" onClick={changePosition}>
							переверни фигуру
						</button>
						<div>Список кораблей</div>
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
						<Board />
						<div>Начать игру</div>
					</ContextShipPosition.Provider>
				</ContextChoosenShip.Provider>
			</ContextShipState.Provider>
		</div>
	);
}
