import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { setupStore } from './store';
import { GlobalStyles } from './styles/Global/GlobalStyles';
import App from '@/App';

const root = document.getElementById('root');

if (!root) throw new Error('root not found');

const container = createRoot(root);

const store = setupStore();

container.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>,
);
