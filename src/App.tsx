import { Route, Routes } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundaries';
import { useAppSelector } from './hooks/useAppSelector';
import MainPage from './pages/MainPage/MainPage';
import { getThemeConfig } from './styles/themes';

import { ThemeProvider } from 'styled-components';

import '@/styles/vars.scss';

function App() {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  return (
    <ThemeProvider theme={getThemeConfig(theme)}>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
