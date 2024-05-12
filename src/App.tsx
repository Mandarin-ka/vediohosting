import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundaries';
import MainPage from '@/pages/MainPage/MainPage';

import '@/styles/reset.scss';
import '@/styles/vars.scss';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MainPage />

        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
