import Header from '.';
import { setupStore } from '@/store';
import { renderWithSC } from '@/tests/helpers/SCHelper';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Render header', () => {
  test('Change theme', async () => {
    const store = setupStore();
    render(renderWithSC(<Header query="" setQuery={() => null} isBurger={false} toggleBurger={() => null} />, store));
    const toggler = screen.getByTestId('toggler');
    expect(store.getState().ThemeReducer.theme).toBe('light');
    await userEvent.click(toggler);
    expect(store.getState().ThemeReducer.theme).toBe('dark');
    await userEvent.click(toggler);
    expect(store.getState().ThemeReducer.theme).toBe('light');
  });

  test('Input value into search bar', () => {
    render(renderWithSC(<Header query="" setQuery={() => null} isBurger={false} toggleBurger={() => null} />));

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
    render(renderWithSC(<Header query={'random word'} setQuery={() => null} isBurger={false} toggleBurger={() => null} />));

    const input = screen.getByPlaceholderText('Search') as HTMLInputElement;
    expect(input.value).not.toBe('');
  });
});
