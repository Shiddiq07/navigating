import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard'; // Assuming PostCard is in '../components'
import { fetchAnimationMovies } from '../api/tmdbApi'; // Import the list fetcher
import SearchBar from '../components/SearchBar';
const MovieListPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm]=useState('')
    useEffect(() => {
        async function loadMovies() {
            setIsLoading(true);
            setError(null);
            
            try {
                const data = await fetchAnimationMovies();
                setMovies(data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Could not load movies. Please check API key and network.");
            }
            setIsLoading(false);
        }
        
        loadMovies();
        
    }, []);

  const filteredMovies= movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
const handleSearchChange=(term)=>{
    setSearchTerm(term);
}
    if (isLoading) {
        return <div className="text-center text-white mt-5">Loading awesome animated movies...</div>;
    }
    
    if (error) {
        return <div className="text-danger text-center mt-5">{error}</div>;
    }

    if (movies.length === 0) {
        return <div className="text-white text-center mt-5">No movies found.</div>;
    }

    return (
        <div className="container-fluid p-4 bg-gray-900 min-h-screen">
            <SearchBar 
            onSearchChange={handleSearchChange}
            searchTerm={searchTerm}
/>
            <h1 className="text-white mb-4 border-bottom pb-2">Top Animation Movies</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {filteredMovies.map(movie => (
                    // Renders the PostCard, which is now a clickable Link
                    <div className="col d-flex" key={movie.id}>
                        <PostCard post={movie} /> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieListPage;
