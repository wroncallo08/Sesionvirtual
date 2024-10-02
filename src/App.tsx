import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { Routeo } from './app/utilidades/rutas/Ruteo'


function App() {


  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
        <Routeo />
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
