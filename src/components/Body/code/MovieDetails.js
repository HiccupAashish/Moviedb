import React, { useContext, useEffect } from "react";
import "../styles/MovieDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ColorExtractor } from "react-color-extractor";
import { useState } from "react";
import hexToRgba from "hex-to-rgba";
import Modal from "./Modal";
import { MovieContext } from "../../Contexts/MovieContext";

export default function MovieDetails() {
  const [movie, setMovie] = useState();
  const { descriptioncolor, setDescriptionColor } = useContext(MovieContext);
  const [show, setShow] = useState(false);
  const [trailerlink, setTrailerLink] = useState();
  const dispatch = useDispatch();
  const { collection, collection_id } = useParams();

  useEffect(() => {
    if(!movie) getDetails(collection,collection_id);
    
    if (descriptioncolor.length === 0) return;
    setTrailerLink(
      movie.videos.results.find(
        (videos) => videos.type === "Trailer" && videos.official === true
      )
    );
  }, [descriptioncolor]);

  // const movie = useSelector((state) => state.movie.trendingMovieDetail);
  async function getDetails(collection,collection_id){
    const data=await fetch(`https://api.themoviedb.org/3/${collection}/${collection_id}?api_key=d4309b32067c9fd40912bc109c3da02a&language=en-US&append_to_response=videos,images`).then(res=>res.json())
    // console.log(data)
    setMovie(data)
  }

  function handleColor(color) {
    setDescriptionColor((prevstate) => [
      ...prevstate,
      hexToRgba(color[0],1),
      hexToRgba(color[1], 0.89),
    ]);
  }

  function handleOpen() {
    setShow(!show);
  }

  return (
    <>
      {movie && (
        <div
          className="movie-details"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              movie.backdrop_path ? movie.backdrop_path : movie.poster_path
            })`,
            backgroundRepeat: "none",
          }}
        >
          {show && (
            <Modal
              trailerlink={trailerlink}
              collection={collection}
              collection_id={collection_id}
              show={show}
              setShow={setShow}
            />
          )}

          <ColorExtractor
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            getColors={handleColor}
          ></ColorExtractor>

          {descriptioncolor && (
            <div
              style={{
                background: `linear-gradient(to bottom right, ${descriptioncolor[0]} ,${descriptioncolor[1]} `,
              }}
              className="textData"
            >
              {movie && (
                <>
                  <div className="movieBox">
                    <div className="imagebox">
                      <div className="image">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        />
                      </div>
                      <div className="overlay">
                        <div className="hiddentext">View Image</div>
                      </div>
                    
                    </div>

                    <div className="detailsBox">
                      <h2>{movie.original_name}</h2>
                      <p>{movie.overview}</p>
                      <button onClick={handleOpen} className="btn btn-danger">
                        Trailer
                      </button>
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
