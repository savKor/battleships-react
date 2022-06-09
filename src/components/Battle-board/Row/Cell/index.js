import React, { useState } from 'react';

export function Cells({ rowIndex, colums }) {
	const [ classForCell ] = useState('cell');

	let cells = [];

	for (let j = 0; j < colums.length; j++) {
		let columnIndex = j;
		let cellId = rowIndex + '_' + columnIndex;

		let cellClass = classForCell;

		const cell = <div id={cellId} className={cellClass} />;
		cells[j] = cell;
	}

	return cells;
}
