import { useState } from 'react'
import './App.css'
import Device from './components/Device/Device'
import Dial from './components/Dial/Dial'
import Watch from './components/Watch/Watch'

function App() {

  return (
    <div className="App">
      <Device name="uphone" price='13000'></Device>
      <Device name="Samsing" price='11000'></Device>
      <Watch></Watch>
    </div>
  )
}

export default App
