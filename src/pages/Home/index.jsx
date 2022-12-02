import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./home.module.css";
import Navbar from "../../components/NavBar";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=eda25039ca2db0c207beac572dc11346";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [selectMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setSelectedMovie(data.results[0]);
        console.log(data);
      });
  }, [query]);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=eda25039ca2db0c207beac572dc11346&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
      setSelectedMovie(data.results[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="general">
      <Navbar />
      <div className={styles.header}>
        <div className={styles.header__content}>
          <h1>AlloMovies</h1>
          <form className="d-flex" onSubmit={searchMovie}>
            <input
              type="search"
              placeholder="Enter Movie Name"
              className={styles.input__text}
              arial-label="search"
              value={query}
              onChange={changeHandler}
            />
          </form>
        </div>
      </div>
      <div className={styles.all__movie}>
        <div className={styles.container}>
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                {...movie}
                movie={movie}
                selectMovie={setSelectedMovie}
              />
            );
          })}
        </div>
        <div className={styles.poster__content}>
          <div
            className={styles.hero}
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/w1280${selectMovie.backdrop_path}')`,
            }}
          >
            <div className={styles.hero__content}>
              <h1>{selectMovie.title}</h1>
              <p>Date: {selectMovie.release_date}</p>
              <p>Note: {selectMovie.vote_average}</p>
              <p>{selectMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
