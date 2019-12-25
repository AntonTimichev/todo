import React, {Component} from 'react';
import { connect } from 'react-redux';

import TaskItem from '../task-item/task-item';
import './tasklist.css'
import { Operation } from '../../redux/modules/list';

class TaskList extends Component {

  render() {
    const {tasks, updateTask} = this.props;
    return <section className="tasks">
      <ul className="task-list">
        {tasks.length > 0 &&
        this.props.tasks.map((task, i) => <TaskItem key={i} task={task} updateTask={updateTask} toDetails={true} />)}
      </ul>
    </section>;
  }
}

const mapStateToProps = ({list}) => {
  return {
    tasks: list.tasks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (id, isDone) => dispatch(Operation.updateTask(id, isDone))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
