import React from 'react';
import styles from './NavigateSlideBar.module.scss'
import {Link, useLocation} from "react-router-dom";

const NavigateSlideBar = ({isBurgerClicked, close}) => {
  const location = useLocation();
  return (
    <div className={isBurgerClicked ? `${styles.bar} ${styles.bar_active}` : `${styles.bar}`} onClick={close}>
      <button className={styles.bar__close}>
        <span className={styles.bar__line}></span>
        <span className={styles.bar__line}></span>
      </button>
      <nav className={styles.bar__links}>
        <Link
          className={location.pathname === '/' ? `${styles.bar__link} ${styles.bar__link_active}` : `${styles.bar__link}`}
          onClick={close}
          to='/'>Главная</Link>
        <Link
          className={location.pathname === '/movies' ? `${styles.bar__link} ${styles.bar__link_active}` : `${styles.bar__link}`}
          onClick={close}
          to='/movies'>Фильмы</Link>
        <Link
          className={location.pathname === '/saved-movies' ? `${styles.bar__link} ${styles.bar__link_active}` : `${styles.bar__link}`}
          onClick={close}
          to='/saved-movies'>Сохранённые фильмы</Link>
      </nav>
      <div className={styles.bar__account}>
        <Link to="/profile" className={styles.bar__profile}>
          Аккаунт
          <div className={styles.bar__man}></div>
        </Link>
      </div>
    </div>
  );
};

export default NavigateSlideBar;
