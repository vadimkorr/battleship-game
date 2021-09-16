import logo from './logo.svg'
import './App.css'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getLayout, getShipTypes } from './utils/layout'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'SAVE_LAYOUT',
      payload: {
        layout: getLayout(),
        shipTypes: getShipTypes(),
      },
    })
  }, [dispatch])

  return <div className="App"></div>
}

export default App
