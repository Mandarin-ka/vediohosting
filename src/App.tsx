import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundaries';
import MainPage from '@/pages/MainPage/MainPage';

import '@/styles/reset.scss';
import '@/styles/vars.scss';

function App() {
  return (
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  );
}

export default App;
