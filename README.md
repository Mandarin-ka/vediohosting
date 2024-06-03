# Videohosting

## API

Вместо IMDb использовал kinopoisk API. Даже при условии кеширования мне бы не хватило 100 запросов в месяц

## Запуск

### Установка зависимостей

```sh
npm install
```

### env

| X_API_KEY | [kinopoisk](https://kinopoisk.dev/) api key |
| --------- | ------------------------------------------- |

###devServer

```sh
npm run start
```

### build

```sh
npm run build
```

## Тесты

### Unit-тесты:

```sh
npm run test
```

### e2e-тесты:

```sh
npm run cy:open
```

[Deploy](https://videohosting.vercel.app/)

## Краткое описание:

### Реализовано

1. Основная страница приложения
2. Карточки фильмов
3. Модуль поиска фильмов
4. Модуль переключения фильмов по жанру
5. Модуль смены темы приложения
6. Бесконечная пагинация по принципу Load more.
7. Модальное окно с проигрывающимся видео\*
8. Приложение покрыто unit-тестами
9. Приложение покрыто e2e-тестами по логическим модулям
10. Запросы кешируются

### Используемые технологии

1. Webpack + babel
2. React
3. TypeScript
4. Redux-toolkit
5. jest
6. cypress
7. SASS (каюсь, я заметил слишком поздно, а из-за острой нехватки времени не успел переписать на styled-components до дедлайна)
8. npm (yarn у меня не хочет работать..)
