import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { TextField, Checkbox, Typography, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LoaderButton from 'components/Buttons';
import { useParams } from 'react-router-dom';
import {
  useCreateNutrientHook,
  useGetOneNutrientHook,
  useUpdateNutrientHook
} from 'hooks/apis/Nutrients/Types';

const schema = {
  name_en: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  name_ar: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  color: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  active: {
    // presence: { allowEmpty: true, message: 'is required' },
    // checked: true
  }
};

const useStyles = makeStyles(theme => ({
  root: {},
  label: {
    marginTop: theme.spacing(-0.5),
    marginLeft: theme.spacing(1.5)
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
    marginTop: theme.spacing(4),
    width: '100%'
  }
}));

const CreateFrom = props => {
  let { id } = useParams();
  const { data, isLoading: isLoadingData } = useGetOneNutrientHook(id);
  const { mutate: CreateRequest, isLoading } = useCreateNutrientHook();
  const {
    mutate: UpdateRequest,
    isLoading: isLoadingUpdate
  } = useUpdateNutrientHook();

  const { className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: { active: false, branch: [] },
    touched: {},
    errors: {}
  });

  useEffect(() => {
    if (data?.data?.id !== formState?.values?.id) {
      setFormState(formState => ({
        ...formState,
        values: {
          ...data?.data
        }
      }));
    }
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
    if (id) {
      UpdateRequest(formState.values);
    } else {
      CreateRequest(formState.values);
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  if (isLoadingData) {
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
              error={hasError('name_en')}
              fullWidth
              helperText={
                hasError('name_en') ? formState.errors.name_en[0] : null
              }
              label="Name (en)"
              name="name_en"
              onChange={handleChange}
              value={formState.values.name_en || ''}
              variant="outlined"
            />
          </Grid>{' '}
          <Grid item xs={6}>
            <TextField
              error={hasError('name_ar')}
              fullWidth
              helperText={
                hasError('name_ar') ? formState.errors.name_ar[0] : null
              }
              label="Name (ar)"
              name="name_ar"
              onChange={handleChange}
              value={formState.values.name_ar || ''}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                error={hasError('color')}
                fullWidth
                helperText={
                  hasError('color') ? formState.errors.color[0] : null
                }
                label="Color"
                name="color"
                onChange={handleChange}
                value={formState.values.color || ''}
                variant="outlined"></TextField>
              <Box
                bgcolor={formState.values.color}
                width={40}
                height={40}
                className="m-2"
              />
            </Box>
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
      <LoaderButton
        className={classes.submitButton}
        formState={formState}
        isLoading={isLoading || isLoadingUpdate}
        title={id ? 'Update' : 'Create'}
      />
    </form>
  );
};

CreateFrom.propTypes = {
  className: PropTypes.string
};

export default CreateFrom;
