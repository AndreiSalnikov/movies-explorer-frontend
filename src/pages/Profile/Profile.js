import React, {useState} from 'react';
import styles from './Profile.module.scss'
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {mainApi} from "../../utils/MainApi";
import {useFormValidation} from "../../hooks/useFormValidation";

const Profile = () => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const {user, setUser} = useAuth();
  const navigate = useNavigate()
  const [loadButton, setLoadButton] = useState(false);
  const [errorEditData, setErrorEditData] = useState("");
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    validateName,
    validateEmail,
  } = useFormValidation();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    setErrorEditData('');
    setIsEditClicked(isEditClicked => !isEditClicked);

    if (isEditClicked) {
      setLoadButton(true);

      try {
        const dataResponse = await mainApi.editServerProfileInfo(data);
        setUser(dataResponse);
        setLoadButton(false);
      } catch (err) {
        setErrorEditData(err.message);
        setLoadButton(false);
        console.error(err);
      }
    }
  }

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("jwt");
    localStorage.removeItem("filteredFilms");
    localStorage.removeItem("checkbox");
    localStorage.removeItem("searchWord");
    navigate('/signin')
  }

  return (
    <main className={styles.profile}>
      <form className={styles.profile__form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.profile__title}>Привет, YOUR_NAME!</h1>
        <div className={styles.profile__line}>
          <p className={styles.profile__text}>Имя</p>
          {isEditClicked &&
            <div className={styles.profile__validate}>
              <input  {...register('name', validateName)} className={styles.profile__input} required/>
              <span
                className={errors.name ? `${styles.profile__error} ${styles.profile__error_active}` :
                  `${styles.profile__error}`}>{errors?.name?.message || ""}
        </span>
            </div>
          }
          {!isEditClicked && <p className={styles.profile__text}>{user.name}</p>}
        </div>
        <div className={styles.profile__line}>
          <p className={styles.profile__text}>E-mail</p>
          {isEditClicked &&
            <div className={styles.profile__validate}>
              <input {...register('email', validateEmail)} className={styles.profile__input} required/>
              <span
                className={errors.email ?
                  `${styles.profile__error} ${styles.profile__error_active}` :
                  `${styles.profile__error}`}>{errors?.email?.message || ""}
        </span>
            </div>
          }
          {!isEditClicked && <p className={styles.profile__text}>{user.email}</p>}
        </div>

        <span
          className={errorEditData ?
            `${styles.profile__failed_active} ${styles.profile__failed}` :
            `${styles.profile__failed}`}>{errorEditData}</span>

        <button
          className={!isValid || loadButton ? `${styles.profile__edit} ${styles.profile__edit__type_disabled}` :
            `${styles.profile__edit}`
          }

          disabled={!isValid || loadButton}>{isEditClicked ? 'Сохранить' : (loadButton ? 'Сохранение...' : 'Редактировать')}</button>
        <button className={styles.profile__logout} onClick={handleSignOut}>Выйти из аккаунта</button>
      </form>
    </main>
  );
};

export default Profile;
