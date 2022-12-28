import React, { useEffect, useState } from 'react';
import { TextField, Typography, Box, Modal } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router';
import validate from 'validate.js';
import LoaderButton from 'components/Buttons';
import { useModifyMenuHook } from 'hooks/apis/Menus';

const schema = {
  title: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  title_ar: {
    presence: { allowEmpty: false, message: 'is required' }
  }
};

const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #eee',
  borderRadius: '10px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  width: '65%',
  textAlign: 'center',
  maxHeight: '95vh',
  overflow: 'auto'
};

function EditCategory({
  menu,
  openEditCategoryModal,
  handleCloseModal,
  classes,
  categoryId
}) {
  const [formState, setFormState] = useState({
    isValid: false,
    values: { active: true, order: 1 },
    touched: {},
    errors: {}
  });

  let { id } = useParams();

  const {
    mutate: UpdateMenuRequest,
    isLoading: isLoadingUpdate
  } = useModifyMenuHook();

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  useEffect(() => {
    let editedCategory = menu.categories.filter(
      cat => cat.id === categoryId
    )[0];
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        ...editedCategory
      },
      touched: {
        ...formState.touched,
        title: true,
        title_ar: true
      }
    }));
  }, [categoryId]);

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

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const handleUpdateCategory = async event => {
    event.preventDefault();
    let Menu = menu;
    Menu.id = id;
    let modifyIndex = Menu.categories.findIndex(
      cat => cat.id === formState.values.id
    );
    Menu.categories[modifyIndex] = { ...formState.values };
    Menu.categories = Menu.categories.map(cat => {
      if (cat.id === formState.values.id) {
        return {
          id: cat.id,
          title: cat.title,
          title_ar: cat.title_ar
        };
      } else return { id: cat.id };
    });

    await UpdateMenuRequest(Menu);
    setFormState({
      isValid: false,
      values: { active: true, order: 1 },
      touched: {},
      errors: {}
    });
    handleCloseModal();
  };

  return (
    <Modal open={openEditCategoryModal} onClose={handleCloseModal}>
      <Box sx={{ ...ModalStyle }}>
        <form onSubmit={handleUpdateCategory}>
          <Typography variant="h4">Update Category</Typography>
          <div className={classes.fields}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={6}>
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
            </Grid>
          </div>
          <LoaderButton
            className={classes.submitButton}
            formState={formState}
            isLoading={isLoadingUpdate}
            title={'Edit'}
          />
        </form>
      </Box>
    </Modal>
  );
}

export default EditCategory;
