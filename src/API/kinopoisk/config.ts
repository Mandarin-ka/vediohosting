export const selectFields = [
  'id',
  'names',
  'year',
  'poster',
  'persons',
  'name',
  'videos',
];

export const base_url = 'https://api.kinopoisk.dev/v1.4/movie';

export const headers = {
  'X-API-KEY': process.env.X_API_KEY,
  'Content-Type': 'text/html; charset=utf-8',
};
