import { getGameInformationForUsers } from '../storage/dataForUsers';
import { gameData } from '../storage/gameData';
import { stagesOfTheGame } from '../storage/stateMachine';
import { DataObjectDetails } from '../storage/userData';

export function reportTheStatusOfTheGameStage(data: string[] | string, userId: string) {
	if (userId === undefined) {
		console.log('ты не можешь зайти');
	} else {
		const dataOfThePlayer: DataObjectDetails | undefined = gameData.playersData.find((x) => x.userId === userId);
		if (typeof dataOfThePlayer !== 'undefined') {
			const dataOfTheEnemy: DataObjectDetails | undefined = gameData.playersData.find((x) => x.userId !== userId);

			if (stagesOfTheGame.state === 'registration' && typeof data === 'string') {
				gameData.counter += 1;
				dataOfThePlayer.username = data;

				if (gameData.counter === 2) {
					console.log('уж точно все зашли');
					const playersRegistrationStatus = stagesOfTheGame.login();
					return playersRegistrationStatus;
				}
			} else if (stagesOfTheGame.state === 'putShips' && typeof data !== 'string') {
				gameData.counter += 1;
				dataOfThePlayer.ships = data;

				if (gameData.counter === 2) {
					const gameDataForUsers = stagesOfTheGame.getInfo();
					return gameDataForUsers;
				}
			} else if (typeof data === 'string' && typeof dataOfTheEnemy !== 'undefined') {
				const updatedGameDataForUsers = checkIfYouHitShipOrNot(dataOfTheEnemy, dataOfThePlayer, data);
				return updatedGameDataForUsers;
			}
		}
	}
}

function checkIfYouHitShipOrNot(dataOfTheEnemy: DataObjectDetails, dataOfThePlayer: DataObjectDetails, data: string) {
	let updatedGameDataForUsers;
	const cell = data;
	const hitInShip = dataOfTheEnemy.ships.some((x) => x === cell);
	if (hitInShip === true) {
		updatedGameDataForUsers = checkIfYouWinOrNot(dataOfThePlayer, cell);
		return updatedGameDataForUsers;
	} else {
		if (stagesOfTheGame.state === 'player1') {
			updatedGameDataForUsers = stagesOfTheGame.player2Turn(dataOfThePlayer, cell);
		} else {
			updatedGameDataForUsers = stagesOfTheGame.player1Turn(dataOfThePlayer, cell);
		}

		return updatedGameDataForUsers;
	}
}

function checkIfYouWinOrNot(dataOfThePlayer: DataObjectDetails, cell: string) {
	let statusWhetherUserWonOrNot;
	dataOfThePlayer.arrayOfShotShips.push(cell);
	if (dataOfThePlayer.arrayOfShotShips.length === 20) {
		gameData.winner = dataOfThePlayer.username;
		stagesOfTheGame.findShips();
		statusWhetherUserWonOrNot = getGameInformationForUsers();
	} else {
		statusWhetherUserWonOrNot = getGameInformationForUsers();
	}

	return statusWhetherUserWonOrNot;
}
