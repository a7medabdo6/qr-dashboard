import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  Link,
  Avatar
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import gradients from 'utils/gradients';
import { useParams } from 'react-router-dom';
import { useGetOneUserHook, useUpdateSingleUserHook } from 'hooks/apis/Auth';

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
  },
  icon: {
    backgroundImage: gradients.orange,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  avatar: {
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  }
}));

const EditForm = props => {
  let { id } = useParams();

  const { data, isLoading } = useGetOneUserHook(id);
  const { mutate: UpdateUserRequest, isError } = useUpdateSingleUserHook();
  const { className, ...rest } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [logo, setLogo] = useState(null);

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
        name: data?.data?.name,
        avatar: data?.data?.avatar,
        email: data?.data?.email,
        mobile: data?.data?.mobile,
        is_active: data?.data?.is_active
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

  const handleFileSelect = event => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    setLogo(event.target.files[0]);
    reader.onload = function() {
      setSelectedFile(reader.result);
    };
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    logo && formData.append('avatar', logo);
    formState.values.email && formData.append('email', formState.values.email);
    formState.values.password && formData.append('password', formState.values.password);
    formState.values.name && formData.append('name', formState.values.name);
    formState.values.mobile && formData.append('mobile', formState.values.mobile);
    formState.values.is_active && formData.append('is_active', formState.values.is_active);
    formData.append('id', data.data.id);
    console.log(formData);
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
  if (isLoading) {
    return <div>Loading ....</div>;
  }
  return (
    <div>
      <Typography gutterBottom variant="h3">
        Edit User
      </Typography>
      {formState.values.avatar ? (
        <Avatar
          alt="avatar"
          src={selectedFile || formState.values.avatar}
          className={classes.avatar}
        />
      ) : (
        <PersonAddIcon className={classes.icon} />
      )}
      <form
        {...rest}
        encType="multipart/form-data"
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit}>
        <div className={classes.fields}>
          <TextField
            type="file"
            fullWidth
            onChange={handleFileSelect}
            // value={formState.values.name || ''}
            variant="outlined"
          />
          <TextField
            error={hasError('name')}
            helperText={hasError('name') ? formState.errors.name[0] : null}
            label=" Name"
            fullWidth
            name="name"
            onChange={handleChange}
            value={formState.values.name || ''}
            variant="outlined"
          />
          <TextField
            error={hasError('email')}
            helperText={hasError('email') ? formState.errors.email[0] : null}
            label="Email"
            name="email"
            fullWidth
            onChange={handleChange}
            value={formState.values.email || ''}
            variant="outlined"
          />
          <TextField
            error={hasError('password')}
            fullWidth
            helperText={
              hasError('password') ? formState.errors.password[0] : null
            }
            label="password "
            name="password"
            type="password"
            onChange={handleChange}
            value={formState.values.password || ''}
            variant="outlined"
          />
          <TextField
            error={hasError('mobile')}
            fullWidth
            helperText={hasError('mobile') ? formState.errors.mobile[0] : null}
            label="mobile"
            name="mobile"
            onChange={handleChange}
            type="number"
            value={formState.values.mobile || ''}
            variant="outlined"
          />
          <div>
            <div className={classes.policy}>
              <Typography
                color="textSecondary"
                style={{ marginInline: '10px' }}
                variant="body1">
                Is Active?
              </Typography>
              <Checkbox
                checked={formState.values.is_active || false}
                className={classes.policyCheckbox}
                color="primary"
                name="is_active"
                onChange={handleChange}
              />
            </div>
            {hasError('policy') && (
              <FormHelperText error>
                {formState.errors.policy[0]}
              </FormHelperText>
            )}
          </div>
        </div>
        <Button
          className={classes.submitButton}
          color="secondary"
          disabled={!formState.isValid}
          size="large"
          type="submit"
          variant="contained">
          Edit User
        </Button>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  className: PropTypes.string
};

export default EditForm;
