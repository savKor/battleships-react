
interface GameDataDetails {
    turn: string;
    winner: string;
    counter: number
    playersData: DataObjectDetails[];
    };




const gameData:GameDataDetails = {
	turn: "null",
	winner: "null",
	counter: 0,
	playersData: []
};

module.exports = gameData;
