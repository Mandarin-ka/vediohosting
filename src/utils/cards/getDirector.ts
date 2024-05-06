import { Movie } from '@/types/movies';

export const getOneDirector = (movie: Movie) => {
  return movie.persons.find(
    (e) =>
      e.enProfession.toLowerCase() === 'director' ||
      e.enProfession.toLowerCase() === 'режиссеры'
  );
};
