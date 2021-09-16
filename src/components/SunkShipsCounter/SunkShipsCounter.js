import './SunkShipsCounter.css'

import hit from '../../assets/Hit small.png'
import miss from '../../assets/Miss small.png'

export function SunkShipsCounter({ count, total }) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <img className="sunk-ship-circle" key={index} src={hit} />
      ))}
      {Array.from({ length: total - count }, (_, index) => (
        <img className="sunk-ship-circle" key={index + count} src={miss} />
      ))}
    </>
  )
}
