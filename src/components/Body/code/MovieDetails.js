import React, { useEffect } from "react";
import "../styles/MovieDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ColorExtractor } from "react-color-extractor";
import { useState } from "react";
import hexToRgba from "hex-to-rgba";
import Modal from "./Modal";

export default function MovieDetails() {
  
  
 const [show,setShow]=useState(false)
  const [colors, setColors] = useState([]);
  const [trailerlink,setTrailerLink]=useState()

  const [paint, setPaint] = useState([]);
  const dispatch = useDispatch();
  const { collection, collection_id } = useParams();

  useEffect(() => {
    if (!colors.length > 0) return;

    
    setTrailerLink(movie.videos.results.find(videos=>videos.type === "Trailer" && videos.official ===true))
    setPaint(hexToRgba(colors[0], 0.8));
  }, [colors]);

  const movie = useSelector((state) => state.movie.trendingMovieDetail);

  function handleColor(color) {
    setColors(color);
  }

  function handleOpen(){
    setShow(!show)
  }
  

  return (
    <>
      {movie && (
        <div
          className="movie-details"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundRepeat: "none",
          }}
        >
         {show && <Modal trailerlink={trailerlink} collection={collection} collection_id={collection_id} show={show} setShow={setShow}/>}

          <ColorExtractor
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            getColors={handleColor}
          ></ColorExtractor>

          {paint && (
            <div style={{ backgroundColor: `${paint}` }} className="textData">
              {movie && (
                <>
                  <div className="movieBox">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />

                    <div className="detailsBox">
                      <h2>{movie.original_name}</h2>
                      <p>{movie.overview}</p>
                      <button onClick={handleOpen} className="btn btn-danger">Trailer</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
