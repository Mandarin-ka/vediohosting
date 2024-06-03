import { Genre } from '@/store/reducers/GenresReducer';
import { apiGenre } from '@/types/genres';

export const mapGenres = (genres: apiGenre[]): Genre[] => {
  return genres.map((e) => {
    return {
      label: e.name,
      value: e.name,
    };
  });
};
