import { ReactNode } from 'react';

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
  justify-content: ${(props) => props.jc || 'space-evenly'};
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
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
