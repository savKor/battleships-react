

function reportTheStatusOfTheGameStage(data:string[]|string, userId:string) {
	if (userId === undefined) {
		console.log('ты не можешь зайти');
	} else {
		
		let dataOfTheEnemy:DataObjectDetails|undefined = gameData.playersData.find((x) => x.userId !== userId);
		let dataOfThePlayer:DataObjectDetails|undefined = gameData.playersData.find((x) => x.userId === userId);

		if (typeof dataOfThePlayer !== "undefined") {
			if (stagesOfTheGame.state === 'registration'&&typeof data === "string") {
				gameData.counter += 1;
				dataOfThePlayer.username = data;
		
				if (gameData.counter === 2) {
					const playersRegistrationStatus = stagesOfTheGame.login();
					return playersRegistrationStatus;
				}
			} else if (stagesOfTheGame.state === 'putShips'&&typeof data !== "string") {
				gameData.counter += 1;
				dataOfThePlayer.ships = data;
		
				if (gameData.counter === 2) {
					const gameDataForUsers = stagesOfTheGame.getInfo();
					return gameDataForUsers;
				}
			}
		} else if (
			typeof dataOfTheEnemy !== "undefined"&&
			typeof dataOfThePlayer !== "undefined"&&
			typeof data === "string"&&
			stagesOfTheGame.state !== 'putShips'&&
			stagesOfTheGame.state !== 'registration') {
			const updatedGameDataForUsers = checkIfYouHitShipOrNot(dataOfTheEnemy, dataOfThePlayer, data);
			return updatedGameDataForUsers;
		}
	}
}

function checkIfYouHitShipOrNot(dataOfTheEnemy:DataObjectDetails, dataOfThePlayer:DataObjectDetails, data:string) {
	let updatedGameDataForUsers;
	const cell = data;
	const hitInShip = dataOfTheEnemy.ships.find((x) => x === cell);

	if (hitInShip) {
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

function checkIfYouWinOrNot(dataOfThePlayer:DataObjectDetails, cell:string) {
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

module.exports = reportTheStatusOfTheGameStage;


function example(data:string[]|string, userId:string) {
	let dataOfTheEnemy:DataObjectDetails|undefined = gameData.playersData.find((x) => x.userId !== userId);
	let dataOfThePlayer:DataObjectDetails|undefined = gameData.playersData.find((x) => x.userId === userId);

	if (typeof dataOfThePlayer !== "undefined") {
		if (stagesOfTheGame.state === 'registration'&&typeof data === "string") {
			gameData.counter += 1;
			dataOfThePlayer.username = data;
	
			if (gameData.counter === 2) {
				const playersRegistrationStatus = stagesOfTheGame.login();
				return playersRegistrationStatus;
			}
		} else if (stagesOfTheGame.state === 'putShips'&&typeof data !== "string") {
			gameData.counter += 1;
			dataOfThePlayer.ships = data;
	
			if (gameData.counter === 2) {
				const gameDataForUsers = stagesOfTheGame.getInfo();
				return gameDataForUsers;
			}
		}
	} else if (typeof dataOfTheEnemy !== "undefined"&&typeof dataOfThePlayer !== "undefined"&&typeof data === "string") {
		const updatedGameDataForUsers = checkIfYouHitShipOrNot(dataOfTheEnemy, dataOfThePlayer, data);
		return updatedGameDataForUsers;
	}
}