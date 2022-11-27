import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import MovieBox from "./components/MovieBox/index";

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=eda25039ca2db0c207beac572dc11346";

const App = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  return (
    <div>
      {movies.map((movieReq) =>
      <MovieBox key={movieReq.id} {...movieReq} /> )}
      <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
