import React from 'react';
import { Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  headerRoot: {
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

function Header({
  handleOpenModal,
  handleAddExistingCategoryModal,
  setOpenUpdateTimetablesModal
}) {
  const classes = useStyles();

  return (
    <div className={classes.headerRoot}>
      <Grid
        alignItems="flex-end"
        container
        justifyContent="space-between"
        spacing={3}>
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
            onClick={handleOpenModal}
            variant="outlined">
            Add New Category
          </Button>
          <Button
            color="default"
            className={classes.btnWhite}
            onClick={handleAddExistingCategoryModal}
            variant="outlined">
            Add Existing Category
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
