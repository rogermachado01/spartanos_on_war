import React from 'react';
import {Container} from '@material-ui/core';
import AddTodo from '../components/addToDo/addToDo.jsx';
import ListToDo from '../components/listToDo/listToDo.jsx';
import ToolBar from '../components/toolBar/toolBar.jsx';

class Main extends React.Component{
    render(){
        return(
        <React.Fragment>
            <Container maxWidth={'md'}>
                <ToolBar/>
                <ListToDo/>
            </Container>
            <AddTodo/>
        </React.Fragment>
    )};
}

export default Main;