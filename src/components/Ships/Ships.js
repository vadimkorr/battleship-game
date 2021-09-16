import { useSelector } from 'react-redux'
import './Ships.css'
import { SunkShipsCounter } from '../SunkShipsCounter/SunkShipsCounter'

import destroyer from '../../assets/Carrier Shape.png'
import battleship from '../../assets/Battleship Shape.png'
import cruiser from '../../assets/Cruiser Shape.png'
import submarine from '../../assets/Submarine Shape.png'
import carrier from '../../assets/Aircraft Shape.png'

const shipTypesAssetName = {
  carrier,
  battleship,
  cruiser,
  submarine,
  destroyer,
}

export function Ships() {
  const shipTypes = useSelector((state) => state.board.shipTypes)
  return (
    <div className="ships-container">
      {Object.entries(shipTypes).map(([shipType, { hits, count, size }]) => (
        <div className="ship-container" key={shipType}>
          <img src={shipTypesAssetName[shipType]} />

          <div className="ship-counter">
            <SunkShipsCounter
              total={count}
              count={Math.floor((hits || 0) / size)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
