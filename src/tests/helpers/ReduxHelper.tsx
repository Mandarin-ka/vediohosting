import React from 'react';
import { Provider } from 'react-redux';

import { setupStore } from './../../store/store';

export const renderWithStore = (
  component: React.ReactNode,
  storeProp = setupStore()
) => {
  return <Provider store={storeProp}>{component}</Provider>;
};
