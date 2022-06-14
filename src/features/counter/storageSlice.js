import { createSlice } from '@reduxjs/toolkit';

const count = {
	oneCellShip: 0,
	twoCellShip: 0,
	threeCellShip: 0,
	fourCellShip: 0
};

export const counterSlice = createSlice({
	name: 'storage',
	initialState: {
		shipPosition: 'horizontal',
		chosenShipType: [],
		stateAreYouChooseTheShip: false,
		countShips: count,
		arrayOfCellsDisplaedOnMap: [],
		arrayOfForbiddenCells: [],
		shipsOnMap: [],
		username: null,
		dataForTheGame: null,
		checkedCells: []
	},

	reducers: {
		updateShipPosition: (state, action) => {
			state.shipPosition = action.payload;
		},

		updateChosenShipType: (state, action) => {
			state.chosenShipType = action.payload;
		},

		updateStateAreYouChooseTheShip: (state, action) => {
			state.stateAreYouChooseTheShip = action.payload;
		},

		updateCountShips: (state, action) => {
			const countShips = state.countShips;
			const key = action.payload;
			countShips[key] += 1;
			state.countShips = countShips;
		},

		updateArrayOfCellsDisplaedOnMap: (state, action) => {
			state.arrayOfCellsDisplaedOnMap = action.payload;
		},

		updateArrayOfForbiddenCells: (state, action) => {
			const arrayOfForbiddenCells = state.arrayOfForbiddenCells;
			arrayOfForbiddenCells.push(action.payload);
			state.arrayOfForbiddenCells = arrayOfForbiddenCells;
		},

		updateShipsOnMap: (state, action) => {
			const shipsOnMap = state.shipsOnMap;
			shipsOnMap.push(action.payload);
			state.shipsOnMap = shipsOnMap;
		},

		updateUsername: (state, action) => {
			state.username = action.payload;
		},

		updateDataForTheGame: (state, action) => {
			state.dataForTheGame = action.payload;
		},

		updateCheckedCells: (state, action) => {
			const checkedCells = state.checkedCells;
			checkedCells.push(action.payload);
			state.checkedCells = checkedCells;
		}
	}
});

export const {
	updateShipPosition,
	updateChosenShipType,
	updateStateAreYouChooseTheShip,
	updateCountShips,
	updateArrayOfCellsDisplaedOnMap,
	updateArrayOfForbiddenCells,
	updateShipsOnMap,
	updateUsername,
	updateDataForTheGame,
	updateCheckedCells
} = counterSlice.actions;

export const incrementAsync = (action, fn) => (dispatch) => {
	setTimeout(() => {
		dispatch(fn(action));
	}, 1000);
};

export const selectState = (state) => state.storage;

export default counterSlice.reducer;
