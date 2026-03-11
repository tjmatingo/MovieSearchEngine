import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext  = () => useContext(MovieContext)

// provide state to children components 
// children property allows the function to have inner components 
export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

    // localstorage allows storage in local browser
    useEffect (() => {
        const storedFavs = localStorage.getItem("favourites");

        if (storedFavs) setFavourites(JSON.parse(storedFavs));
    }, []);


    // fetching JSON array of favourites
    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites]);

    // function to add from  array 
    const addToFavourites = (movie) => {
        // update state to array to add value to array 
        setFavourites(prev => [...prev, movie])
    };

    // function to remove from  array 
    const removeFromFavourites = (movieID) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieID));
    };

    // function to check existence
    const isFavourites = (movieID) => {
        // return true or false to a movie being in favourites
        return favourites.some(movie => movie.id === movieID)
    };

    // to make these values available to children
    const values = {
        favourites, 
        addToFavourites, 
        removeFromFavourites, 
        isFavourites
    }

    return <MovieContext.Provider value={values}>
        {children}
    </MovieContext.Provider>
}