import { memo } from 'react';

import { getMargin } from '@/utils/getMargin';

import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% {
    left: -130px;
  }
  20% {
    left: -130px;
  }
  35% {
    left: 500px;
  }
  100% {
    left: 500px;
  }
`;

interface Stub {
  w?: number;
  h?: number;
  radius?: number;
  m?: number | number[];
}

const StyledStub = styled.div<Stub>`
  &{
    width: ${(props) => `${props.w + 'px'}` || '100%'};
    height:  ${(props) => `${props.h + 'px'}` || '100%'};
    border-radius: ${(props) => props.radius || '0'}px;
    background-color: ${({ theme }) => theme.colors.stub.primal};
    margin:${(props) => getMargin(props.m) || 0};
    position: relative;
    overflow: hidden
  }

  &:before{
    content: '';
    width: 30px;
    height: 150%;
    background-color: ${({ theme }) => theme.colors.stub.blick};
    position: absolute;
    top: -40px;
    left: -100px;
    transform: rotate(15deg);
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.stub.blick};
    animation: ${blinkAnimation} 3s linear infinite;
  }


  &.year{
    margin-left: 30px;
    overflow: visible;
    &:before{
      display: none
    }
    &:after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.stub.primal};
      top: calc(50% - 2.5px);
      left: calc(-50% + 15px);
  }
`;

function Stub(props: { className?: string; w?: number; h?: number; radius?: number }) {
  return <StyledStub {...props} />;
}

export default memo(Stub);
