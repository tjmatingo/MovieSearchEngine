import "../css/Favourites.css"
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourite() {
    const {favourites} = useMovieContext();

    if (favourites) {
        return (
        <div className="favorites">
            <h2>Your Favourite Films</h2>

            <div className="movies-grid">
                {favourites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div> 
        </div>)
    };
    
    return (
        <div className="favorites-empty">
            <h2>No Favourite movies yet😏</h2>
            <p>Start adding some films to your Favourites List</p>
        </div>
    );
};

export default Favourite;