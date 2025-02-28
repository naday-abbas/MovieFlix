import './App.css'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {

  return (
    <MovieProvider>
      <div className='w-screen'>
        <NavBar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  )
}

export default App
