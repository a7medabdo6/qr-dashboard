/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Avatar } from '@material-ui/core';
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
  loginForm: {},
  fields: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    '& > *': {}
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
  avatar: {
    marginTop: theme.spacing(1.5),
    alignSelf: 'center',
    textAlign: '-webkit-center'
  },
  large: {
    [theme.breakpoints.up('xs')]: {
      height: `275px`,
      width: `275px`
    },
    [theme.breakpoints.down('xs')]: {
      height: `150px`,
      width: `150px`
    }
  },
  LargeView: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  SmallView: {
    [theme.breakpoints.up('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex'
    }
  }
}));

const EditForm = props => {
  let { id } = useParams();

  const { data, isLoading } = useGetOneTenantHook(id);
  const { mutate: UpdateTenantRequest, isError } = useActivateTenantHook();
  const { className, ...rest } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [logo, setLogo] = useState(null);

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
        busisness_name: data?.data?.busisness_name,
        client_name_en: data?.data?.client_name_en,
        client_name_ar: data?.data?.client_name_ar,
        subscribedfrom: data?.data?.subscribedfrom,
        subscribedTo: data?.data?.subscribedTo,
        max_branches: data?.data?.max_branches,
        max_groups: data?.data?.max_groups,
        logo: data?.data?.logo
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
    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      setLogo(event.target.files[0]);
      reader.onload = function() {
        setSelectedFile(reader.result);
      };
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('logo', logo);
    formData.append('busisness_name', formState.values.busisness_name);
    formData.append('client_name_ar', formState.values.client_name_ar);
    formData.append('client_name_en', formState.values.client_name_en);
    formData.append('max_branches', formState.values.max_branches);
    formData.append('max_groups', formState.values.max_groups);
    formData.append('subscribedTo', formState.values.subscribedTo);
    formData.append('subscribedfrom', formState.values.subscribedfrom);
    formData.append('id', data.data.id);
    console.log(formData);
    const result = await UpdateTenantRequest(formData);
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
      <Grid container direction="row" className={classes.LargeView}>
        <Grid container item xs={6} spacing={3} direction="column">
          <Grid item>
            <TextField
              error={hasError('business_name')}
              fullWidth
              helperText={
                hasError('business_name')
                  ? formState.errors.business_name[0]
                  : null
              }
              label="Business Name"
              name="business_name"
              onChange={handleChange}
              value={formState.values.busisness_name || ''}
              variant="outlined"
            />
          </Grid>
          <Grid item>
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
              value={formState.values.client_name_en || ''}
              variant="outlined"
            />
          </Grid>
          <Grid item>
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
              value={formState.values.client_name_ar || ''}
              variant="outlined"
            />
          </Grid>
          <Grid item>
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
              value={formState.values.subscribedfrom || ''}
              variant="outlined"
              id="date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item>
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
              value={formState.values.subscribedTo || ''}
              variant="outlined"
              id="date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item>
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
              value={formState.values.max_groups || ''}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={6}
          spacing={3}
          direction="column"
          className={classes.fields}>
          <Grid item className={classes.avatar}>
            <Avatar
              alt="avatar"
              src={selectedFile || formState.values.logo}
              className={classes.large}
            />
          </Grid>
          <Grid item>
            <TextField
              type="file"
              fullWidth
              onChange={handleFileSelect}
              variant="outlined"
            />
          </Grid>
          <Grid item>
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
              value={formState.values.max_branches || ''}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        spacing={3}
        className={classes.SmallView}>
        <Grid item className={classes.avatar}>
          <Avatar
            alt="avatar"
            src={selectedFile || formState.values.logo}
            className={classes.large}
          />
        </Grid>
        <Grid item>
          <TextField
            type="file"
            fullWidth
            onChange={handleFileSelect}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            error={hasError('business_name')}
            fullWidth
            helperText={
              hasError('business_name')
                ? formState.errors.business_name[0]
                : null
            }
            label="Business Name"
            name="business_name"
            onChange={handleChange}
            value={formState.values.busisness_name || ''}
            variant="outlined"
          />
        </Grid>
        <Grid item>
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
            value={formState.values.client_name_en || ''}
            variant="outlined"
          />
        </Grid>
        <Grid item>
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
            value={formState.values.client_name_ar || ''}
            variant="outlined"
          />
        </Grid>
        <Grid item>
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
            value={formState.values.subscribedfrom || ''}
            variant="outlined"
            id="date"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            error={hasError('subscribedTo')}
            fullWidth
            helperText={
              hasError('subscribedTo') ? formState.errors.subscribedTo[0] : null
            }
            label=" subscribedTo"
            name="subscribedTo"
            onChange={handleChange}
            value={formState.values.subscribedTo || ''}
            variant="outlined"
            id="date"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item>
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
            value={formState.values.max_groups || ''}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            error={hasError('max_branches')}
            fullWidth
            helperText={
              hasError('max_branches') ? formState.errors.max_branches[0] : null
            }
            label=" max branches"
            name="max_branches"
            type="number"
            onChange={handleChange}
            value={formState.values.max_branches || ''}
            variant="outlined"
          />
        </Grid>
      </Grid>
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

EditForm.propTypes = {
  className: PropTypes.string
};

export default EditForm;
