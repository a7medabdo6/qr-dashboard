/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  TextField,
  Typography,
  Checkbox,
  Box,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import useRouter from 'utils/useRouter';
import {
  useGetOneBranchHook,
  useActivateBranchHook
} from 'hooks/apis/Branches';
import TabPanel from 'components/TabPanel';

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

const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 80;
const MenuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  getContentAnchorEl: null,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 40
    }
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
  let { id } = useParams();

  const { data, isLoading } = useGetOneBranchHook(id);
  // console.log(data, 'iid');
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
        ...data?.data
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

    // console.log(formState.values);
    const result = await UpdateGroupRequest({
      ...formState.values,
      id: data.data.id
    });
    if (!isError) {
      console.log('done');
    }
  };

  const [tab, setTab] = useState(0);
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const Themes = [
    { value: 'theme-blue', label: 'Blue' },
    { value: 'theme-indigo', label: 'Indigo' },
    { value: 'theme-purple', label: 'Purple' },
    { value: 'theme-pink', label: 'Pink' },
    { value: 'theme-red', label: 'Red' },
    { value: 'theme-orange', label: 'Orange' },
    { value: 'theme-yellow', label: 'Yellow' },
    { value: 'theme-green', label: 'Green' },
    { value: 'theme-teal', label: 'Teal' },
    { value: 'theme-cyan', label: 'Cyan' }
  ];

  const Modes = [
    { value: 'light-mode', label: 'Light' },
    { value: 'dark-mode', label: 'Dark' }
  ];

  const backgrounds = [
    { value: 'bg-1', label: 'Geometric' },
    { value: 'bg-2', label: 'Modern' },
    { value: 'bg-3', label: 'Bubble' }
  ];

  const menus = [
    { value: 'overlay', label: 'Overlay' },
    { value: 'pushcontent', label: 'Push Content' },
    { value: 'fullmenu', label: 'Full Menu' }
  ];

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
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            aria-label="Branch Tabs"
            variant="scrollable">
            <Tab label={'Basic Info'} />
            <Tab label={'Styles'} />
          </Tabs>
        </Box>

        <TabPanel
          className="order-modal-details-tab-panel"
          value={tab}
          index={0}>
          <div className={classes.fields}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  error={hasError('title')}
                  fullWidth
                  helperText={
                    hasError('title') ? formState.errors.title[0] : null
                  }
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
                  error={hasError('slug_name')}
                  fullWidth
                  helperText={
                    hasError('slug_name') ? formState.errors.slug_name[0] : null
                  }
                  label="Slug Name"
                  name="slug_name"
                  onChange={handleChange}
                  value={formState.values.slug_name || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={hasError('qr_code')}
                  fullWidth
                  helperText={
                    hasError('qr_code') ? formState.errors.qr_code[0] : null
                  }
                  label="Url"
                  name="qr_code"
                  // onChange={handleChange}
                  disabled
                  value={formState.values.qr_code || ''}
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
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <div className={classes.fields}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Theme Color</InputLabel>
                  <Select
                    name="color_mode"
                    value={formState.values['color_mode']}
                    onChange={handleChange}
                    MenuProps={MenuProps}>
                    {Themes.map((theme, index) => (
                      <MenuItem key={index} value={theme.value}>
                        {theme.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Theme Mode</InputLabel>
                  <Select
                    name="theme_mode"
                    value={formState.values['theme_mode']}
                    onChange={handleChange}
                    MenuProps={MenuProps}>
                    {Modes.map((theme, index) => (
                      <MenuItem key={index} value={theme.value}>
                        {theme.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Background Image</InputLabel>
                  <Select
                    name="bgImage_mode"
                    value={formState.values['bgImage_mode']}
                    onChange={handleChange}
                    MenuProps={MenuProps}>
                    {backgrounds.map((theme, index) => (
                      <MenuItem key={index} value={theme.value}>
                        {theme.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Menu Style</InputLabel>
                  <Select
                    name="menu_mode"
                    value={formState.values['menu_mode']}
                    onChange={handleChange}
                    MenuProps={MenuProps}>
                    {menus.map((theme, index) => (
                      <MenuItem key={index} value={theme.value}>
                        {theme.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </TabPanel>
      </Box>
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
