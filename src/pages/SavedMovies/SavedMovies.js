import React from 'react';
import styles from './SavedMovies.module.scss'
import MoviesSearch from "../../components/MoviesSearch/MoviesSearch";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";

const SavedMovies = () => {
  return (
    <div className={styles.saved}>
      <MoviesSearch/>
      <MoviesCardList quantity={2}/>
      {/*<MoreButton/>*/}
    </div>
  );
};

export default SavedMovies;
