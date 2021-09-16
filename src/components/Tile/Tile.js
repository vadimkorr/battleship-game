import './Tile.css'

const tileStateClass = {
  HIT: 'tile-state-hit',
  MISS: 'tile-state-miss',
  EMPTY: 'tile-state-empty',
}

export function Tile({ tileState, onClick }) {
  function handleClick() {
    if (tileState !== 'EMPTY') {
      return
    }
    onClick()
  }

  return (
    <div
      className={`tile-container ${tileStateClass[tileState]}`}
      onClick={handleClick}
    ></div>
  )
}
