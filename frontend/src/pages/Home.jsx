import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css"

import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    // states for the search bar and filtering fucntionality 
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("failed to load....");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);
    
    // function for dealing with the form submission
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    };
    
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