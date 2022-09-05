/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import useRouter from 'utils/useRouter';
import {
  useCreateTenantHook,
  useGetOneTenantHook,
  useActivateTenantHook
} from 'hooks/apis/Tenants';

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

  const { data, isLoading } = useGetOneTenantHook(id);
  console.log(data, 'iid');
  const { mutate: UpdateTenantRequest, isError } = useActivateTenantHook();
  const { className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const { UserInfo } = useSelector(state => state.UserInfo);

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
        email: data?.data?.email,
        busisness_name: data?.data?.busisness_name,
        password: data?.data?.password,
        client_name_en: data?.data?.client_name_en,
        client_name_ar: data?.data?.client_name_ar,
        subscribedfrom: data?.data?.subscribedfrom,
        subscribedTo: data?.data?.subscribedTo,
        max_branches: data?.data?.max_branches,
        max_groups: data?.data?.max_groups
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
    const result = await UpdateTenantRequest({
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
              error={hasError('busisness_name')}
              fullWidth
              helperText={
                hasError('busisness_name')
                  ? formState.errors.busisness_name[0]
                  : null
              }
              label="busisness Name"
              name="busisness_name"
              onChange={handleChange}
              value={formState.values.busisness_name}
              variant="outlined"
            />
          </Grid>{' '}
          {/* <Grid item xs={6}>
            <TextField
              error={hasError('email')}
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              label="Email address"
              name="email"
              onChange={handleChange}
              value={formState.values.email}
              variant="outlined"
            />
          </Grid> */}
          {/* <Grid item xs={6}>
            <TextField
              error={hasError('password')}
              fullWidth
              helperText={
                hasError('password') ? formState.errors.password[0] : null
              }
              label=" password"
              name="password"
              onChange={handleChange}
              value={formState.values.password}
              variant="outlined"
            />
          </Grid>{' '} */}
          <Grid item xs={6}>
            <TextField
              error={hasError('client_name_en')}
              fullWidth
              helperText={
                hasError('client_name_en')
                  ? formState.errors.client_name_en[0]
                  : null
              }
              label=" client_name_en"
              name="client_name_en"
              onChange={handleChange}
              value={formState.values.client_name_en}
              variant="outlined"
            />
          </Grid>{' '}
          <Grid item xs={6}>
            <TextField
              error={hasError('client_name_ar')}
              fullWidth
              helperText={
                hasError('client_name_ar')
                  ? formState.errors.client_name_ar[0]
                  : null
              }
              label=" client_name_ar"
              name="client_name_ar"
              onChange={handleChange}
              value={formState.values.client_name_ar}
              variant="outlined"
            />
          </Grid>{' '}
          <Grid item xs={6}>
            <TextField
              error={hasError('subscribedfrom')}
              fullWidth
              helperText={
                hasError('subscribedfrom')
                  ? formState.errors.subscribedfrom[0]
                  : null
              }
              label=" subscribedfrom"
              name="subscribedfrom"
              onChange={handleChange}
              value={formState.values.subscribedfrom}
              variant="outlined"
              id="date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>{' '}
          <Grid item xs={6}>
            <TextField
              error={hasError('subscribedTo')}
              fullWidth
              helperText={
                hasError('subscribedTo')
                  ? formState.errors.subscribedTo[0]
                  : null
              }
              label=" subscribedTo"
              name="subscribedTo"
              onChange={handleChange}
              value={formState.values.subscribedTo}
              variant="outlined"
              id="date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>{' '}
          <Grid item xs={6}>
            <TextField
              error={hasError('max_branches')}
              fullWidth
              helperText={
                hasError('max_branches')
                  ? formState.errors.max_branches[0]
                  : null
              }
              label=" max branches"
              name="max_branches"
              type="number"
              onChange={handleChange}
              value={formState.values.max_branches}
              variant="outlined"
            />
          </Grid>{' '}
          <Grid item xs={6}>
            <TextField
              error={hasError('max_groups')}
              fullWidth
              helperText={
                hasError('max_groups') ? formState.errors.max_groups[0] : null
              }
              label=" max groups"
              name="max_groups"
              type="number"
              onChange={handleChange}
              value={formState.values.max_groups}
              variant="outlined"
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
