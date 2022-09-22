import React, { useState } from "react";
import { v4 } from "uuid";
import defaultpic from "../../images/default-pic.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSearchList, searchMovie } from "../../store/movieSlice";
import "../styles/Search.scss";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
export default function Search() {
 
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const searchresult = useSelector((state) => state.movie.searchedMovie);
  const [options, setOptions] = useState();

  function handleSearch(e) {
    const moviename = e.target.value;
    if (moviename.length !== 0) {
      dispatch(searchMovie({ moviename }));
    } else {
      setOptions("");
    }
  }

  function handleSelect(id){
    console.log(id)
    dispatch(removeSearchList())
    navigate(`/movie/${id}`)

  }

  useEffect(() => {
    console.log("a")
    if (!searchresult) return;
    console.log(searchresult)
    setOptions(searchresult);
  }, [searchresult]);

  return (
    <div className="SearchBox">
      <div className="searchText">
        <h1>Welcome</h1>
        <h2>Millons pf movies, TV shows and people </h2>
        <h3>to discover. Explore now</h3>
      </div>
      <div className="wrapper">
        <div className="searchinput">
          <input
            onChange={(e) => handleSearch(e)}
            type="search"
            className="movie-search"
          />

          <div className="autocompbox">
            {options &&
              options.map((movie) => (
                <div onClick={()=>handleSelect(movie.id)} key={v4()} className="recommendation">
                  {" "}
                  <img
                    src={movie.poster_path?'https://image.tmdb.org/t/p/w500'+movie.poster_path:defaultpic}
                    // {`${movie.poster_path&&'https://image.tmdb.org/t/p/w500'+movie.poster_path}`}
                    alt="No Image"
                  />
                  <p>{movie.original_title}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
