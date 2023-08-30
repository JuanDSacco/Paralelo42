import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './Routes/Index/Index'
import Servicios from './Routes/Servicios/Servicios'
import Construccion from './Routes/Construccion/Construccion'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/construccion' element={<Construccion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

