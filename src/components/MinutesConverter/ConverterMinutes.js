import React from 'react';
import styles from "../MinutesConverter/MinutesConverter.module.scss";

const ConverterMinutes = ({duration}) => {
  const hours = parseInt(duration / 60)
  const minutes = duration % 60

  return (
    <span className={styles.converter}>{`${hours}ч ${minutes}м`}</span>
  );
};

export default ConverterMinutes;
