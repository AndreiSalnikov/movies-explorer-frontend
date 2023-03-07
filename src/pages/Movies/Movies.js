import React from 'react';
import styles from './Movies.module.scss';
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import MoviesSearch from "../../components/MoviesSearch/MoviesSearch";
import MoreButton from "../../components/MoreButton/MoreButton";

const Movies = () => {
  return (
    <main className={styles.movies}>
      <MoviesSearch/>
      <MoviesCardList quantity={11}/>
      <MoreButton/>
    </main>
  );
};

export default Movies;
