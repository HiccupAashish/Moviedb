import React from "react";
import "../styles/Navbar.scss";
export default function Navbar() {
  return (
    <div className="Navbar">
      <h1>
        Berk<span>Hub</span>
      </h1>
      <div className="movieCollection">
        <p>Movies</p>
        <div className="movieList">
          <ul>
            <li>Popular</li>
            <li>Now Showing</li>
            <li>UpComing</li>
            <li>Top Rated</li>
          </ul>
        </div>
      </div>

      <div className="tvCollection">
        {" "}
        <p>TV Shows</p>
        <div className="tvList"></div>
      </div>

      <p>People</p>
      <p>More</p>
    </div>
  );
}
