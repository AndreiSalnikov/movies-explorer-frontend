import React from 'react';
import styles from './NotFound.module.scss'
import {Link, useNavigate} from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.notfound}>
      <h1 className={styles.notfound__code}>404</h1>
      <h2 className={styles.notfound__text}>Страница не найдена</h2>
      <Link className={styles.notfound__back} onClick={() => navigate(-3)}>Назад</Link>
    </main>
  );
};

export default NotFound;
