import React from 'react';
import {Button} from '@material-ui/core'
import {withContext} from '../apiContext/withContext.js'

function ToolBar(props){
    const [filter, setFilter] = React.useState('All')

    const handleFilter = (r) => {
        props.context.setFilter(r)
      };

    return(
        <React.Fragment>
            Filter tasks by: 
            <Button onClick={()=> handleFilter('All')}>All</Button>
            <Button onClick={()=> handleFilter('Done')}>Done</Button>
            <Button onClick={()=> handleFilter('Open')}>Open</Button>
        </React.Fragment>
    )
}

export default withContext(ToolBar)
