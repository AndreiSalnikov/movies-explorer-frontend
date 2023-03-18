import {useEffect, useState} from 'react';
import styles from './MoviesCardList.module.scss'
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";

const MoviesCardList = ({
                          isSearchButtonPressed,
                          setSavedMovies,
                          savedMovies,
                          trigger,
                          setIsMoreClicked,
                          isMoreClicked,
                          setDisplayedMovies,
                          filteredMovies,
                          displayedMovies
                        }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    let timeout = null;
    const updateCurrentArray = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (windowWidth >= 1280) {
          if (isMoreClicked) {
            setDisplayedMovies(displayedMovies => [...displayedMovies, ...filteredMovies.slice(displayedMovies.length, displayedMovies.length + 3)]);
            setIsMoreClicked(false)
          } else {
            if (location.pathname === '/saved-movies') {
              if (isSearchButtonPressed) {
                setDisplayedMovies(displayedMovies)
              } else {
                setDisplayedMovies(savedMovies)
              }
            } else {
              setDisplayedMovies(filteredMovies.slice(0, 12));
            }
          }
        } else if (windowWidth >= 768) {
          if (isMoreClicked) {
            setDisplayedMovies(displayedMovies => [...displayedMovies, ...filteredMovies.slice(displayedMovies.length, displayedMovies.length + 2)]);
            setIsMoreClicked(false)
          } else {
            if (location.pathname === '/saved-movies') {
              if (isSearchButtonPressed) {
                setDisplayedMovies(displayedMovies)
              } else {
                setDisplayedMovies(savedMovies)
              }
            } else {
              setDisplayedMovies(filteredMovies.slice(0, 8));
            }

          }
        } else {
          if (isMoreClicked) {
            setDisplayedMovies(displayedMovies => [...displayedMovies, ...filteredMovies.slice(displayedMovies.length, displayedMovies.length + 2)]);
            setIsMoreClicked(false)
          } else {
            if (location.pathname === '/saved-movies') {
              if (isSearchButtonPressed) {
                setDisplayedMovies(displayedMovies)
              } else {
                setDisplayedMovies(savedMovies)
              }
            } else {
              setDisplayedMovies(filteredMovies.slice(0, 5));
            }

          }
        }
      }, 100)

    };
    updateCurrentArray();
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, [windowWidth, trigger, savedMovies, isSearchButtonPressed]);

  return (
    <section className={styles.cards}>
      {displayedMovies.map((card) => (<MoviesCard
        setDisplayedMovies={setDisplayedMovies}
        setSavedMovies={setSavedMovies}
        savedMovies={savedMovies}

        key={card.id || card._id}
        card={card}
      />))}
    </section>
  );
};

export default MoviesCardList;
