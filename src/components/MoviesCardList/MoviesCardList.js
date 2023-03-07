import React from 'react';
import styles from './MoviesCardList.module.scss'
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesCard1 from '../../images/movies/moviesCard1.png'
import moviesCard2 from '../../images/movies/moviesCard2.png'

const MoviesCardList = ({quantity}) => {
  const children = [];
  for (let i = 0; i < quantity; i++) {
    children.push(<MoviesCard key={i} img={moviesCard1} tile={'33 слова о дизайне'} time={'1ч 47м'} isLicked={false}/>);
  }
  return (
    <section className={styles.cards}>
      <MoviesCard img={moviesCard2} tile={'33 слова о дизайне'} time={'1ч 47м'} isLicked={false}/>
      {children}
    </section>
  );
};

export default MoviesCardList;
