import { memo } from 'react';

import styled from 'styled-components';

const StyledPaginationButton = styled.button`
  display: flex;
  margin: 40px auto;
  align-items: center;
  justify-content: center;
  padding: 14px 34.5px;
  background-color: ${({ theme }) => theme.colors.paginationButton.bg};
  border: 0;
  color: ${({ theme }) => theme.colors.paginationButton.color};
  outline: 0;
  cursor: pointer;
  border-radius: 10px;
  font-size: 22px;
  font-weight: bold;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    width: 25px;
    position: absolute;
    height: 120%;
    top: -10%;
    left: -35px;
    background-color: ${({ theme }) => theme.colors.stub};
    transition: 0.5s;
    transform: rotate(15deg);
  }

  &:hover::after {
    left: 120%;
  }
`;

function PaginationButton(props: { children?: string; onClick?: () => void }) {
  return <StyledPaginationButton {...props} data-testid="pagination" />;
}

export default memo(PaginationButton);
