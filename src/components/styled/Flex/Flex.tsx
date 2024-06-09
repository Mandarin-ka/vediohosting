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
  margin: ${(props) => getMargin(props.m)};
`;

function Flex(props: { m?: number | number[]; fw?: string; jc?: string; ai?: string; fld?: string; children?: ReactNode | ReactNode[] }) {
  return <StyledFlex {...props} />;
}

export default Flex;
