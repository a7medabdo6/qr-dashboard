import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { Page } from 'components';

import { Header, General } from './components';
const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3)
  },
  aboutAuthor: {
    marginTop: theme.spacing(3)
  },
  aboutProject: {
    marginTop: theme.spacing(3)
  },
  projectCover: {
    marginTop: theme.spacing(3)
  },
  projectDetails: {
    marginTop: theme.spacing(3)
  },
  preferences: {
    marginTop: theme.spacing(3)
  },
  actions: {
    marginTop: theme.spacing(3)
  }
}));

const ProjectCreate = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    English_Name: '',
    Arabic_Name: '',
    Category: '',
    English_Description: '',
    Arabic_Description: '',

    English_Note: '',
    Arabic_Note: '',
    isPublic: '',
    canHire: ''
  });
  return (
    <Page className={classes.root} title="Product Createe">
      <Header />

      <General/>
      <div className={classes.actions}></div>
    </Page>
  );
};

export default ProjectCreate;
