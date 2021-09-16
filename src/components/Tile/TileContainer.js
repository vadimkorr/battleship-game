import { Tile } from './Tile'

export function TileContainer({ col, row }) {
  function handleClick() {}
  return <Tile tileState={'EMPTY'} onClick={handleClick}></Tile>
}
