import MovieCard from "../components/MovieCard";

function Home()
{
    const movies = [
        {id: 1,title:"john wick",release_date:"2-7-25"},
        {id: 2,title:"john wick2",release_date:"2-7-25"},
        {id: 3,title:"john wick3",release_date:"2-7-25"}
    ];

    return(
        <>
        <div className="home">
            <div>
                {
                    movies.map(
                        (movie) => (
                            <MovieCard movie={movie} key={movie.id}></MovieCard>
                        )
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Home