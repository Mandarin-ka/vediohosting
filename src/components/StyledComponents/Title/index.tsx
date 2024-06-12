import { memo, ReactNode } from 'react';

import styled from 'styled-components';

const StyledTitle = styled.h2`
  width: fit-content;
  font-size: 1.25em;
  font-weight: 600;
  max-width: 200px;
  color: ${({ theme }) => theme.colors.text};
`;

function Title(props: { children?: ReactNode }) {
  return <StyledTitle {...props} />;
}

export default memo(Title);
