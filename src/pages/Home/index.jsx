import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./home.module.css";


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=eda25039ca2db0c207beac572dc11346";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=eda25039ca2db0c207beac572dc11346&query";
const IMG_PATH = "https://image.tmdb.org/t/p/500"



const Home = () => {

  const [movies, setMovies] = useState([]);
  const [query, setQuery]=useState('');
  const [selectMovie, setSelectMovie]= useState({});

  useEffect(() => {
     fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
      setSelectMovie(data.results[0]);
    })
  }, [])

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=eda25039ca2db0c207beac572dc11346&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <div className="general">
        <div className={styles.header}>
            <div className={styles.header__content}>
                <h1>AlloMovies</h1>
                <form className="d-flex" onSubmit={searchMovie} autoComplete="off">
                      <input type="search"
                      placeholder="Enter Movie Name"
                      className="inputText"
                      arial-label="search"
                      value={query} onChange={changeHandler}
                      >
                      </input>
                      <button><i className="fas fa-search"></i></button>
                </form>
            </div>
        </div>
        <div className={styles.hero} style={{backgroundImage : `url('https://image.tmdb.org/t/p/w1280${selectMovie.backdrop_path}')`}}>
            <div className={styles.hero__content}>
              <h1>{selectMovie.title}</h1>
              <p>Date: {selectMovie.release_date}</p>
              <p>Note: {selectMovie.vote_average}</p>
              <p>{selectMovie.overview}</p>
            </div>
        </div>
        <div className={styles.container}>
        {movies.map((movieReq) =>
        <MovieCard key={movieReq.id} {...movieReq} />
        )}
        </div>
    </div>
  );
}


export default Home;
