export const selectFields = ['id', 'names', 'year', 'poster', 'persons', 'name', 'videos'];

export const baseUrl = 'https://api.kinopoisk.dev/v1.4/movie';

export const headers = {
  'X-API-KEY': process.env.X_API_KEY,
};

export const cacheTime = 600000;
