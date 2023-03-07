import React from 'react';
import styles from "../Logo/Logo.module.scss";
import {Link, useLocation} from "react-router-dom";


const Logo = () => {
  const location = useLocation();
  return (
    <Link
      className={location.pathname === '/registration' || location.pathname === '/login' ? `${styles.logo} ${styles.logo__type_center}` : `${styles.logo}`}
      to="/"></Link>
  );
};

export default Logo;
