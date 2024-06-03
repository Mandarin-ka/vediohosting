import Modal from './Modal';
import { render, screen } from '@testing-library/react';

describe('Render modal', () => {
  test('Modal is not active', () => {
    render(<Modal isActive={false} setIsActive={() => null} />);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
