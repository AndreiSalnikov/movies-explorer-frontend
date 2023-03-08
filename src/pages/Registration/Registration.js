import React from 'react';
import style from "../Registration/Registration.module.scss";
import Logo from "../../components/Logo/Logo";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Registration = () => {
  const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({mode: "onChange"})
  const loginError = false;

  function onSubmit(data, e) {
    e.preventDefault();
    console.log(data);
    // onRegister(data.email, data.password)
    reset();
  }

  return (
    <main className={style.registration}>
      <Logo/>
      <h1 className={style.registration__title}>Добро пожаловать!</h1>
      <form className={style.registration__form} onSubmit={handleSubmit(onSubmit)}>
        <p className={style.registration__placeholder}>Имя</p>
        <input
          {...register('name', {
            required: 'Обязательное поле',
            validate: {
              minLength: (value) =>
                value.length >= 2 || `Текст должен быть не короче 2 симв. Длина текста сейчас: ${value.length}`
            },
          })}
          className={style.registration__input}/>
        <span
          className={errors.name ? `${style.registration__error} ${style.registration__error_active}` :
            `${style.registration__error}`}>{errors?.name?.message || ""}
        </span>
        <p className={style.registration__placeholder}>E-mail</p>
        <input
          className={style.registration__input}
          {...register('email', {
            required: 'Обязательное поле', pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Некорректная электронная почта"
            }
          })}
        />
        <span
          className={errors.email ?
            `${style.registration__error} ${style.registration__error_active}` :
            `${style.registration__error}`}>{errors?.email?.message || ""}
        </span>
        <p className={style.registration__placeholder}>Пароль</p>
        <input
          className={style.registration__input}
          {...register('password', {
            required: 'Обязательное поле',
            validate: {
              isUpper: (value) => /[A-Z,А-Я]/.test(value) || 'Пароль должен содержать хотя бы одну заглавную букву',
              specialSymbol: (value) => /[!@#$%^&*)(+=.<>{}[\]:;'"|~`_-]/g.test(value) || 'Пароль должен содержать хотя бы 1 специальный символ'
            },
          })}
          type={"password"}
        />
        <span
          className={errors.password ?
            `${style.registration__error} ${style.registration__error_active}` :
            `${style.registration__error}`}>
          {errors?.password?.message || ""}
        </span>
        <span
          className={loginError ?
            `${style.registration__failed_active} ${style.registration__failed}` :
            `${style.registration__failed}`}>Что-то пошло не так...</span>
        <button
          className={isValid ? `${style.registration__button}` :
            `${style.registration__button} ${style.registration__button__type_disabled}`}
          disabled={!isValid}>
          Зарегистрироваться
        </button>
        <p className={style.registration__offer}>Уже зарегистрированы? <Link className={style.registration__login}
                                                                             to={'/signin'}>Войти</Link></p>
      </form>
    </main>
  );
};

export default Registration;
