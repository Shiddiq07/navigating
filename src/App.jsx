import React, { useState,useEffect} from 'react'
import { fetchAnimationMovies } from './api/tmdbApi'    
import PostCard from './components/PostCard'


import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    // Define the async function inside useEffect to handle the fetch
    async function loadMovies(){
    setLoading (true)
    const data=await fetchAnimationMovies();
    setMovies(data)
    setLoading(false)
    }
    loadMovies();
  },[])// ⬅ Empty dependency array means this runs only once after the initial render
  
  if (isLoading){
    return <p>loading data</p>
  }

  if (movies.length ===0){
    return <p>No movies found</p>
  }
    return (
    <>
     <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 movie-list-container">
      {movies.map((movie=>(
        <PostCard key={movie.id} post={movie} />
      )))}
     </div>
    </>
  )
}

export default App
