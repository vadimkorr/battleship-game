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
      return {
        ...state,
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
