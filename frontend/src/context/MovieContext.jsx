import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext  = () => useContext(MovieContext)

// provide state to children components 
// children property allows the function to have inner components 
export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])
    


    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}