import { createStore, combineReducers } from 'redux'

const initState = {
  layout: {},
  shipTypes: {},
  fires: {},
}

export const boardReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FIRE': {
      return {
        ...state,
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
