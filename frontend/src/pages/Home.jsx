import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"
import { useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    // states for the search bar and filtering fucntionality 
    const [searchQuery, setSearchQuery] = useState("");
    
    // dummy data for testing filter function
    const movies = getPopularMovies()

    // function for dealing with the form submission
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    }
    
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Which Movie is it?" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">🔍</button>
            </form>
            
            <div className="movies-grid">
                {/* looping array of objects in test data */}
                {movies.map(movie => (
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))}
            </div>
        </div>
    );
}

export default Home;