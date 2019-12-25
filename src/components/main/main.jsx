import React, {Component} from 'react';

import TaskInput from '../task-input/task-input';
import Header from '../header/header';
import TaskList from '../task-list/task-list';

import './main.css';

class Main extends Component {
  render() {
    return <div className="wrapper">
      <Header />
      <TaskInput />
      <TaskList />
    </div>;
  }
}

export default Main;
