import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.colors.footerLine};
  padding: 54px 0 80px;
  box-sizing: border-box;

  @media${({ theme }) => theme.media.tablet} {
    padding: 54px 0 110px;
  }
`;

export const StyledRefs = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 293px;

  @media ${({ theme }) => theme.media.tablet} {
    &:first-child {
      justify-content: flex-end;
    }
    margin: 0 10px;
    font-size: 1rem;

    & > * {
      text-align: right;
    }
  }

  @media screen and (max-width: 520px) {
    font-size: 0.88rem;
    margin: 0 2px;
  }
`;

export const StyledLicense = styled.p`
  position: absolute;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.licence};
  font-weight: 600;
  bottom: 15px;
  left: 0;
  right: 0;
  width: fit-content;
  margin: auto;

  @media ${({ theme }) => theme.media.smallTablet} {
    font-size: 1.25rem;
  }
`;

export const StyledA = styled.a`
  width: fit-content;
  height: fit-content;
  font-size: 1.25em;
  font-weight: 600;
  margin: 3px 5px;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};

  @media ${({ theme }) => theme.media.smallTablet} {
    margin: 0 3px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text};
    bottom: 0;
    left: -100%;
    transition: 0.4s;
  }

  &:hover::after {
    left: 0;
  }

  @media ${({ theme }) => theme.media.smallTablet} {
    margin: 0 3px;
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 144px;
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const StyledDocs = styled.div`
  display: flex;

  @media ${({ theme }) => theme.media.tablet} {
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
`;
