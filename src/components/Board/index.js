import React from 'react'

export function Board() {
  function createMatrix() {
    let matrix = []
    const n = 10,
      m = 10
    for (let i = 0; i < n; i++) {
      matrix[i] = getMatrixRowWithEmptyElement(m)
    }
    return matrix
  }

  function getMatrixRowWithEmptyElement(size) {
    let row = []
    for (let j = 0; j < size; j++) {
      row[j] = undefined
    }
    return row
  }

  const matrix = createMatrix()

  const field = []
  for (let i = 0; i < matrix.length; i++) {
    const choosenRow = matrix[i]
    let rowIndex = i
    const cells = []
    for (let j = 0; j < choosenRow.length; j++) {
      let columnIndex = j

      let cellId = rowIndex + '_' + columnIndex
      const cell = <div id={cellId} className="cell"></div>
      cells[j] = cell
    }

    const row = (
      <div id={rowIndex} className="row">
        {cells}
      </div>
    )

    field[i] = row
  }

  return <div id="board">{field}</div>
}
