import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home()
{

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1,title:"john wick",release_date:"2-7-25"},
        {id: 2,title:"john wick2",release_date:"2-7-25"},
        {id: 3,title:"john wick3",release_date:"2-7-25"}
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        //setSearchQuery("previous input")
    }

    return(
        <>
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input
                type="text"
                placeholder = "search for movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">enter</button>
            </form>

            <div className="movies-grid">
                {
                    movies.map(
                        (movie) => (
                            movie.title.toLowerCase().startsWith(searchQuery) &&
                            (<MovieCard movie={movie} key={movie.id}></MovieCard>)
                        )
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Home