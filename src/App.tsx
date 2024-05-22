import { Route, Routes } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundaries';
import MainPage from './pages/MainPage/MainPage';

import '@/styles/reset.scss';
import '@/styles/vars.scss';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path='/build' element={<MainPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
