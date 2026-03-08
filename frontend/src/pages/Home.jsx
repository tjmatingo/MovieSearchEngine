import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    // states for the search bar and filtering fucntionality 
    const [searchQuery, setSearchQuery] = useState("");
    
    // dummy data for testing filter function
    const movies = [
        {id: 1, title: "How to Train a Dragon", release_date: "2025"},
        {id: 2, title: "Avatar: The Last Air bender", release_date: "2012"},
        {id: 3, title: "Shan-Chi", release_date: "2023"},
        {id: 4, title: "Spiderman: Beyond the Spider Verse", release_date: "2028"},

    ]

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