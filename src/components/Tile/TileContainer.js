import { Tile } from './Tile'
import { useDispatch, useSelector } from 'react-redux'
import { fire } from '../../store/store'

export function TileContainer({ col, row }) {
  const dispatch = useDispatch()
  const tileState = useSelector(
    (state) => state.board.fires[`${col}_${row}`]?.tileState || 'EMPTY'
  )

  function handleClick() {
    dispatch(
      fire({
        col,
        row,
      })
    )
  }
  return <Tile tileState={tileState} onClick={handleClick}></Tile>
}
