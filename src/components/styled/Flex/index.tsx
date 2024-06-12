import { ReactNode } from 'react';

import { getMargin } from '@/utils/getMargin';

import styled from 'styled-components';

interface FlexContainer {
  jc?: string;
  ai?: string;
  fld?: string;
  fw?: string;
  m?: number | number[];
}

const StyledFlex = styled.div<FlexContainer>`
  display: flex;
  flex-direction: ${(props) => props.fld || 'row'};
  justify-content: ${(props) => props.jc || 'stretch'};
  align-items: ${(props) => props.ai || 'stretch'};
  flex-wrap: ${(props) => props.fw || 'no-wrap'};
  margin: ${(props) => getMargin(props.m) || 'auto'};

  &.panel {
    width: 90%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.background};

    @media ${(props) => props.theme.media.tablet} {
      position: fixed;
      right: -100%;
      z-index: 1;
      height: 100vh;
      padding: 10vh 1vw;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      top: 0;
      transition: 0.3s;
      border-left: 2px solid $buttons-color;
    }

    &.active {
      right: 0;
    }

    @media ${(props) => props.theme.media.tablet} {
      width: 60vw;
    }

    @media ${(props) => props.theme.media.smallTablet} {
      width: 80vw;
    }

    @media ${(props) => props.theme.media.phone} {
      width: 100vw;
    }
  }
`;

function Flex(props: {
  className?: string;
  m?: number | number[];
  fw?: string;
  jc?: string;
  ai?: string;
  fld?: string;
  children?: ReactNode | ReactNode[];
}) {
  return <StyledFlex {...props} />;
}

export default Flex;
