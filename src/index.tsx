import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import { setupStore } from './store/store';
import App from '@/App';

const root = document.getElementById('root');

if (!root) throw new Error('root not found');

const container = createRoot(root);

const store = setupStore();

container.render(
  <Provider store={store}>
    <App />
  </Provider>
);
