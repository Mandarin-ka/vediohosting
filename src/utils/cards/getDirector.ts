import { Movie } from '@/types/movies';

export const getDirectors = (movie: Movie) => {
  return movie.persons.filter(
    (e) =>
      e.enProfession.toLowerCase() === 'director' ||
      e.profession.toLowerCase() === 'режиссеры'
  );
};
