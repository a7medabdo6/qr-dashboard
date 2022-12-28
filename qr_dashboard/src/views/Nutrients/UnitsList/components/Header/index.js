import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid
        alignItems="flex-end"
        container
        justifyContent="space-between"
        spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h1" variant="h3">
            Nutrients Units
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            component={RouterLink}
            to="/nutrients/units/create"
            variant="contained">
            Add Unit
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
