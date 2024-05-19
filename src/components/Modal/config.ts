import React from 'react';

export type ClickEventType =
  | React.MouseEvent<HTMLButtonElement, MouseEvent>
  | React.MouseEvent<HTMLDivElement, MouseEvent>;
