import React from 'react'
import AdvancedCalculator from './components/AdvancedCalculator'
import NotesApp from './components/NotesApp'
import UnitConverter from './components/UnitConverter'
import CurrencyConverter from './components/CurrencyConverter'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import HomePage from './components/HomePage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/notes' element={<NotesApp/>}/>
        <Route path='/unit' element={<UnitConverter/>}/>
        <Route path='/currency' element={<CurrencyConverter/>}/>
        <Route path='/calculator' element={<AdvancedCalculator/>}/>

      </Routes>
    </div>
  )
}

export default App