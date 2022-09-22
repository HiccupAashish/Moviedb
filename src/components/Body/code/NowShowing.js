import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { nowShowing } from '../../store/movieSlice'
import MovieBox from './MovieBox'

export default function NowShowing() {
    const dispatch=useDispatch()
    const showing=useSelector(state=>state.movie.nowShowing)

    useEffect(()=>{
        dispatch(nowShowing())
    },[])
    
  return (
    <div className='nowShowing'>
        {showing && showing.map(nowShowing=>(<MovieBox key={v4()} movie={nowShowing}/>))}
    </div>
  )
}
