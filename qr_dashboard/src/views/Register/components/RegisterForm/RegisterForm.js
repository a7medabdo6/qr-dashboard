import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
import Select from 'components/MultiSelect/index';
import useRouter from 'utils/useRouter';
import { useCreateUserHook } from 'hooks/apis/Auth';
import { useSelector } from 'react-redux';
import { useGetAllBranchesHook } from 'hooks/apis/Branches';
const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },

  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },
  // role: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  mobile: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  // branches: {
  //   presence: { allowEmpty: false, message: 'is required' }
  // },
  is_active: {
    presence: { allowEmpty: false, message: 'is required' },
    checked: true
  }
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

const RegisterForm = props => {
  const { className, ...rest } = props;
  const { mutate: CreateUserApi } = useCreateUserHook();
  const classes = useStyles();
  const { history } = useRouter();
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedBranches, setSelectedBranches] = React.useState([]);
  const [logo, setLogo] = useState(null);
  const { isLoading, data } = useGetAllBranchesHook();
  const user = JSON.parse(localStorage.getItem('user'));

  const { allbranches } = useSelector(state => state.Branches);

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  const handleFileSelect = event => {
    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      setLogo(event.target.files[0]);
      reader.onload = function() {
        setSelectedFile(reader.result);
      };
    }
  };
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

  console.log(selectedBranches, 'selectedBranches');
  const handleSubmit = async event => {
    event.preventDefault();
    var arrayofBranches = [];
    for (let index = 0; index < selectedBranches.length; index++) {
      arrayofBranches.push(parseInt(selectedBranches[index].id));
    }
    const formData = new FormData();
    formData.append('avatar', logo);
    formData.append('email', formState.values.email);
    formData.append('name', formState.values.name);
    formData.append('password', formState.values.password);
    formData.append('branches', [1, 2]);
    formData.append('role', user.role);
    formData.append('mobile', formState.values.mobile);
    CreateUserApi(formData);
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div>
      {logo ? (
        <Avatar alt="avatar" src={selectedFile} className={classes.avatar} />
      ) : (
        <PersonAddIcon className={classes.icon} />
      )}
      <Typography gutterBottom variant="h3">
        Create User
      </Typography>
      <Typography variant="subtitle2">
        Create User on the internal platform
      </Typography>
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
          {user.role == 2 && (
            <div
              style={{
                border: '1px solid #00000029',
                borderRadius: '5px',
                margin: ' 0px 8px',
                padding: '5px'
              }}>
              <Select
                data={allbranches}
                selectedBranches={selectedBranches}
                setSelectedBranches={setSelectedBranches}
              />
            </div>
          )}

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
          Create account
        </Button>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  className: PropTypes.string
};

export default RegisterForm;
