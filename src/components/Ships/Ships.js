import { useSelector } from 'react-redux'
import './Ships.css'

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
      {Object.entries(shipTypes).map(([shipType, { count, size }]) => (
        <div className="ship-container" key={shipType}>
          <img src={shipTypesAssetName[shipType]} />
        </div>
      ))}
    </div>
  )
}
