import React, { useContext, useEffect } from 'react'

import { MovieContext } from '../../Contexts/MovieContext'
import NowShowing from './NowShowing'
import Search from './Search'
import Trending from './Trending'

export default function Home() {
 
  const {descriptioncolor,setDescriptionColor}=useContext(MovieContext)
  useEffect(()=>{
    setDescriptionColor([])
  },[])
  return (
    <div>
        <Search/>
        <h1>Trending Movies</h1>
        <Trending/>
        <h1>Now Showing</h1>
        <NowShowing/>
    </div>
  )
}
