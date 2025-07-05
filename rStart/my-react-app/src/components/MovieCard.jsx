
function MovieCard({movie})
{

    function on_favouriteButtonClick() {
        alert("Clicked");
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-overlay">
            <button className="favourite-button" onClick={on_favouriteButtonClick}>🤍</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>

}
export default MovieCard;