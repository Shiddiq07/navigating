import React,{useState,useEffect} from 'react';
import{useParams} from 'react-router-dom';
import {fetchMovieDetail} from `../api/tmdbApi`;

const MovieDetailPage =()=>{
    const {movieId}= useParams();
    const [movie,setMovie]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
}