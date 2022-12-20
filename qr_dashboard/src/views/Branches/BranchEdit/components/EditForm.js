/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Typography, Checkbox } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import useRouter from 'utils/useRouter';
import {
  useGetOneBranchHook,
  useActivateBranchHook
} from 'hooks/apis/Branches';

const schema = {
  // email: {
  //   presence: { allowEmpty: false, message: 'is required' }
  //   //email: true
  // },
  // password: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  // busisness_name: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  // // client_name: {
  // //   presence: { allowEmpty: false, message: 'is required' }
  // // },
  // client_name_en: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  // client_name_ar: {
  //   // email: true,
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  // logo: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  // schema_name: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  // note: {
  //   presence: { allowEmpty: true, message: 'is required' }
  // },
  // is_active: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  // subscribedfrom: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  // subscribedTo: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  // max_branches: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  // max_groups: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // }
  // max_products: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // }
};

const useStyles = makeStyles(theme => ({
  root: {},
  loginForm: {
    marginTop: theme.spacing(3)
  },
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

const LoginForm = props => {
  let { id } = useParams();

  const { data, isLoading } = useGetOneBranchHook(id);
  console.log(data, 'iid');
  const { mutate: UpdateGroupRequest, isError } = useActivateBranchHook();
  const { className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    setFormState(formState => ({
      ...formState,
      values: {
        title: data?.data?.title,
        title_ar: data?.data?.title_ar,
        active: data?.data?.active
      }
    }));
  }, [data]);
  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    console.log(formState.values);
    const result = await UpdateGroupRequest({
      ...formState.values,
      id: data.data.id
    });
    if (!isError) {
      console.log('done');
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;
  if (isLoading) {
    return <div>Loading ....</div>;
  }
  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit}>
      <div className={classes.fields}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              error={hasError('title')}
              fullWidth
              helperText={hasError('title') ? formState.errors.title[0] : null}
              label="title (en)"
              name="title"
              onChange={handleChange}
              value={formState.values.title || ''}
              variant="outlined"
            />
          </Grid>{' '}
          <Grid item xs={6}>
            <TextField
              error={hasError('title_ar')}
              fullWidth
              helperText={
                hasError('title_ar') ? formState.errors.title_ar[0] : null
              }
              label="title (ar)"
              name="title_ar"
              onChange={handleChange}
              value={formState.values.title_ar || ''}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              color="textSecondary"
              style={{ marginInline: '10px' }}
              variant="body1">
              Is Active?
            </Typography>
            <Checkbox
              checked={formState.values.active || false}
              className={classes.policyCheckbox}
              color="primary"
              name="active"
              type="checkbox"
              onChange={handleChange}
            />
          </Grid>{' '}
        </Grid>
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        disabled={!formState.isValid}
        size="large"
        type="submit"
        variant="contained">
        Update
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
