import React, {useState} from 'react';
import styles from './Header.module.scss'
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";
import Logo from "../Logo/Logo";
import NavigateSlideBar from "../NvigateSlideBar/NavigateSlideBar";


const Header = () => {
  const location = useLocation();
  let activeStyle = {
    fontWeight: 500,
  };
  const [isBurgerClicked, setIsBurgerClicked] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => {
    setIsBurgerClicked(!isBurgerClicked)
  }

  return (
    <>
      <header className={location.pathname === '/' ? styles.header : `${styles.header} ${styles.header__profile}`}>
        <Logo/>
        {isLoggedIn &&
          <div className={styles.header__menu}>
            <NavLink style={({isActive}) =>
              isActive ? activeStyle : undefined
            } className={styles.header__movies} to='/movies'>Фильмы</NavLink>
            <NavLink style={({isActive}) =>
              isActive ? activeStyle : undefined
            } className={styles.header__saved} to='/saved-movies'>Сохранённые фильмы</NavLink>
          </div>
        }
        <nav className={styles.header__authorization}>
          {isLoggedIn ?
            <div className={styles.header__account}>
              <Link to="/profile" className={styles.header__link}>
                Аккаунт
                <div className={styles.header__man}></div>
              </Link>
            </div>
            :
            <>
              <Link className={styles.header__registration} to="/signup">Регистрация</Link>
              <Link className={styles.header__login} to="/signin">Войти</Link>
            </>
          }
        </nav>
        {isLoggedIn &&
          <button className={styles.header__burger} onClick={() => setIsBurgerClicked(!isBurgerClicked)}>
            <span
              className={isBurgerClicked ? `${styles.header__line} ${styles.header__line_active}` : `${styles.header__line}`}></span>
            <span
              className={isBurgerClicked ? `${styles.header__line} ${styles.header__line_active}` : `${styles.header__line}`}></span>
            <span
              className={isBurgerClicked ? `${styles.header__line} ${styles.header__line_active}` : `${styles.header__line}`}></span>
          </button>
        }
        <NavigateSlideBar isBurgerClicked={isBurgerClicked} close={handleClose}/>
      </header>
      <Outlet/>
    </>
  );
};

export default Header;
