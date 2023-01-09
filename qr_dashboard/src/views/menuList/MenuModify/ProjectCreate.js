import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';

import CreateMenu from './components/CreateForm';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3)
  }
}));

const ProjectCreate = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Create Menu">
      {/* <Header /> */}
      <CreateMenu />
    </Page>
  );
};

export default ProjectCreate;
