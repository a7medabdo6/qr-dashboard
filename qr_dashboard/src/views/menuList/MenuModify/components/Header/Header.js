import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5)
  },
  btnWhite: {
    backgroundColor: '#fff',
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1)
    }
  }
}));

const Header = props => {
  const { className, ...rest } = props;
  let { id } = useParams();
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"></Typography>
          <Typography component="h1" variant="h3">
            Modify Menu
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="default"
            className={classes.btnWhite}
            // component={RouterLink}
            // to="/categories/create"
            variant="outlined">
            Add New Category
          </Button>
          <Button
            color="default"
            className={classes.btnWhite}
            // component={RouterLink}
            // to="/categories/create"
            variant="outlined">
            Add Existing Category
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
