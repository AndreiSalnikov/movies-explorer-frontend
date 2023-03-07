import React from 'react';
import style from './Login.module.scss'
import Logo from "../../components/Logo/Logo";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Login = () => {
  const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({mode: "onChange"})
  const loginError = false;

  function onSubmit(data, e) {
    e.preventDefault();
    console.log(data);
    // onRegister(data.email, data.password)
    reset();
  }

  return (
    <main className={style.login}>
      <Logo/>
      <h1 className={style.login__title}>Рады видеть!</h1>
      <form className={style.login__form} onSubmit={handleSubmit(onSubmit)}>
        <p className={style.login__placeholder}>E-mail</p>
        <input
          {...register('email', {
            required: 'Обязательное поле', pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Некорректная электронная почта"
            }
          })}
          className={style.login__input}
        />
        <span
          className={errors.email ?
            `${style.login__error} ${style.login__error_active}` :
            `${style.login__error}`}>{errors?.email?.message || ""}
        </span>
        <p className={style.login__placeholder}>Пароль</p>
        <input className={style.login__input}
               {...register('password', {
                 required: 'Обязательное поле',
               })}
               type={"password"}/>
        <span
          className={errors.password ?
            `${style.login__error} ${style.login__error_active}` :
            `${style.login__error}`}>
          {errors?.password?.message || ""}
        </span>
        <span
          className={loginError ?
            `${style.login__failed_active} ${style.login__failed}` :
            `${style.login__failed}`}>Что-то пошло не так...</span>
        <button
          className={
            isValid ? `${style.login__button}` :
              `${style.login__button} ${style.login__button__type_disabled}`
          }
          disabled={!isValid}>
          Войти
        </button>
        <p className={style.login__offer}>Ещё не зарегистрированы? <Link className={style.login__registration}
                                                                         to={'/signup'}>Регистрация</Link></p>
      </form>
    </main>
  );
};

export default Login;
