import React, {useState} from 'react';
import styles from './Profile.module.scss'

const Profile = () => {
  const [isEditClicked, setIsEditClicked] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault()
    setIsEditClicked(!isEditClicked)
  }

  return (
    <main className={styles.profile}>
      <form className={styles.profile__form}>
        <h1 className={styles.profile__title}>Привет, YOUR_NAME!</h1>
        <div className={styles.profile__line}>
          <p className={styles.profile__text}>Имя</p>
          {isEditClicked && <input className={styles.profile__input} required/>}
          {!isEditClicked && <p className={styles.profile__text}>YOUR_NAME</p>}
        </div>
        <div className={styles.profile__line}>
          <p className={styles.profile__text}>E-mail</p>
          {isEditClicked && <input className={styles.profile__input} required/>}
          {!isEditClicked && <p className={styles.profile__text}>YOUR_EMAIL</p>}
        </div>
        <button className={styles.profile__edit}
                onClick={handleEditClick}>{isEditClicked ? 'Сохранить' : 'Редактировать'}</button>
        <button className={styles.profile__logout}>Выйти из аккаунта</button>
      </form>
    </main>
  );
};

export default Profile;
