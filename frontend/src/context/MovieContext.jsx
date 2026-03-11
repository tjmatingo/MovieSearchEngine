import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext  = () => useContext(MovieContext)

// provide state to children components 
export const MovieProvider = () => {}