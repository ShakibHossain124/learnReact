import "./App.css"
import MovieCard from "./components/MovieCard"

function App() {

  return (
    <>
      < MovieCard movie={{Title:"title", release_date:"6-30-2025"}}/>
      <MovieCard movie={{Title:"title2", release_date: "7-30-2025"}}/>
    </>
  )
}

export default App;