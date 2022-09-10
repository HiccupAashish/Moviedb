import React from "react";
import "../styles/TrendingBox.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate,Link } from "react-router-dom";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { getMovieDetails } from "../../store/movieSlice";

export default function TrendingBox({ movie }) {
  const navigate=useNavigate()
  const dispatch=useDispatch()


  function handleClick(media_type,id){
    console.log(media_type)
    console.log(id)
    dispatch(getMovieDetails({media_type,id}))
  }

  return (
    <div  className="trending_movie_card">
      <Link style={{textDecoration: 'none', color:'black'}} to={`/${movie.media_type}/${movie.id}`}>
        <div onClick={()=>handleClick(movie.media_type,movie.id)}  className="image_box">
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
            <h1>{movie.title}</h1>
          ) : (
            <h1>{movie.original_name}</h1>
          )}
        </div>
        </Link>
    </div>
  );
}
