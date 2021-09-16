import { createStore, combineReducers } from 'redux'

const initState = {
  layout: {},
  shipTypes: {},
  fires: {},
}

export const boardReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FIRE': {
      const { col, row, shipType, tileState } = action.payload
      return {
        ...state,
        fires: {
          ...state.fires,
          [`${col}_${row}`]: {
            shipType,
            tileState,
          },
        },
      }
    }
    case 'SAVE_LAYOUT': {
      const { layout, shipTypes } = action.payload
      return {
        ...state,
        layout,
        shipTypes,
      }
    }
    default:
      return state
  }
}

export const store = createStore(
  combineReducers({
    board: boardReducer,
  })
)

export function fire({ col, row }) {
  const tileLayoutData = store.getState().board.layout[`${col}_${row}`]

  return {
    type: 'FIRE',
    payload: {
      col,
      row,
      shipType: tileLayoutData?.shipType || null,
      tileState: tileLayoutData ? 'HIT' : 'MISS',
    },
  }
}
