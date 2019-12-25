import React, {Component} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './taskinput.css'
import { ActionCreator } from '../../redux/modules/list';

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    const { value } = e.target;
    this.setState({text: value});
  }

  addTodo() {
    this.props.addTodo({
      id: Math.random().toString(16).slice(3, 7),
      name: this.state.text,
      created: moment(new Date()).format('HH:mm:ss DD-MM-YYYY'),
      done: false
    });
    this.setState({ text: '' });
  }

  render() {
    return (
      <section className="add-task">
        <input
          value={this.state.text}
          placeholder='Task name...'
          onChange={this.updateText}
        />
        <button type="button" onClick={this.addTodo}>Добавить</button>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (task) => dispatch(ActionCreator.addTask(task))
  };
};

export default connect(null, mapDispatchToProps)(TaskInput);
