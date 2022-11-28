import React, { useEffect, useState } from "react";
import MovieBox from "../../components/MovieBox";
import SearchBar from '../../components/SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./home.module.css";

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=eda25039ca2db0c207beac572dc11346";

const Home = () => {

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
      <div className={styles.container}>
            <div className="Header">
            <SearchBar />
            </div>
            <div className={styles.grid}>

                {movies.map((movieReq) =>
            <MovieBox key={movieReq.id} {...movieReq} />
            )}
            </div>
      </div>
  );
}


export default Home;
