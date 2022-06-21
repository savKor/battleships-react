export interface DataObjectDetails {
	userId: string;
	username: string;
	ships: string[];
	arrayOfShotShips: string[];
	arrayOfMissedShot: string[];
}

export function getUserData(id: string) {
	let userData: DataObjectDetails = {
		userId: id,
		username: 'null',
		ships: [],
		arrayOfShotShips: [],
		arrayOfMissedShot: []
	};

	return userData;
}
