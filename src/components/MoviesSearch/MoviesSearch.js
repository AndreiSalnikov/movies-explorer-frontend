import React from 'react';
import styles from './MoviesSearch.module.scss'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const MoviesSearch = () => {
  return (
    <>
      <div className={styles.search}>
        <input className={styles.search__input} placeholder={'Фильм'}/>
        <button className={styles.search__button}></button>
      </div>
      <div className={styles.search__checkbox}>
        <FilterCheckbox/>
        <p className={styles.search__paragraph}>Короткометражки</p>
      </div>
    </>
  );
};

export default MoviesSearch;
