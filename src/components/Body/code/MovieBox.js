import React from "react";
import "../styles/TrendingBox.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate,Link } from "react-router-dom";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { getMovieDetails } from "../../store/movieSlice";

export default function MovieBox({ movie }) {
  const navigate=useNavigate()
  const dispatch=useDispatch()


  function handleClick(movie){
    
    if(movie.media_type){
      navigate(`/${movie.media_type}/${movie.id}`)
    }
    else{
      navigate(`/movie/${movie.id}`)
    }
    
  }

  return (
    <div  className="trending_movie_card">
      
        <div onClick={()=>handleClick(movie)}  className="image_box">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        </div>
        <div className="trending_title">
          <div className="rating_circle">
            <CircularProgressbar
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "black",
                textColor: "white",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
              value={movie.vote_average * 10}
              text={`${Math.round(movie.vote_average * 10)}%`}
            />
            ;
          </div>
          {movie.title ? (
            <p>{movie.title}</p>
          ) : (
            <p>{movie.original_name}</p>
          )}
        </div>
        
    </div>
  );
}
