import { DataObjectDetails } from "./userData";

export interface GameDataDetails {
    turn: string;
    winner: string;
    counter: number
    playersData: DataObjectDetails[];
    };




export const gameData:GameDataDetails = {
	turn: "null",
	winner: "null",
	counter: 0,
	playersData: []
};

