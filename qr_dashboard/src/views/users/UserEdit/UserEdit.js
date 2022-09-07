import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent } from '@material-ui/core';
import { Page } from 'components';
import EditForm from './components/EditForm';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  registerForm: {
    marginTop: theme.spacing(3)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  }
}));

const UserEdit = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="User Edit">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <EditForm className={classes.registerForm} />
        </CardContent>
      </Card>
    </Page>
  );
};

export default UserEdit;
