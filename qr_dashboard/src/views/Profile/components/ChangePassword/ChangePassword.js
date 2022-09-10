import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';
import gradients from 'utils/gradients';
import { useChangePasswordHook } from 'hooks/apis/Auth';

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
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  policy: {
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

const ChangePassword = props => {
  const { mutate: UpdateUserRequest, isError } = useChangePasswordHook();
  const { className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
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
    const formData = new FormData();
    formData.append('current_password', formState.values.currentPassword);
    formData.append('new_password', formState.values.NewPassword);
    // console.log(formData);
    const result = await UpdateUserRequest(formData);
    if (result) {
      setFormState(formState => ({
        ...formState,
        values: {
          ...result
        }
      }));
    }
    if (!isError) {
      console.log('done');
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;
  return (
    <div>
      <form
        {...rest}
        encType="multipart/form-data"
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit}>
        <div className={classes.fields}>
          <TextField
            error={hasError('currentPassword')}
            helperText={
              hasError('currentPassword')
                ? formState.errors.currentPassword[0]
                : null
            }
            label="Current Password"
            name="currentPassword"
            type="password"
            autoComplete="current-password"
            fullWidth
            onChange={handleChange}
            value={formState.values.currentPassword || ''}
            variant="outlined"
          />
          <TextField
            error={hasError('NewPassword')}
            helperText={
              hasError('NewPassword') ? formState.errors.NewPassword[0] : null
            }
            label="New Password"
            name="NewPassword"
            type="password"
            autoComplete="new-password"
            fullWidth
            onChange={handleChange}
            value={formState.values.NewPassword || ''}
            variant="outlined"
          />
        </div>
        <Button
          className={classes.submitButton}
          color="secondary"
          disabled={!formState.isValid}
          size="large"
          type="submit"
          variant="contained">
          Change
        </Button>
      </form>
    </div>
  );
};

ChangePassword.propTypes = {
  className: PropTypes.string
};

export default ChangePassword;
