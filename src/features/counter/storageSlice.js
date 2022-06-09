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
		choosenShipType: [],
		stateAreYouChooseTheShip: false,
		countShips: count,
		arrayOfCellsDisplaedOnMap: [],
		username: null
	},

	reducers: {
		updateShipPosition: (state, action) => {
			state.shipPosition = action.payload;
		},

		updateChoosenShipType: (state, action) => {
			state.choosenShipType = action.payload;
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

		updateUsername: (state, action) => {
			state.username = action.payload;
		}
	}
});

export const {
	updateShipPosition,
	updateChoosenShipType,
	updateStateAreYouChooseTheShip,
	updateCountShips,
	updateArrayOfCellsDisplaedOnMap,
	updateUsername
} = counterSlice.actions;

export const incrementAsync = (action, fn) => (dispatch) => {
	setTimeout(() => {
		dispatch(fn(action));
	}, 1000);
};

export const selectState = (state) => state.storage;

export default counterSlice.reducer;
