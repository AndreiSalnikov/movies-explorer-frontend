import React from 'react';
import style from './AboutMe.module.scss'
import aboutMeImage from '../../images/aboutMe/aboutMeImage.jpg'

const AboutMe = () => {
  return (
    <section className={style.about}>
      <h2 className={style.about__title}>Студент</h2>
      <article className={style.about__story}>
        <div className={style.about__text}>
          <strong className={style.about__name}>Андрей</strong>
          <p className={style.about__paragraph}>Фронтенд-разработчик, 25 лет</p>
          <p className={style.about__paragraph}>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
            есть жена
            и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
            компании
            «СКБ Контур». После того, как&nbsp;прошёл курс по веб-разработке, начал заниматься фриланс&#8209;заказами и
            ушёл
            с
            постоянной работы.
          </p>
          <a target="_blank" href='https://github.com/AndreiSalnikov' rel="noreferrer"
             className={style.about__link}>Github</a>
        </div>
        <img className={style.about__img} src={aboutMeImage} alt='фотограция автора'/>
      </article>
    </section>
  );
};

export default AboutMe;
