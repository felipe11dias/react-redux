

import React, { Component } from 'react';
import FormTask from './FormTask'
import List from './List';

   class Tasks extends Component {
     constructor(props) {
       super(props);
       this.state = {
         tasks: []
       };
       this.loadTasks = this.loadTasks.bind(this);
     }

     async loadTasks() {
       let response = await fetch(`http://localhost:3001/tasks`);
       const tasks = await response.json();
       this.setState({ tasks: tasks });
     }

     componentDidMount() {
       this.loadTasks();
     }

     render() {
       return (
         <div>
            <div>
                <List loadTasks={this.loadTasks} tasks={this.state.tasks} />
            </div>
            <div>
                <FormTask loadTasks={this.loadTasks} />
            </div>
         </div>
       );
     }
   }

   export default Tasks;


   

