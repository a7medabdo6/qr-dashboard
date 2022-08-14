import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  Switch,
  TextField,
  Typography,
  colors
} from '@material-ui/core';

import SuccessSnackbar from '../SuccessSnackbar';

const useStyles = makeStyles(theme => ({
  root: {},
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const GeneralSettings = props => {
  const { profile, className, ...rest } = props;

  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [addMoreRows, setaddMoreRows] = useState([
    { english_Name: '', arabic_Name: '', price: '' }
  ]);
  const [addMoreRowsNutritional, setaddMoreRowsNutritional] = useState([
    { english_Name: '', arabic_Name: '', price: '' }
  ]);
  const [addMoreRowsIngredients, setaddMoreRowsIngredients] = useState([
    { english_Name: '', arabic_Name: '', price: '' }
  ]);

  const handleChange = event => {
    event.persist();
  };
  const handelMoreRows = () => {
    let numberofRows = addMoreRows.length;
    setaddMoreRows(prev => [
      ...prev,
      { english_Name: '', arabic_Name: '', price: '' }
    ]);
  };
  const handelMoreRowsIngredients = () => {
    let numberofRows = addMoreRowsIngredients.length;
    setaddMoreRowsIngredients(prev => [
      ...prev,
      { english_Name: '', arabic_Name: '', price: '' }
    ]);
  };
  const handelMoreRowsNutritional = () => {
    let numberofRows = addMoreRowsNutritional.length;
    setaddMoreRowsNutritional(prev => [
      ...prev,
      { english_Name: '', arabic_Name: '', price: '' }
    ]);
  };
  const handleSubmit = event => {
    event.preventDefault();
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const states = ['Alabama', 'New York', 'San Francisco'];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={handleSubmit}>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            {addMoreRows.map(item => {
              return (
                <>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Please specify the English name"
                      label="English Name "
                      name="firstName"
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Arabic Name"
                      name="lastName"
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="price "
                      name="price"
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography variant="h6">
                      Disable or Enable this modifier
                    </Typography>

                    <Switch
                      color="secondary"
                      edge="start"
                      name="isPublic"
                      onChange={handleChange}
                    />
                  </Grid>
                </>
              );
            })}

            <Grid item md={12} xs={12}>
              <Button
                onClick={handelMoreRows}
                className={classes.saveButton}
                variant="contained">
                Add More
              </Button>
            </Grid>
          </Grid>
          <Divider
            style={{
              padding: '5px',

              width: '100%',
              backgroundColor: 'rgb(57, 52, 134)',
              marginBlock: '10px'
            }}
          />
          <Grid container spacing={4}>
            {addMoreRowsNutritional.map(item => {
              return (
                <>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Please specify the English name"
                      label="English Name "
                      name="firstName"
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Arabic Name"
                      name="lastName"
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="price "
                      name="price"
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography variant="h6">
                      Disable or Enable this Nutritional Info
                    </Typography>

                    <Switch
                      color="secondary"
                      edge="start"
                      name="isPublic"
                      onChange={handleChange}
                    />
                  </Grid>
                </>
              );
            })}

            <Grid item md={12} xs={12}>
              <Button
                onClick={handelMoreRowsNutritional}
                className={classes.saveButton}
                variant="contained">
                Add More Nutritional Info
              </Button>
            </Grid>
          </Grid>
          <Divider
            style={{
              padding: '5px',

              width: '100%',
              backgroundColor: 'rgb(57, 52, 134)',
              marginBlock: '10px'
            }}
          />
          <Grid container spacing={4}>
            {addMoreRowsIngredients.map(item => {
              return (
                <>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Please specify the English name"
                      label="English Name "
                      name="firstName"
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Arabic Name"
                      name="lastName"
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="price "
                      name="price"
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography variant="h6">
                      Disable or Enable this Ingredients Info
                    </Typography>

                    <Switch
                      color="secondary"
                      edge="start"
                      name="isPublic"
                      onChange={handleChange}
                    />
                  </Grid>
                </>
              );
            })}

            <Grid item md={12} xs={12}>
              <Button
                onClick={handelMoreRowsIngredients}
                className={classes.saveButton}
                variant="contained">
                Add More Ingredients Info
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button className={classes.saveButton} variant="contained">
            create
          </Button>
        </CardActions>
      </form>
      <SuccessSnackbar onClose={handleSnackbarClose} open={openSnackbar} />
    </Card>
  );
};

GeneralSettings.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.object.isRequired
};

export default GeneralSettings;
