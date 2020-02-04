import React from 'react'
import {Container, Grid, Button} from '@material-ui/core'
import Dialog from '../materialUi/dialog.jsx'


function addTodo(){
    return (
    <Grid>
        <Dialog btn_name={'Add Task'} action={'ADD'} title={'New Task'} taks={true}/>
    </Grid>
    )
}


export default addTodo