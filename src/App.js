import React from 'react';
import { Provider } from 'react-redux';

import initStore from './redux';
import { Operation } from './redux/modules/list';
import SwitchPages from './components/switch-pages/switch-pages';

const store = initStore();

store.dispatch(Operation.initTasks());

const App = () => (
  <Provider store={store}>
    <SwitchPages />
  </Provider>
);

export default App;
