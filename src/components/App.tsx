import { Outlet } from 'react-router-dom';

import Page from '@pages/Page';
import Page3 from '@utils/Page3';

import * as styles from './App.module.scss';

function App() {
  return (
    <div className={styles.block}>
      vivivi
      <div className={styles.temp}>element</div>
      <Page />
      <Page3 />
      <Outlet />
    </div>
  );
}

export default App;
