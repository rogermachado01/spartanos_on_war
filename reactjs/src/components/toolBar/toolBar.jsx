import React from 'react';
import {Button} from '@material-ui/core'

function ToolBar(props){
    const [filter, setFilter] = React.useState('Open')

    const handleFilter = () => {
        var r = filter === 'Open' ? 'Done': 'Open'
        setFilter(r);
      };

    return(
        <React.Fragment>
            rogermachado filter tasks by: <Button onClick={handleFilter}>{filter}</Button>
        </React.Fragment>
    )
}

export default ToolBar
