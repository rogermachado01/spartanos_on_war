import React from 'react';
import {List, ListItem, ListItemSecondaryAction, IconButton, ListItemText } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import Restore from '@material-ui/icons/Restore';
import Dialog from '../materialUi/dialog.jsx'
import {withContext} from '../apiContext/withContext.js'
function Item(props){

    const handleDelete = (key) => {
        console.log(key)
      };

    const handleStatus = (status) => {
        console.log(status)
      };

    return(
        <ListItem key={props.id}> 
            {/* <IconButton edge="start" aria-label="delete" onClick={()=>handleDelete(props.id)}>
            </IconButton> */}
            <Dialog icon={<Delete />} action={'DELETE'} title={'Are you sure about delete that task (can not be undone)?'}/>
            <ListItemText primary={props.action} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="status">
                    {props.status === 'Done'? <Restore/> : <Done />}
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem> 
    )
}

function listToDo(props){
    console.log(props)
    var todos =props.context.state.tasks
    var filter = props.context.state.filter
    return (
        <List>
            {todos.map((v, ind)=>{
                if (filter === v.status){
                    return <Item action ={v.action} status ={v.status} id={ind}/>
                }
            })}
        </List>
    )
}


export default withContext(listToDo)