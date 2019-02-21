import React, { Component } from 'react';
import './App.css';

// class TaskBody extends Component {
//   constructor(props){
//     super(props);
//   }
//
// }


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {id: 1, task: "Learn React", description: "states, props, jsx, whatever", isComplete: false},
        {id: 2, task: "climb a mountain", description: "mount killimanjaro", isComplete: false},
        {id: 3, task: "white water raft the colorado river", description: "very wet", isComplete: false}
      ]
    }
  }

  handleClick(id, e) {
    let t = [...this.state.tasks];
    for (let i in t) {
      if (t[i].id === id){
        t[i].isComplete = !t[i].isComplete;
      }
    }
    this.setState({tasks: t});
    console.log('Somebody clicked a button');
  }

  deleteTask(id, e){
    let t = [...this.state.tasks];
    for (let i in t){
      if(t[i].id === id){
        t.splice(i, 1);
      }
    }
    this.setState({tasks: t});
  }

  render() {
    return (
      <div>
        <h1>React Tasks</h1>
        <div className="table-div">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.tasks.map((task) =>
                  <tr key={task.id}>
                    <td>{task.task}</td>
                    <td>{task.description}</td>
                    <td>{
                      (task.isComplete) ?
                        <span>Complete</span> : <span>Incomplete</span>
                    }</td>
                    <td>
                      <button onClick={this.handleClick.bind(this, task.id)}>
                        Complete!
                      </button>
                      <button onClick={this.deleteTask.bind(this, task.id)}>
                        Delete!
                      </button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
