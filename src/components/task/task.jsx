import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import TaskItem from '../task-item/task-item';
import { Operation } from '../../redux/modules/list';

class Task extends Component {
  render() {
    const {tasks, updateTask, match} = this.props;
    const task = tasks.find((item) => item.id.toString() === match.params.id.toString());
    return <div className="wrapper">
      <Header />
      <TaskItem task={task} updateTask={updateTask} toDetails={false} />
      <div className="desc" style={{backgroundColor: 'bisque'}}>description...</div>
    </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Task);