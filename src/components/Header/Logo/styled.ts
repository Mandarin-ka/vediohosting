import styled from 'styled-components';

export const LogoName = styled.h1`
  width: fit-content;
  font-size: 1.5em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const LogoWrapper = styled.div`
  width: 40px;
  height: 30px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  margin-left: 2px;
  border-top: 7px solid transparent;
  border-left: 14px solid ${({ theme }) => theme.colors.white};
  border-bottom: 7px solid transparent;
`;
