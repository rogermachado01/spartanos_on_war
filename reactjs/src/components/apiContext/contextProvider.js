import React, { Component } from "react";
import {Context } from "./context";


class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{action:'do that... 0', status: 'Done'}, {action:'do that... 1', status: 'Open'}, {action:'do that... 2', status: 'Done'}],
      filter: "Open"
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setStatusTask = this.setStatusTask.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }
  addTask = (action) => {
   
  };
  deleteTask = (ind) => {
  };

  setStatusTask = (ind, status) => {
  };

  setFilter = (filter) => {
  };


  
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          addTask: this.addTask,
          deleteTask: this.deleteTask,
          setStatusTask: this.setStatusTask,
          setFilter: this.setFilter,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;