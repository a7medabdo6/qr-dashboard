/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Checkbox, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import useRouter from 'utils/useRouter';
import { useCreateBranchHook, useGetAllGroupsHook } from 'hooks/apis/Branches';

const schema = {
  title: {
    presence: { allowEmpty: false, message: 'is required' }
    //email: true
  },
  title_ar: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  group: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  active: {
    // presence: { allowEmpty: true, message: 'is required' },
    // checked: true
  }
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
  const { mutate: CreateBranchRequest, isError } = useCreateBranchHook();
  const { allgroups } = useSelector(state => state.Groups);
  const { className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const { UserInfo } = useSelector(state => state.UserInfo);

  const [formState, setFormState] = useState({
    isValid: false,
    values: { active: false },
    touched: {},
    errors: {}
  });

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
    const result = await CreateBranchRequest(formState.values);
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

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
            <TextField
              fullWidth
              label="Select Group"
              name="group"
              error={hasError('group')}
              helperText={hasError('group') ? formState.errors.group[0] : null}
              onChange={handleChange}
              select
              // eslint-disable-next-line react/jsx-sort-props
              SelectProps={{ native: true }}
              value={formState.values.group || ''}
              variant="outlined">
              <option key={0} value={0}>
                Select Group
              </option>
              {allgroups?.map(option => (
                <option key={option.id} value={option.id}>
                  {option.title}
                </option>
              ))}
            </TextField>
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
        Create
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
