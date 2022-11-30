import React, { useState } from "react";
import styles from './movieCard.module.css';
import { Modal, show } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({movie, title, poster_path}) => {


    return (
      <div className={styles.movie__card}>
          {poster_path ? <img className={styles.card__img} style={{width:'14rem'}} src={API_IMG+poster_path} alt=""/>
          :
          <div className={styles.movie__placeholder}> No image found</div>
          }
          <h5>{title}</h5>
      </div>
  )
}

export default MovieCard;
