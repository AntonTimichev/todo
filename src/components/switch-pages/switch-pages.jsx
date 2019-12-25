import React, {Component} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../../history';

import Main from '../main/main';
import Task from '../task/task';

class SwitchPages extends Component {
  render() {
    return <Router history={history}>
      <Switch>
        <Route
          path="/"
          exact
          component={Main}
        />
        <Route
          path="/task/:id"
          render={(props) => <Task {...props} />}
        />
      </Switch>
    </Router>;
  }
}

export default SwitchPages;
