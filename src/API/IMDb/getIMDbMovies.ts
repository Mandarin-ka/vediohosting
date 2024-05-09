export const getIMDbMovies = async () => {
  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '75ed199190msh0ecc099c1925197p16a28bjsn74078e1cd3f5', //TODO: Убрать в .env
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    return response;
  } catch (error: unknown) {
    console.error((error as Error).message);
  }
};
