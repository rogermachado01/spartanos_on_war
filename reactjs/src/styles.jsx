import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolBar: {
        margin: theme.spacing(2),
    },
    addTaskBtn:{
        position:"absolute",
        bottom:"50px",
        right:"50px"
    }
  }));

  export default useStyles;