import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {},
  posts: {
    marginTop: theme.spacing(2)
  },
  post: {
    marginBottom: theme.spacing(2)
  },
  heading: {
    color: 'gray',
    textTransform: 'Uppercase',
    letterSpacing: theme.spacing(0.2)
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  row: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  label: {
    color: '#555'
  },
  value: {
    fontWeight: '400'
  }
}));

const About = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const userData = useSelector(state => state.UserInfo.user);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.posts}>
        <Typography variant="h6" className={classes.heading}>
          Basic Information
        </Typography>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={4} className={classes.row}>
            <Typography variant="h4" className={classes.label}>
              Name:
            </Typography>
          </Grid>
          <Grid item xs={8} className={classes.row}>
            <Typography variant="h4" className={classes.value}>
              {userData?.name || 'no name'}
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.row}>
            <Typography variant="h4" className={classes.label}>
              Mobile:
            </Typography>
          </Grid>
          <Grid item xs={8} className={classes.row}>
            <Typography variant="h4" className={classes.value}>
              {userData?.mobile || 'no mobile'}
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.row}>
            <Typography variant="h4" className={classes.label}>
              Email:
            </Typography>
          </Grid>
          <Grid item xs={8} className={classes.row}>
            <Typography variant="h4" className={classes.value}>
              {userData?.email || 'no email'}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string
};

export default About;
