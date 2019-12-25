import React from 'react';
import {Link} from 'react-router-dom';

const TaskItem = ({task, updateTask, toDetails}) => {
  const {id, name, created, done} = task;
  const pathLink = `task/${id}`;
  const handleChangeComplete = () => {
    updateTask(id, !done);
  };

  const style = {
    color: done ? 'brown' : 'black'
  };
  return <li className="task-item">
    <span className="task-item__name" style={style}>{name} ({created})</span>
    <div className="task-item__wrap">
      <input
        className="done-check"
        type="checkbox"
        checked={done}
        onChange={handleChangeComplete}
      />
      {toDetails && <Link to={pathLink} className="task-item__link">Подробнее...</Link>}
    </div>
  </li>;
};

export default TaskItem;
