import React from 'react';
import {Container, Grid} from '@material-ui/core';
import AddTodo from '../components/addToDo/addToDo.jsx';
import ListToDo from '../components/listToDo/listToDo.jsx';
import ToolBar from '../components/toolBar/toolBar.jsx';

class Main extends React.Component{
    render(){
        return(
        <Container>
            <ToolBar/>
            <AddTodo/>
            <ListToDo/>
        </Container>
    )};
}

export default Main;