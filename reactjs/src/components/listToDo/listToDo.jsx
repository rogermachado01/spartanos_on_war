import React from 'react';
import {List, ListItem, ListItemSecondaryAction, IconButton, ListItemText } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import Restore from '@material-ui/icons/Restore';
import Dialog from '../materialUi/dialog.jsx'
import {withContext} from '../apiContext/withContext.js'

function Item(props){

    const handleDelete = (key) => {
        props.context.deleteTask(key)
      };

    const handleStatus = (status, ind) => {
        props.context.setStatusTask(status, ind)
      };

    return(
        <ListItem key={props.ind}> 
            <Dialog ind={props.ind} icon={<Delete />} action={'DELETE'} title={'Are you sure about delete that task? (Can not be undone)'} callback={handleDelete}/>
            <ListItemText primary={props.action} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="status" onClick={()=>handleStatus(props.status, props.ind)}>
                    {props.status === 'Done'? <Restore/> : <Done />}
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem> 
    )
}

function listToDo(props){
    var todos =props.context.state.tasks
    var filter = props.context.state.filter
    return (
        <List>
            {todos.map((v, ind)=>{
                if (filter === v.status){
                    return <Item {...props} action ={v.action} status ={v.status} ind={ind}/>
                }else if(filter === 'All'){
                    return <Item {...props} action ={v.action} status ={v.status} ind={ind}/>
                }
            })}
        </List>
    )
}


export default withContext(listToDo)