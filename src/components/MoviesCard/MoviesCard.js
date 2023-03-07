import React from 'react';
import styles from './MoviesCard.module.scss'
import {useLocation} from "react-router-dom";

const MoviesCard = ({img, tile, time, isLicked}) => {
  const locate = useLocation();
  return (
    <div className={styles.card}>
      <div className={styles.card__text}>
        <div>
          <h2 className={styles.card__title}>{tile}</h2>
          <span className={styles.card__duration}>{time}</span>
        </div>
        <button
          className={locate.pathname === '/movies' ? styles.card__button : `${styles.card__button} ${styles.card__button_delete}`}></button>
      </div>
      <img alt='картинка фильма' className={styles.card__img} src={img}/>
    </div>
  );
};

export default MoviesCard;
