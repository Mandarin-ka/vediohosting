import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { setupStore } from './store/store';
import App from '@/App';

const root = document.getElementById('root');

if (!root) throw new Error('root not found');

const container = createRoot(root);

const store = setupStore();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

container.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
