
interface GameInfoDetails {
    player1: string
    player2: string
	arrayOfMissedShotPlayer1: string[]
	arrayOfMissedShotPlayer2: string[]
	arrayOfShotShipsPlayer1: string[]
	arrayOfShotShipsPlayer2: string[]
	turn: string
	winner: string
    };

function getGameInformationForUsers() {

	let gameInfo:GameInfoDetails = {
		player1: gameData.playersData[0].username,
		player2: gameData.playersData[1].username,
		arrayOfMissedShotPlayer1: gameData.playersData[0].arrayOfMissedShot,
		arrayOfMissedShotPlayer2: gameData.playersData[1].arrayOfMissedShot,
		arrayOfShotShipsPlayer1: gameData.playersData[0].arrayOfShotShips,
		arrayOfShotShipsPlayer2: gameData.playersData[1].arrayOfShotShips,
		turn: gameData.turn,
		winner: gameData.winner
	}

	return gameInfo
	
}
module.exports = getGameInformationForUsers;
