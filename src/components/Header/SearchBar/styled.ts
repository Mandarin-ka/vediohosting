import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 45%;
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.controlButton.border};

  @media ${({ theme }) => theme.media.tablet} {
    align-self: center;
    width: 100%;
    margin-top: 20px;
  }
`;

export const StyledInput = styled.input`
  border: 0;
  width: calc(100% - 60px);
  color: black;
  box-sizing: border-box;
  padding: 7px 15px;
  font-size: 20px;
  outline: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.controlButton.border};
  }

  &:active {
    outline: 0;
  }

  &:focus {
    outline: 0;
  }
`;

export const StyledSearchButton = styled.button`
  width: 60px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 0;
  border-left: 2px solid ${({ theme }) => theme.colors.controlButton.border};
  z-index: 1;
  position: relative;
  cursor: pointer;
  background-color: white;

  &::after {
    content: '';
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.controlButton.border};
    position: absolute;
    border-radius: 0 1px 1px 0;
    transform: rotate(25deg);
    bottom: 13px;
  }

  &::before {
    content: '';
    border: 2px solid ${({ theme }) => theme.colors.controlButton.border};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 8px;
    left: 15px;
  }

  @media ${({ theme }) => theme.media.smallTablet} {
    padding: 7px 15px;
  }
`;
