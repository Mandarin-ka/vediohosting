import styled from 'styled-components';

const StyledGenreButton = styled.button`
  padding: 7px 25px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.controlButton.bg};
  border: 1px solid ${({ theme }) => theme.colors.controlButton.border};
  margin: 5px 10px;
  cursor: pointer;
  transition: 0.1s;
  color: ${({ theme }) => theme.colors.controlButton.text};

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.controlButton.textHover};
    border: 1px solid ${({ theme }) => theme.colors.controlButton.borderHover};
  }

  &.active {
    pointer-events: none;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.controlButton.textHover};
  }

  &.stub {
    padding: 15px 50px;
    background-color: ${({ theme }) => theme.colors.controlButton.bg};
  }
`;

function GenreButton(props: {
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  children?: string;
}) {
  return <StyledGenreButton {...props} data-testid="control-button" />;
}

export default GenreButton;
