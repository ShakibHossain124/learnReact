import './App.css'
import MovieCard from './components/MovieCard';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';

function App() {
  return(
    <main className='main-content'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<>Welcome To Movies</>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
      </Routes>

    </main>
  )
}


export default App
