import { margin } from '@mui/system'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import "../styles/Modal.scss"

export default function Modal({show,setShow,collection,collection_id,trailerlink}) {
 const [id,setId]=useState()

 useEffect(()=>{
    if(!trailerlink)return;
    setId(trailerlink.key)
 },[trailerlink])
    function handleClose(){
        setShow(false)
    }

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

      function handleClose(){
        setShow(!show)
      }

    
  return (
    <div className='modal'>
        
<span onClick={handleClose}>X</span>
        <iframe style={{width:'100%', height:"100%", marginBottom:"1em"}}
src={`https://www.youtube.com/embed/${id}`}>
</iframe>
    
    </div>
  )
}
