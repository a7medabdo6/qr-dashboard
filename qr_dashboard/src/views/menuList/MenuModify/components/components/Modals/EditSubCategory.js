import React, { useEffect, useState } from 'react';
import {
  TextField,
  Typography,
  Box,
  Modal,
  Avatar,
  Checkbox
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router';
import validate from 'validate.js';
import LoaderButton from 'components/Buttons';
import { useModifyMenuHook } from 'hooks/apis/Menus';
import { useUpdateCategoryImageHook } from 'hooks/apis/Category';
import moment from 'moment';

import { InsertPhoto } from '@material-ui/icons';
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
  maxHeight: '80vh',
  overflow: 'auto'
};

function EditSubCategory({
  menu,
  openEditSubcategoryModal,
  handleCloseModal,
  classes,
  categoryId,
  subcategoryId
}) {
  const [formState, setFormState] = useState({
    isValid: false,
    values: { active: true, order: 1 },
    touched: {},
    errors: {}
  });

  const { mutate: UpdateCategoryImage } = useUpdateCategoryImageHook();
  const [logo, setLogo] = useState(false);
  const [selectedFile, setSelectedFile] = useState(false);
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
    if (categoryId && subcategoryId) {
      let editedCategory = menu.categories.filter(
        cat => cat.id === categoryId
      )[0];
      let editedSubcategory = editedCategory.subcategories.filter(
        cat => cat.id === subcategoryId
      )[0];
      setFormState(formState => ({
        ...formState,
        values: {
          ...formState.values,
          ...editedSubcategory
        },
        touched: {
          ...formState.touched,
          title: true,
          title_ar: true
        }
      }));
    }
  }, [categoryId, subcategoryId]);

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

  const handleUpdateSubcategory = async event => {
    event.preventDefault();
    if (logo) {
      handleUpdateImage();
    }
    let Menu = menu;
    Menu.id = id;
    let catIndex;
    Menu.categories = Menu.categories.map((cat, index) => {
      if (cat.id === categoryId) {
        catIndex = index;
        delete cat.image;
        return cat;
      } else return { id: cat.id };
    });

    Menu.categories[catIndex].subcategories = Menu.categories[
      catIndex
    ].subcategories.map(cat => {
      return { id: cat.id };
    });

    let modifyIndex = Menu.categories[catIndex].subcategories.findIndex(
      cat => cat.id === formState.values.id
    );
    Menu.categories[catIndex].subcategories[modifyIndex] = {
      ...formState.values
    };
    Menu.categories[catIndex].subcategories = Menu.categories[
      catIndex
    ].subcategories.map(cat => {
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

  const handleUpdateImage = async () => {
    const formData = new FormData();
    formData.append('image', logo);
    formData.append('id', subcategoryId);
    await UpdateCategoryImage(formData);
  };

  return (
    <Modal open={openEditSubcategoryModal} onClose={handleCloseModal}>
      <Box sx={{ ...ModalStyle }}>
        <form onSubmit={handleUpdateSubcategory}>

          <Typography variant="h4" style={{ textAlign: 'initial' }}>
            {formState?.values?.title}
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ textAlign: 'initial', marginBottom: '20px' }}>
            Last Updated:{' '}
            {moment(formState.values.update_at).format('DD/MM/YYYY hh:mm a')}
          </Typography>

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
              <Grid
                item
                xs={12}
                md={6}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                <Typography
                  color="textSecondary"
                  style={{ marginInline: '10px' }}
                  variant="body1">
                  Active
                </Typography>
                <Checkbox
                  checked={formState.values.active || false}
                  className={classes.policyCheckbox}
                  color="primary"
                  name="active"
                  type="checkbox"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ display: 'flex' }}>
                {logo || formState.values.image ? (
                  <Avatar
                    alt="avatar"
                    src={selectedFile || formState.values.image}
                    className={classes.avatar}
                  />
                ) : (
                  <InsertPhoto className={classes.icon} />
                )}
                <TextField
                  type="file"
                  onChange={handleFileSelect}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </div>
          <LoaderButton
            className={classes.submitButton}
            formState={formState}
            isLoading={isLoadingUpdate}
            title={'Save'}
          />
        </form>
      </Box>
    </Modal>
  );
}

export default EditSubCategory;
