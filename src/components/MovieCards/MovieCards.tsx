import { useEffect } from 'react';

import Flex from '../styled/Flex';
import Title from '../styled/Title';
import { CardsProps } from './config';
import MovieCard from './MovieCard';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { createGenreRequestAction } from '@/store/actions/createGenreRequestAction';
import { createQueryRequestAction } from '@/store/actions/createQueryRequestAction';
import { Movie } from '@/types/movies';

function MovieCards({ query, genre, page, setPage, isLoadingNewPage, setIsLoadingNewPage }: CardsProps) {
  const dispatch = useAppDispatch();
  const { isLoading, movies, error } = useAppSelector((state) => state.MoviesReducer);

  useEffect(() => {
    query
      ? dispatch(createQueryRequestAction(query, page, isLoadingNewPage, genre))
      : dispatch(createGenreRequestAction(page, genre, isLoadingNewPage));
    isLoadingNewPage ? setIsLoadingNewPage(false) : setPage(1);
  }, [page, genre, query]);

  if (movies.length || isLoading)
    return (
      <Flex fw="wrap" ai="center" jc="center" data-testid="cards">
        {movies.map((movie: Movie, index: number) => (
          <MovieCard movie={movie} key={movie?.id || index} />
        ))}
        {isLoading &&
          Array(16)
            .fill(null)
            .map((e, i) => <MovieCard movie={e} key={i} />)}
      </Flex>
    );

  if (error) return <Title>Произошла {error}. Попробуйте позже.</Title>;
  return <Title> Ничего не найдено.</Title>;
}

export default MovieCards;
