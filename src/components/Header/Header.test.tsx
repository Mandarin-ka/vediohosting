import { renderHeaderWithParams } from '@/tests/componentsConfig/headerConfig';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Render header', () => {
  let query = '';
  const setQuery = (e: string) => {
    query = e;
  };

  test('Change theme', async () => {
    renderHeaderWithParams(query, setQuery);

    const toggler = screen.getByTestId('toggler');

    expect(screen.getByText('ModsenFilms')).not.toHaveClass('dark');
    expect(screen.getByTestId('logo')).not.toHaveClass('dark');

    await userEvent.click(toggler);

    expect(screen.getByText('ModsenFilms')).toHaveClass('dark');
    expect(screen.getByTestId('logo')).toHaveClass('dark');
  });

  test('Input value into search bar', () => {
    renderHeaderWithParams(query, setQuery);

    const input = screen.getByPlaceholderText('Search') as HTMLInputElement;
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'random test-text' } });

    expect(input.value).toBe('random test-text');

    fireEvent.change(input, { target: { value: 'random' } });
    expect(input.value).toBe('random');

    fireEvent.change(input, { target: { value: '' } });
    expect(input.value).toBe('');
  });

  test('Input value into search bar with non-null query', () => {
    renderHeaderWithParams('some string', setQuery);

    const input = screen.getByPlaceholderText('Search') as HTMLInputElement;
    expect(input.value).not.toBe('');
  });
});
