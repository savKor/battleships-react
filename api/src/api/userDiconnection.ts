import { gameData } from "../storage/gameData";

export function userDiconnection(userId:String) {
	console.log(`Client ${userId} has disconnected!`);
	const newData = gameData.playersData.filter((data) => data.userId != userId);
	gameData.playersData = newData;
}

