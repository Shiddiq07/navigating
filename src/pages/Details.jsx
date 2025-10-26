import React,{useState,useEffect} from 'react';
import{useParams} from 'react-router-dom';
import {fetchMovieDetails} from '../api/tmdbApi';

const MovieDetailPage =()=>{
    const {movieId}= useParams();
    const [movie,setMovie]=useState(null);
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    

    useEffect(()=>{
        const loadDetail=async()=>{
            if(!movieId) return;
            setIsLoading(true);
setError(null);
           const detail=await fetchMovieDetails(movieId)

           if(detail){
            setMovie(detail);
           }else{
            setError('failed to load movie details');
           }
           setIsLoading(false);
        };
        loadDetail();
    },[movieId]);
if(isLoading){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ heigh:'80vh' }}>
                            <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>

</div>
                <p className="ms-3 text-white">Loading movie details...</p>

        </div>
    );
}
if(error){
                return <div className="text-danger text-center mt-5">Error: {error}</div>;

}
if(!movie){
            return <div className="text-white text-center mt-5">Movie not found.</div>;

}

return(
<div className="container-fluid p-0">
         

            {/* 2. Main Content and Sidebar */}
            <div className="container-fluid mt-5" style={{ zIndex: 1, position: 'relative' }}>
                <div className="row">
                    {/* Poster and Metadata (Sidebar) */}
                    <div className="col-lg-3 col-md-4 mb-4">
                        {/* <img 
                            src={posterUrl} 
                            alt={movie.title} 
                            className="img-fluid rounded-lg shadow-2xl" 
                            style={{ width: '100%', aspectRatio: '2/3', objectFit: 'cover' }}
                        /> */}
                        <div className="bg-dark p-3 rounded-lg mt-3 text-white">
                            <h6 className="text-primary border-bottom border-secondary pb-2 mb-2">Info</h6>
                            <p className="mb-1"><small className="fw-bold">Release Date:</small> {movie.release_date}</p>
                            <p className="mb-1"><small className="fw-bold">Runtime:</small> {movie.runtime} min</p>
                            <p className="mb-1"><small className="fw-bold">Language:</small> {movie.original_language.toUpperCase()}</p>
                            <p className="mb-0"><small className="fw-bold">Budget:</small> ${movie.budget.toLocaleString()}</p>
                        </div>
                    </div>

                    {/* Overview and Genres (Main Content) */}
                    <div className="col-lg-9 col-md-8">
                        <div className="text-white mt-4 mt-md-0">
                            <h2 className="fw-bold border-bottom border-primary pb-2">Overview</h2>
                            <p className="lead">{movie.tagline}</p>
                            <p className="text-lg">{movie.overview}</p>
                            
                            <h3 className="mt-4 fw-bold">Genres</h3>
                            <div className="d-flex flex-wrap gap-2">
                                {movie.genres.map(genre => (
                                    <span key={genre.id} className="badge bg-primary text-white p-2 text-md rounded-pill">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}
export default MovieDetailPage;