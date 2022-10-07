import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { Pokedex } from './components/Pokedex'
import { PokemonDetail } from './components/PokemonDetail'
import { ProtectedRoutes } from './components/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<ProtectedRoutes />} > 
            <Route path='/pokedex' element={<Pokedex />} /> 
            <Route path='/pokedex/:id' element={<PokemonDetail />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
