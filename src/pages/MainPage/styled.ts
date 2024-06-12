import styled from 'styled-components';

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;
