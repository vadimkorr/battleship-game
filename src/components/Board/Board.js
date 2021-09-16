import './Board.css'
import { TileContainer } from '../Tile/TileContainer'

export function Board() {
  return (
    <div className="board-container">
      {Array.from({ length: 10 }, (_, row) => {
        return (
          <div key={row} className="board-row">
            {Array.from({ length: 10 }, (_, col) => {
              return <TileContainer key={col} col={col} row={row} />
            })}
          </div>
        )
      })}
    </div>
  )
}
