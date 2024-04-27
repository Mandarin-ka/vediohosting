export const getKinoPoiskMovies = async () => {
  try {
    const url = 'https://api.kinopoisk.dev/v1.4/movie';
    const response = await fetch(url, {
      headers: { 'X-API-KEY': 'VK03T2G-SSR406Z-N5FFKM9-1JWHZF7' }, //TODO: Добавить в .env
    });

    return response;
  } catch (e: unknown) {
    console.error((e as Error).message);
  }
};
