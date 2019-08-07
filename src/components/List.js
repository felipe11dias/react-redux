import React, { Component }  from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';


class List extends Component {

  // state = { tasks: [] };

  // constructor(props) {
  //   super(props);

  //   this.loadTasks = this.loadTasks.bind(this);
  // }

  // loadTasks() {
  //   axios.get('http://localhost:3001/tasks')
  //   .then((response) => {
  //     const tasks = response.data
  //     this.setState({tasks : tasks})
  //   });
  // }

  // componentDidMount() {
  //   this.loadTasks()
  // }

  render(){

    return(
      <div>
        { this.props.tasks.map(task => (
          <ul key={task.id}>
              <li className="list-group-item">
                {task.title}
              </li>
              <li className="list-group-item">
                {task.done}
              </li>
          </ul>
        ))}
      </div>
    )
  }
}
// const mapStateToProps = state => {
//   return { tasks: state.tasks }
// }

const ConnectedList = connect()(List);
export default ConnectedList;
// const mapStateToProps = state => {
//   return { tasks: state.tasks }
// }

// const ConnectList = ({ tasks }) => (
//     <ul className="list-group list-group-flush">
//     Tasks
//     {tasks.map(task => (
//       <li className="list-group-item" key={task.title}>
//         {task.title}
//       </li>
//     ))}
//   </ul>
// );

// const List = connect(mapStateToProps)(ConnectList);
// export default List;


