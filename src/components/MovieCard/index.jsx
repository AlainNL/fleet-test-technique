import React from "react";
import styles from "./movieCard.module.css";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, selectMovie, title, poster_path }) => {
  return (
    <div className={styles.movie__card} onClick={() => selectMovie(movie)}>
      {poster_path ? (
        <img
          className={styles.card__img}
          style={{ width: "14rem" }}
          src={API_IMG + poster_path}
          alt=""
        />
      ) : (
        <div className={styles.movie__placeholder}> No image found</div>
      )}
      <h5>{title}</h5>
    </div>
  );
};

export default MovieCard;
