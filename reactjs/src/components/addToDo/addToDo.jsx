import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import Dialog from '../materialUi/dialog.jsx'
import {withContext} from '../apiContext/withContext.js'

function addTodo(props){
    const addTodo = (task) =>{
        props.context.addTask(task)
    }
    return (
        <Grid>
            <Dialog btn_name={'Add Task'} action={'ADD'} title={'New Task'} task={true} callback={addTodo}/>
        </Grid>
    )
}


export default withContext(addTodo)