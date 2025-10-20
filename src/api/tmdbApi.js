const API_KEY=import.meta.env.VITE_TMDB_KEY;
const BASE_URL=import.meta.env.VITE_TMDB_BASE_URL;

const ANIMATION_GENRE_ID = 16;

export async function fetchAnimationMovies() {
    const url=`${BASE_URL}/discover/movie?with_genres=${ANIMATION_GENRE_ID}&api_key=${API_KEY}`;
try{
    const response=await fetch(url);
    if(!response.ok){
        throw new Error('failer to fetch animation movies');
    }
    const data =await response.json();
    return data.results
}catch(error){
    console.error('Error fetching animation movies:',error);
    return[];
}
}