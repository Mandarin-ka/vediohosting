import { memo } from 'react';

import styled from 'styled-components';

interface CustomImg {
  radius?: number;
}

const StyledImage = styled.img<CustomImg>`
  max-width: 100%;
  width: ${(props) => props.width || 'auto'}px;
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props?.radius || 0}px;
`;

function Title(props: { src: string; alt: string; width?: number; height?: number; radius?: number }) {
  return <StyledImage {...props} />;
}

export default memo(Title);
