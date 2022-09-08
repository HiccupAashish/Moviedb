import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingMovies } from '../../store/movieSlice'

export default function Trending() {
const [movies,setMovies]=useState()
const dispatch=useDispatch()
useEffect(()=>{
 dispatch(getTrendingMovies())
},[])

const trendingMovie=useSelector(state=>state.movie.trendingMovie)
console.log(trendingMovie)
  return (
    <div>
   <h1>Hello</h1>
   {trendingMovie && <h1>Yo</h1>}
    </div>
  )
}
