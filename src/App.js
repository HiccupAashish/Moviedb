import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Navbar from './components/Header/code/Navbar';
import Search from './components/Body/code/Search';
import Home from './components/Body/code/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
