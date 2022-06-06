import React, { useContext, useState } from 'react';
import { ContextCounter, ContextForbiddenCells, ContextShipOnMap, ContextDisplaedShipOnMap } from '../..';
import { getRowAndColumn } from '../../../../storage/incex';
import { ContextChoosenShip, ContextShipPosition, ContextShipState } from '../../../Main';

export function Cells({ rowIndex, colums }) {
	const { stateAreYouChooseTheShip, setStateAreYouChooseTheShip } = useContext(ContextShipState);
	const { shipPosition } = useContext(ContextShipPosition);
	const { choosenShipType } = useContext(ContextChoosenShip);
	const { arrayOfForbiddenCells, setArrayOfForbiddenCells } = useContext(ContextForbiddenCells);
	const { countShips, setCountShips } = useContext(ContextCounter);
	const { shipsOnMap, setShipsOnMap } = useContext(ContextShipOnMap);
	const { arrayOfShownShipOnMap, setArrayOfShownShipOnMap } = useContext(ContextDisplaedShipOnMap);
	const [ classForCell, setClassForCell ] = useState('cell');

	let cells = [];

	function addCoordinatesWhereYouCantAddShipNow(cellId) {
		const rowAndColumn = getRowAndColumn(cellId);
		const row = rowAndColumn[1];
		const column = rowAndColumn[0];
		for (let i = row - 1; i <= row + 1; i++) {
			let rowIndex = i;
			if (0 <= rowIndex && rowIndex < 10) {
				for (let j = column - 1; j <= column + 1; j++) {
					let columnIndex = j;
					if (0 <= columnIndex && columnIndex < 10) {
						let idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + rowIndex;
						if (!arrayOfForbiddenCells.find((id) => idOfCellWhereYouCanNoLongerAddShip === id)) {
							const newArray = arrayOfForbiddenCells;
							newArray.push(idOfCellWhereYouCanNoLongerAddShip);
							setArrayOfForbiddenCells(newArray);
						}
					}
				}
			}
		}
	}

	function getIdsOfShip(row, column, setShipOrNot) {
		let shipIds = [];
		for (let i = 0; i < choosenShipType[0]; i++) {
			let shipElement = getIdOfCell(i, row, column, setShipOrNot);
			if (shipElement !== false) {
				shipIds.push(shipElement);
			}
		}

		return shipIds;
	}

	function getIdOfCell(cycleNumber, row, column, setShipOrNot) {
		const value = {
			column,
			row
		};

		const key = shipPosition === 'horizontal' ? 'column' : 'row';

		if (cycleNumber === 0) {
			value[key] = value[key];
		} else if (cycleNumber % 2 === 0) {
			value[key] = value[key] + 1;
		} else if (cycleNumber >= 3) {
			value[key] = value[key] + 2;
		} else {
			value[key] = value[key] - 1;
		}

		const cellId = value['row'] + '_' + value['column'];
		const shipId = checkIfYouCanAddShipOnThisCell(cellId, value[key], setShipOrNot);

		return shipId;
	}

	function checkIfYouCanAddShipOnThisCell(cellId, changeOnBoard, setShipOrNot) {
		let shipElement;
		let idInForbiddenArray = setShipOrNot === true ? arrayOfForbiddenCells.find((id) => cellId === id) : false;

		if (idInForbiddenArray || changeOnBoard < 0 || 10 <= changeOnBoard) {
			shipElement = false;
		} else {
			shipElement = cellId;
		}

		return shipElement;
	}
	function addCoordinates(idsOfShip) {
		const newCountOfShips = countShips;
		const key = choosenShipType[2];
		if (idsOfShip.length === choosenShipType[0] && newCountOfShips[key] !== choosenShipType[1]) {
			newCountOfShips[key] += 1;
			setArrayOfShownShipOnMap([]);
			setCountShips(newCountOfShips);
			const mappedShips = [ ...shipsOnMap ];
			for (let i = 0; i < idsOfShip.length; i++) {
				mappedShips.push(idsOfShip[i]);
				addCoordinatesWhereYouCantAddShipNow(idsOfShip[i]);
			}
			setStateAreYouChooseTheShip(false);
			setShipsOnMap(mappedShips);
		} else if (newCountOfShips[key] === choosenShipType[1]) {
			alert('Все корабли этого типа уже были добавлены. Выберите другой корабль');
		} else {
			alert('нельзя тут ставить корабль');
		}
	}

	function addShipOnMap(e) {
		const offsetX = e.nativeEvent.offsetX;
		const rowAndColumn = getRowAndColumn(e.target.id);
		if (stateAreYouChooseTheShip === true) {
			e.target.onmouseover;
			const setOrNot = true;
			let idsOfShip = getIdsOfShip(rowAndColumn[0], rowAndColumn[1], setOrNot);
			addCoordinates(idsOfShip);
		} else {
			alert('Выбери корабль');
		}
	}

	function handleOnMouseOverOnBoard(e) {
		let cellId = getRowAndColumn(e.target.id);
		const setOrNot = false;
		let idsOfShip = getIdsOfShip(cellId[0], cellId[1], setOrNot);
		setArrayOfShownShipOnMap(idsOfShip);
	}

	function addListenersToShowTheShip(e) {
		if (stateAreYouChooseTheShip === true) {
			handleOnMouseOverOnBoard(e);
			e.target.onmouseout = () => {
				setArrayOfShownShipOnMap([]);
			};
		}
	}

	for (let j = 0; j < colums.length; j++) {
		let columnIndex = j;
		let cellId = rowIndex + '_' + columnIndex;
		const cellOnMap = shipsOnMap.find((id) => cellId === id);
		const cellOnMouseOver = arrayOfShownShipOnMap.find((id) => cellId === id);
		const idInForbiddenArray = arrayOfForbiddenCells.find((id) => cellId === id);

		let cellClass = classForCell;

		if (cellOnMap) {
			cellClass = 'cell-with-ships';
		} else if (cellOnMouseOver) {
			if (idInForbiddenArray || arrayOfShownShipOnMap.length !== choosenShipType[0]) {
				cellClass = 'cell-with-ships';
			} else {
				cellClass = 'cell-toggle-ship';
			}
		}

		const cell = (
			<div id={cellId} className={cellClass} onClick={addShipOnMap} onMouseOver={addListenersToShowTheShip} />
		);
		cells[j] = cell;
	}

	return cells;
}

/**
 * 
 * 
    let currentDroppable = null;

    ball.onmousedown = function(event) {

      let shiftX = event.clientX - e.getBoundingClientRect().left;
      let shiftY = event.clientY - e.getBoundingClientRect().top;

      e.style.position = 'absolute';
      e.style.zIndex = 1000;
      document.body.append(e);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        e.style.left = pageX - shiftX + 'px';
        e.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        e.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        e.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null если мы были не над droppable до этого события
            // (например, над пустым пространством)
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
            // (например, только что покинули droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      e.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        e.onmouseup = null;
      };

    };

    function enterDroppable(e) {
      e.style.background = 'pink';
    }

    function leaveDroppable(e) {
      e.style.background = '';
    }

    e.ondragstart = function() {
      return false;
    };
 * 
 */
