import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: start;
    padding: 15px 40px;
  }

  @media${({ theme }) => theme.media.phone} {
    padding: 15px;
  }
`;
