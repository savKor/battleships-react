import { gameData } from "../storage/gameData";
import { getUserData } from "../storage/userData";

export function getUniqueID() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4();
}

export function userConnection(userId: string) {
	if (gameData.playersData.length < 2) {
		console.log(`New client connected with id: ${userId}`);
		const newUser = getUserData(userId);
		gameData.playersData.push(newUser);
	} else {
		console.log('Страница уже занята двумя игроками');
	}
}

