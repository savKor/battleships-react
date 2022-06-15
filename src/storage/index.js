export function getRowAndColumn(cellId) {
	const coordinates = [];
	const splitId = cellId.split('_');
	const idNumbers = splitId.map(Number);
	const rowIndex = idNumbers[1];
	const columnIndex = idNumbers[0];
	coordinates.push(columnIndex, rowIndex);
	return coordinates;
}

export const getCellId = (colId, rowId) => `${colId}_${rowId}`;
