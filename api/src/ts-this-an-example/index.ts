
interface DataObjectDetails {
    userId: string;
    username: string;
    ships: string[];
    arrayOfShotShips: string[];
    arrayOfMissedShot: string[];
    };



function returnObject(id:string) {
	let object:DataObjectDetails = {
		userId: id,
		username: "null",
		ships: [],
		arrayOfShotShips: [],
		arrayOfMissedShot: []
	}

	return object
}
