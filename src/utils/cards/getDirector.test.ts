import { getOneDirector } from './getDirector';
import { cardsMock } from '@/tests/mocks/cards';
import { Movie } from '@/types/movies';

test('Get 1 director', () => {
  const movie: Movie = cardsMock[0];

  expect(getOneDirector(movie).name.toLowerCase()).toBe(
    'Нед Бенсон'.toLowerCase()
  );
});
