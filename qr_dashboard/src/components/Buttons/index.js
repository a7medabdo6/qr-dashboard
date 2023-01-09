import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

export default function CircularIndeterminate({ formState, title, isLoading }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.submitButton}
      color="secondary"
      disabled={!formState.isValid}
      size="large"
      type="submit"
      variant="contained">
      {/* {console.log(isLoading, 'isLoading')} */}
      {isLoading ? <CircularProgress color="secondary" /> : title}
    </Button>
  );
}
