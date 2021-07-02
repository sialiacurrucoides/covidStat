
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

const CircularSpinner: React.FC<{size?:number, width?:string}> = ({size, width = "16px"}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{width: width}}>
      <CircularProgress color="secondary" size={size} />
    </div>
  );
}

export default CircularSpinner;