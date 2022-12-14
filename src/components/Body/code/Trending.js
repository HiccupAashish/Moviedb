import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingMovies } from '../../store/movieSlice'

import { v4 } from 'uuid'
import MovieBox from './MovieBox'

export default function Trending() {
  const trendingMovie=useSelector(state=>state.movie.trendingmovies)

const dispatch=useDispatch()
useEffect(()=>{
 dispatch(getTrendingMovies())
},[])

  return (
    <div className="trendingBox">
   {trendingMovie && trendingMovie.map(movie=>(<MovieBox key={v4()} movie={movie}/>))  }
    </div>
  )
}
