import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getATrendingMovie } from '../../store/movieSlice'

export default function MovieDetails() {
    const dispatch=useDispatch()
    const { collection,collection_id}=useParams()
    // useEffect(()=>{
    //     dispatch(getATrendingMovie(collection_id))
    // },[])
    const movie=useSelector((state)=>state.movie.trendingMovieDetail)

  return (
    
    <div className='movie-details'>
        {movie && <h1>Yo</h1>}
    </div>
  )
}
