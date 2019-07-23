import React  from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { tasks: state.tasks };
};

const ConnectList = ({ tasks }) => (
    <ul className="list-group list-group-flush">
    Tasks
    {tasks.map(task => (
      <li className="list-group-item" key={task.title}>
        {task.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectList);
export default List;