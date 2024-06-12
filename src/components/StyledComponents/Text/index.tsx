import { memo, ReactNode } from 'react';

import styled from 'styled-components';

const StyledText = styled.p`
  width: fit-content;
  font-size: 1em;
  font-weight: 400;
  max-width: 200px;
  color: ${({ theme }) => theme.colors.text};

  &.year{
    margin-left: 30px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.text};
      top: calc(50% - 2.5px);
      left: calc((-5px - 30px) / 2);
  }
`;

function Text(props: { className?: string; children?: ReactNode }) {
  return <StyledText {...props} />;
}

export default memo(Text);
