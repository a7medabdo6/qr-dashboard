import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  TextField,
  Checkbox,
  Typography,
  Select,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
  InputLabel,
  FormControl
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LoaderButton from 'components/Buttons';
import { useParams } from 'react-router-dom';
import {
  useCreateCategoryHook,
  useGetOneCategoryHook,
  useUpdateCategoryHook
} from 'hooks/apis/Category';

import { useGetAllBranchesHook } from 'hooks/apis/Branches';

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

const schema = {
  title: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  title_ar: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  branch: {
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
  multiSelectMenu: {
    // marginBottom: theme.spacing(10)
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
  const { data, isLoading: isLoadingData } = useGetOneCategoryHook(id);
  const theme = useTheme();
  const { mutate: CreateCategoryRequest, isLoading } = useCreateCategoryHook();
  const {
    mutate: UpdateCategoryRequest,
    isLoading: isLoadingUpdate
  } = useUpdateCategoryHook();

  const [search, setsearch] = useState('');
  const [filters, setfilters] = useState({
    create_at_after: '',
    create_at_before: '',
    active: ''
  });
  useGetAllBranchesHook(search, filters);
  const { allbranches } = useSelector(state => state.Branches);

  const { className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: { active: false, branch: [] },
    touched: {},
    errors: {}
  });

  useEffect(() => {
    setFormState(formState => ({
      ...formState,
      values: {
        title: data?.data?.title,
        title_ar: data?.data?.title_ar,
        branch: allbranches?.filter(branch =>
          data?.data?.branch?.includes(branch.id)
        ),
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

  const handleChangeMulti = event => {
    const {
      target: { value }
    } = event;
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          (event.target.type === typeof value) === 'string'
            ? value.split(',')
            : value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const branch = formState?.values?.branch.map(branch => branch.id);
    if (id) {
      UpdateCategoryRequest({ ...formState.values, branch, id });
    } else {
      CreateCategoryRequest({ ...formState.values, branch });
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
            <FormControl fullWidth>
              <InputLabel id="multiple-branch-label" className={classes.label}>
                {`Branch(es)`}
              </InputLabel>
              <Select
                name="branch"
                labelId="multiple-branch-label"
                id="branch-label"
                multiple
                value={formState.values.branch || []}
                onChange={handleChangeMulti}
                input={<OutlinedInput id="branch-label" label="Branch(es)" />}
                renderValue={selected => (
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 0.5
                    }}>
                    {selected.map(branch => (
                      <Chip key={branch.id} label={branch.title} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}>
                {allbranches?.map(branch => (
                  <MenuItem
                    key={branch.id}
                    value={branch}
                    style={getStyles(
                      branch,
                      formState.values.branch || '',
                      theme
                    )}>
                    {branch.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
