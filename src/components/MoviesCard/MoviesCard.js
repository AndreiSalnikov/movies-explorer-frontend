import React, {useEffect, useState} from 'react';
import styles from './MoviesCard.module.scss'
import {Link, useLocation} from "react-router-dom";
import ConverterMinutes from "../MinutesConverter/ConverterMinutes";
import {mainApi} from "../../utils/MainApi";

const MoviesCard = ({
                      card, savedMovies, setSavedMovies, setDisplayedMovies
                    },) => {

  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [idForDelete, setIdForDelete] = useState('')
  const location = useLocation();

  useEffect(() => {
    savedMovies.forEach((movie) => {
      if (location.pathname === '/saved-movies') {
        if (card.movieId === movie.movieId) {
          setIdForDelete(movie._id)
        }
      } else {
        if (card.id === movie.movieId) {
          setIsLikeClicked(true)
          setIdForDelete(movie._id)
        }
      }
    })
  }, [savedMovies]);

  async function handleLikeClick() {
    try {
      if (location.pathname === '/saved-movies') {
        await mainApi.changeStatusMovie(false, card, idForDelete);
        // setDisplayedMovies((state) => state.filter((c) => {
        //   return c._id !== card._id
        // }))
        setDisplayedMovies((state) => state.filter((c) => {
          return c._id !== card._id
        }))
        setSavedMovies((state) => state.filter((c) => {
          return c._id !== card._id
        }))
      } else {
        await mainApi.changeStatusMovie(!isLikeClicked, card, idForDelete);
        setIsLikeClicked(isLikeClicked => !isLikeClicked)
      }


    } catch (error) {
      console.error(error);
    }
  }

  const baseUrl = 'https://api.nomoreparties.co/';
  const locate = useLocation();
  return (
    <div className={styles.card}>
      <div className={styles.card__text}>
        <div>
          <h2 className={styles.card__title}>{card.nameRU}</h2>
          <ConverterMinutes duration={card.duration}></ConverterMinutes>
        </div>
        <button
          className={locate.pathname === '/movies' ? (isLikeClicked ? `${styles.card__button} ${styles.card__button_active}` : styles.card__button) : `${styles.card__button} ${styles.card__button_delete}`}
          onClick={handleLikeClick}></button>
      </div>
      <Link className={styles.card__link} to={card.trailerLink} target="_blank">
        <img className={styles.card__img} alt='картинка фильма'
             src={locate.pathname === '/saved-movies' ? `${card.image}` : `${baseUrl}${card.image.url}`}/>
      </Link>
    </div>
  );
};

export default MoviesCard;
