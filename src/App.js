import "./App.scss"
import {BrowserRouter, Route,Routes, useLocation} from 'react-router-dom'
import Navbar from './components/Header/code/Navbar';
import Search from './components/Body/code/Search';
import Home from './components/Body/code/Home';
import MovieDetails from "./components/Body/code/MovieDetails";
import Signup from "./components/LoginSignup.js/Signup";
import Login from "./components/LoginSignup.js/Login";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/:collection/:collection_id' element={<MovieDetails/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
