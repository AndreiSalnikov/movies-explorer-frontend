import React from 'react';
import styles from './Main.module.scss'
import Promo from "../../components/Promo/Promo";
import AboutProject from "../../components/AboutProject/AboutProject";
import Techs from "../../components/Techs/Techs";
import AboutMe from "../../components/AboutMe/AboutMe";
import Portfolio from "../../components/Portfolio/Portfolio";
import Preloader from "../../components/Preloader/Preloader";
const Main = () => {
  return (
    <main className={styles.main}>
      {/*<Preloader/>*/}
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </main>
  );
};

export default Main;
