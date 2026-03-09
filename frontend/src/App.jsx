import './App.css'
import Favourite from './pages/Favourites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />

      <main className='main-content'>  
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='/favourites' element={<Favourite /> }/>
        </Routes>
      </main>
    </div>
  )
}


export default App
