# Movies Browser

## Ссылка на дизайн проекта

https://www.figma.com/file/GXMByJw60pzmTnNYGebgCt/Diploma-(Copy)?node-id=932%3A4503&t=RqYwZk54hmsEhpbQ-1

## Ссылка для демонстрации проекта

https://moviessearch.nomoredomains.work/

## Описание

Movies Browser — cервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.

## Функционал

- Адаптивный дизайн под все разрешения устройств
- У всех интерактивных элементов есть анимация
- Регистрация и авторизация пользователя
- Вид шапки меняется в зависимости от авторизации
- Пользователь получает сообщение в случае любой ошибки
- При поиске текст запроса, найденные фильмы и состояние переключателя короткометражек сохраняются в хранилище
- Поля формы заблокированы во время отправки запросов, и у пользователя нет возможности отправить новый запрос до завершения предыдущего
- Все формы валидируются на стороне клиента, пользователь не может отправить запрос с невалидными данными
- Редактирование профиля (имя, электронная почта)
- Пользователю отображается уведомление об успешном запросе к серверу при сохранении профиля
- Если на странице редактирования профиля введённая информация соответствует текущим данным пользователя, кнопка «Сохранить» заблокирована и нельзя отправить запрос сохранения
- Прелоадер крутится во время выполнения запроса фильмов
- Если карточки уже были отображены на странице в блоке результатов, клик по чекбоксу «Короткометражки» приводит к повторной фильтрации результата
- Для оптимизации запрос на получение всех фильмов выполняется только один раз, после чего они сохраняются в локальном хранилище
- Сетка фильмов зависит от ширины экрана. При клике на кнопку «Ещё» отобразится 3,2 или 5 фильмов, в зависимости от того, сколько их отображается в одной строке
- Сохранение/удаление фильмов из вкладки схранённые фильмы
- При клике на постер фильма в новой вкладке открывает трейлер
- При попытке перейти на любой защищённый роут происходит редирект на главную страницу
- Если пользователь был авторизован и закрыл вкладку, он может вернуться сразу на любую страницу приложения по URL-адресу, кроме страниц авторизации и регистрации
- При попытке перейти на несуществующую страницу происходит редирект на страницу «404»

## Технологии

- React
- React Router v6
- Хуки (useState, useEffect, useContext)
- Использование хука useFrom для мгновенной валидации полей
- Использование локального хранилища
- Работа с API
- HOC-компоненты
- БЭМ,
- Ипользование препроцессора SCSS
- Контроль версий в Git с использованием веток.

## Инструкция

Чтобы запустить проект, нужно сделать несколько простых шагов.

- Создайте папку и перейдите в неё:

```
cd <Имя-папки>
```

- Склонируйте этот репозиторий:

```
git clone https://github.com/AndreiSalnikov/movies-explorer-frontend.git
```

- Установите все зависимости:

```
yarn или npm install
```

- Теперь можете запустить проект:

```
npm start или yarn start
```
