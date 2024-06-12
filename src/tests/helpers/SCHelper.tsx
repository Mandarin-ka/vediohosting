import React from 'react';
import { Provider } from 'react-redux';

import { setupStore } from '@/store';
import { getThemeConfig } from '@/styles/themes';

import { ThemeProvider } from 'styled-components';

export const renderWithSC = (component: React.ReactNode, storeProp = setupStore()) => {
  return (
    <Provider store={storeProp}>
      <ThemeProvider theme={getThemeConfig('light')}>{component}</ThemeProvider>
    </Provider>
  );
};
