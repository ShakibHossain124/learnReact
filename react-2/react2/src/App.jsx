import './App.css'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';

function App() {

  return (
    <>
      <div>hello</div>
      <div>hello</div>
      <Test />
      <Test  text="prop" id="1"/>
      <MovieCard movie={{title:"movie1", release_date:"12-9-2025", url:"www.youtube.com"}} />
      <Home></Home>
    </>
    
  )
}

function Test({text,id}){
  return(
    <>
    <div>{text}{id}</div>
    </>
  );
  
}

export default App
