import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';

import { Header } from './components';
import EditForm from './components/EditForm';
const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3)
  }
}));

const TenantEdit = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Edit Tenant">
      <Header />
      <EditForm />
    </Page>
  );
};

export default TenantEdit;
