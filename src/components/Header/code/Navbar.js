import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { fire } from "../../../Firebase/firebase";
import { AuthContext } from "../../Contexts/AuthContext";
import "../styles/Navbar.scss";
export default function Navbar() {
  const {currentUser,setCurrentUser}=useContext(AuthContext)

  function handleLogout(){
    fire.auth().signOut()
    setCurrentUser("")
  }
  return (
    <div className="Navbar">
      <h1>
        Bing<span>Hub</span>
      </h1>
      <div className="movieCollection">
        <p>Movies</p>
        <div className="movieList">
          <ul>
            <li>Popular</li>
            <li>Now&nbsp;Showing</li>
            <li>UpComing</li>
            <li>Top Rated</li>
          </ul>
        </div>
      </div>

      <div className="tvCollection">
       
        <p>TV Shows</p>
        <div className="tvList">
          <ul>
            <li>Popular</li>
            <li>Airing&nbsp;Today</li>
            <li>On&nbsp;TV</li>
            <li>Top&nbsp;Rated</li>

          </ul>
        </div>
      </div>

      <p>People</p>
      
   <Link to="/signup"><p>    Login</p></Link> 
   {currentUser &&<p onClick={handleLogout}>Logout</p>}
      
    </div>
  );
}
