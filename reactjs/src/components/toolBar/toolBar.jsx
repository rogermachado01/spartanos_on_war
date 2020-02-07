import React from 'react';
import {Button, Grid, Chip} from '@material-ui/core'
import {withContext} from '../apiContext/withContext.js'
import useStyle from '../../styles.jsx'

function ToolBar(props){
    const classes = useStyle()

    const handleFilter = (r) => {
        props.context.setFilter(r)
      };

    return(
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                <Grid item className={classes.toolBar}> My Tasks TO DO!</Grid>
            </Grid>
            
            
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                >
                <Grid item md={6}>Filter:</Grid>
                <Grid item md={6}>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        >
                    <Chip color={props.context.state.filter === "All" ? 'secondary': 'primary'} label={'All'} onClick={()=> handleFilter('All')}/>
                    <Chip color={props.context.state.filter === "Done" ? 'secondary': 'primary'} label={'Done'} onClick={()=> handleFilter('Done')}/>
                    <Chip color={props.context.state.filter === "Open" ? 'secondary': 'primary'} label={'Open'} onClick={()=> handleFilter('Open')} />
                    </Grid>
                </Grid>
              </Grid>
        </React.Fragment>
    )
}

export default withContext(ToolBar)
