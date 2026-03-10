const API_KEY = "8f01b3fc069905b3f0215889b15c798d";
const BASE_URL = "'https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();

    return data.results;
};