import { Board } from './Board'
import React from 'react'

export function MainPage() {
  return (
    <div className="spinner-border" role="status" id="main">
      <div id="player-1">
        <div>Список кораблей</div>
        <Board></Board>
      </div>
      <div>Начать игру</div>
      <div id="player-2">
        <Board></Board>
        <div>Список кораблей</div>
      </div>
    </div>
  )
}
