import { memo, ReactNode } from 'react';

import { ClickEventType } from '@/types/clickEventType';

import styled from 'styled-components';

const StyledCard = styled.div`
  width: 300px;
  position: relative;
  height: 524px;
  margin: 2%;
`;

function Card(props: { className?: string; children?: ReactNode; onClick?: (e: ClickEventType) => void }) {
  return <StyledCard {...props} />;
}

export default memo(Card);
