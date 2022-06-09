import React, { createContext, useState } from 'react';
import { Row } from './Row';

const size = 10;

export function Board() {
	function createMatrix() {
		let matrix = [];
		for (let i = 0; i < size; i++) {
			matrix[i] = getMatrixRowWithEmptyElement();
		}
		return matrix;
	}

	function getMatrixRowWithEmptyElement() {
		let row = [];
		for (let j = 0; j < size; j++) {
			row[j] = undefined;
		}
		return row;
	}

	const matrix = createMatrix();
	const field = [];

	for (let i = 0; i < matrix.length; i++) {
		const colums = matrix[i];
		let rowIndex = i;
		const row = <Row rowIndex={rowIndex} colums={colums} />;
		field[i] = row;
	}

	return <div id="board">{field}</div>;
}
