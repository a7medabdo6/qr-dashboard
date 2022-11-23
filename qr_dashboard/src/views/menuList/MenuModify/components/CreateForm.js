import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import './style.css';
import gradients from 'utils/gradients';
import {
  TextField,
  Typography,
  Select,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Modal,
  Avatar
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LoaderButton from 'components/Buttons';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import { useParams } from 'react-router-dom';
import {
  useCreateMenuHook,
  useGetOneMenuHook,
  useModifyMenuHook
} from 'hooks/apis/Menus';
import {
  useGetMainCategoryHook,
  useGetSubcategoryHook
} from 'hooks/apis/Category';
import Header from './components/Header';
import CategoryList from './components/CategoryList';

const useStyles = makeStyles(theme => ({
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
  },
  icon: {
    backgroundImage: gradients.orange,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    margin: '0 10px',
    height: 44,
    width: 44,
    fontSize: 32
  },
  avatar: {
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    margin: '0 10px',
    height: 44,
    width: 44,
    fontSize: 32
  }
}));

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
  width: '65%'
};
const smModalStyle = {
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
  width: '35%'
};
const ITEM_HEIGHT = 30;
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
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

const CreateFrom = props => {
  let { id } = useParams();
  const { data, isLoading: isLoadingData } = useGetOneMenuHook(id);
  const {
    data: Categories,
    isLoading: isLoadingCategories
  } = useGetMainCategoryHook();
  const {
    data: Subcategories,
    isLoading: isLoadingSubcategories
  } = useGetSubcategoryHook();
  const classes = useStyles();
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [subExpanded, setSubExpanded] = useState(false);
  const [productExpanded, setProductExpanded] = useState(false);
  const [multiFormState, setMultiFormState] = useState({
    isValid: false
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [
    openAddExistingCategoryModal,
    setOpenAddExistingCategoryModal
  ] = useState(false);
  const [openAddSubCategoryModal, setOpenAddSubCategoryModal] = useState(false);
  const [openEditSubcategoryModal, setOpenEditSubcategoryModal] = useState(
    false
  );
  const [openDeleteCategoryModal, setOpenDeleteCategoryModal] = useState(false);
  const [openDeleteSubcategoryModal, setOpenDeleteSubcategoryModal] = useState(
    false
  );
  const [
    openAddExistingSubCategoryModal,
    setOpenAddExistingSubCategoryModal
  ] = useState(false);

  const [openAddProductModal, setOpenAddProductModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [categoryId, setCategoryId] = useState(false);
  const [subcategoryId, setSubcategoryId] = useState(false);

  const [logo, setLogo] = useState(false);
  const [selectedFile, setSelectedFile] = React.useState(false);

  const {
    mutate: UpdateMenuRequest,
    isLoading: isLoadingUpdate
  } = useModifyMenuHook();

  const [formState, setFormState] = useState({
    isValid: false,
    values: { active: true },
    touched: {},
    errors: {}
  });

  const [selectedCategory, setSelectedCategories] = useState([]);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleClick = (event, categoryId) => {
    setCategoryId(categoryId);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpand = (type, index) => {
    switch (type) {
      case 'category':
        setExpanded(expanded === index ? false : index);
        break;
      case 'subcategory':
        setSubExpanded(subExpanded === index ? false : index);
        break;
      case 'product':
        setProductExpanded(productExpanded === index ? false : index);
        break;
      default:
        break;
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleOpenDeleteSubModal = (categoryId, subcategoryId) => {
    setCategoryId(categoryId);
    setSubcategoryId(subcategoryId);
    setOpenDeleteSubcategoryModal(true);
  };

  const handleOpenDeleteCatModal = categoryId => {
    setCategoryId(categoryId);
    setOpenDeleteCategoryModal(true);
  };

  const handleAddExistingCategoryModal = () => {
    setOpenAddExistingCategoryModal(true);
  };

  const handleOpenEditCategoryModal = categoryId => {
    setOpenEditCategoryModal(true);
    let editedCategory = data.data.categories.filter(
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
  };

  const handleOpenEditSubcategoryModal = (categoryId, subcategoryId) => {
    setOpenEditSubcategoryModal(true);
    setCategoryId(categoryId);
    let editedCategory = data.data.categories.filter(
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
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setOpenEditCategoryModal(false);
    setOpenAddExistingCategoryModal(false);
    setOpenAddSubCategoryModal(false);
    setOpenAddExistingSubCategoryModal(false);
    setOpenEditSubcategoryModal(false);
    setOpenDeleteCategoryModal(false);
    setOpenDeleteSubcategoryModal(false);
    setOpenAddProductModal(false);
    setMultiFormState(false);
    setLogo(false);
    setSelectedFile(false);
    setSelectedCategories([]);
    setFormState({
      isValid: false,
      values: { active: true },
      touched: {},
      errors: {}
    });
  };

  const handleAddNewCategory = async event => {
    event.preventDefault();
    let Menu = { ...data?.data };
    Menu.id = id;
    Menu.categories = Menu.categories.map(cat => {
      return { id: cat.id };
    });
    Menu.categories.push({ ...formState.values, parent: true });
    await UpdateMenuRequest(Menu);
    handleCloseModal();
  };

  const handleAddNewSubcategory = async event => {
    event.preventDefault();
    let Menu = { ...data?.data };
    Menu.id = id;
    let catIndex;
    Menu.categories = Menu.categories.map((cat, index) => {
      if (cat.id === categoryId) {
        catIndex = index;
        return cat;
      } else return { id: cat.id };
    });
    Menu.categories[catIndex].subcategories = Menu.categories[
      catIndex
    ].subcategories.map(cat => {
      return { id: cat.id };
    });
    Menu.categories[catIndex].subcategories.push({
      ...formState.values
    });
    await UpdateMenuRequest(Menu);
    handleCloseModal();
  };

  const handleAddExistingSubcategory = async event => {
    event.preventDefault();
    let Menu = { ...data?.data };
    Menu.id = id;
    let catIndex;
    Menu.categories = Menu.categories.map((cat, index) => {
      if (cat.id === categoryId) {
        catIndex = index;
        return cat;
      } else return { id: cat.id };
    });
    Menu.categories[catIndex].subcategories = Menu.categories[
      catIndex
    ].subcategories.map(cat => {
      return { id: cat.id };
    });
    selectedCategory.forEach(category => {
      Menu.categories[catIndex].subcategories.push({ id: category.id });
    });
    await UpdateMenuRequest(Menu);
    handleCloseModal();
  };

  const handleAddExistingCategory = async event => {
    event.preventDefault();
    let Menu = { ...data?.data };
    Menu.id = id;
    Menu.categories = Menu.categories.map(cat => {
      return { id: cat.id };
    });
    selectedCategory.forEach(category => {
      Menu.categories.push({ id: category.id });
    });
    await UpdateMenuRequest(Menu);
    handleCloseModal();
  };

  const handleUpdateCategory = async event => {
    event.preventDefault();
    let Menu = { ...data?.data };
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
    handleCloseModal();
  };

  const handleDeleteCategory = async () => {
    setIsLoading(true);
    let Menu = { ...data?.data };
    Menu.id = id;
    Menu.categories = Menu.categories
      .filter(cat => cat.id !== categoryId)
      .map(cat => {
        return { id: cat.id };
      });
    await UpdateMenuRequest(Menu);
    await setIsLoading(false);
    await handleCloseModal();
  };

  const handleDeleteSubcategory = async () => {
    setIsLoading(true);
    let Menu = { ...data?.data };
    Menu.id = id;
    let catIndex;
    Menu.categories = Menu.categories.map((cat, index) => {
      if (cat.id === categoryId) {
        catIndex = index;
        return cat;
      } else return { id: cat.id };
    });
    Menu.categories[catIndex].subcategories = Menu.categories[
      catIndex
    ].subcategories
      .filter(cat => cat.id !== subcategoryId)
      .map(cat => {
        return { id: cat.id };
      });
    await UpdateMenuRequest(Menu);
    await setIsLoading(false);
    await handleCloseModal();
  };

  const handleAddNewSubCategory = () => {
    setOpenAddSubCategoryModal(true);
    handleClose();
  };

  const handleAddExistingSubCategory = () => {
    setOpenAddExistingSubCategoryModal(true);
    handleClose();
  };

  const handleUpdateSubcategory = async event => {
    event.preventDefault();
    let Menu = { ...data?.data };
    Menu.id = id;
    let catIndex;
    Menu.categories = Menu.categories.map((cat, index) => {
      if (cat.id === categoryId) {
        catIndex = index;
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
    handleCloseModal();
  };

  const handleOpenAddProductModal = (categoryId, subcategoryId) => {
    setCategoryId(categoryId);
    setSubcategoryId(subcategoryId);
    setOpenAddProductModal(true);
  };

  const handleAddProduct = async event => {
    event.preventDefault();
    let Menu = { ...data?.data };
    Menu.id = id;
    let catIndex;
    Menu.categories = Menu.categories.map((cat, index) => {
      if (cat.id === categoryId) {
        catIndex = index;
        return cat;
      } else return { id: cat.id };
    });
    let subCatIndex;
    Menu.categories[catIndex].subcategories = Menu.categories[
      catIndex
    ].subcategories.map((cat, index) => {
      if (cat.id === subcategoryId) {
        subCatIndex = index;
        return cat;
      } else return { id: cat.id };
    });

    Menu.categories[catIndex].subcategories[subCatIndex].products.push({
      ...formState.values
    });
    Menu.categories[catIndex].subcategories[subCatIndex].products.forEach(
      product => {
        delete product.image;
      }
    );
    await UpdateMenuRequest(Menu);
    handleCloseModal();
  };

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
    setSelectedCategories([...value]);
    setMultiFormState({
      isValid: value?.length > 0 ? true : false
    });
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

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  if (isLoadingData || isLoading) {
    return <div>Loading ....</div>;
  }
  return (
    <>
      <Header
        handleOpenModal={handleOpenModal}
        handleAddExistingCategoryModal={handleAddExistingCategoryModal}
      />
      <CategoryList
        data={data}
        expanded={expanded}
        anchorEl={anchorEl}
        subExpanded={subExpanded}
        productExpanded={productExpanded}
        handleExpand={handleExpand}
        handleClick={handleClick}
        handleClose={handleClose}
        handleOpenDeleteCatModal={handleOpenDeleteCatModal}
        handleOpenDeleteSubModal={handleOpenDeleteSubModal}
        handleOpenEditCategoryModal={handleOpenEditCategoryModal}
        handleOpenEditSubcategoryModal={handleOpenEditSubcategoryModal}
        handleAddNewSubCategory={handleAddNewSubCategory}
        handleAddExistingSubCategory={handleAddExistingSubCategory}
        handleOpenAddProductModal={handleOpenAddProductModal}
      />
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ ...ModalStyle }}>
          <form onSubmit={handleAddNewCategory}>
            <Typography variant="h4">Add New Category</Typography>
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
              title={'Add'}
            />
          </form>
        </Box>
      </Modal>
      <Modal open={openAddExistingCategoryModal} onClose={handleCloseModal}>
        <Box sx={{ ...ModalStyle }}>
          <form onSubmit={handleAddExistingCategory}>
            <Typography variant="h4">Add Existing Category</Typography>
            <div className={classes.fields}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel
                      id="multiple-category-label"
                      className={classes.label}>
                      {`Category`}
                    </InputLabel>
                    <Select
                      name="category"
                      labelId="multiple-category-label"
                      id="category-label"
                      multiple
                      value={selectedCategory}
                      onChange={handleChangeMulti}
                      input={
                        <OutlinedInput id="category-label" label="Branch(es)" />
                      }
                      renderValue={selected => (
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 0.5
                          }}>
                          {selected.map(category => (
                            <Chip key={category.id} label={category.title} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}>
                      {Categories?.data?.results
                        ?.filter(category => {
                          return data?.data?.categories?.every(
                            allCategories => {
                              return category.id != allCategories.id;
                            }
                          );
                        })
                        .map(category => (
                          <MenuItem
                            key={category.id}
                            value={category}
                            style={getStyles(
                              category,
                              selectedCategory || '',
                              theme
                            )}>
                            {category.title}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <LoaderButton
              className={classes.submitButton}
              formState={multiFormState}
              isLoading={isLoadingUpdate}
              title={'Add'}
            />
          </form>
        </Box>
      </Modal>
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
      <Modal open={openAddSubCategoryModal} onClose={handleCloseModal}>
        <Box sx={{ ...ModalStyle }}>
          <form onSubmit={handleAddNewSubcategory}>
            <Typography variant="h4">Add New Subcategory</Typography>
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
              title={'Add'}
            />
          </form>
        </Box>
      </Modal>
      <Modal open={openAddExistingSubCategoryModal} onClose={handleCloseModal}>
        <Box sx={{ ...ModalStyle }}>
          <form onSubmit={handleAddExistingSubcategory}>
            <Typography variant="h4">Add Existing Subcategory</Typography>
            <div className={classes.fields}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel
                      id="multiple-category-label"
                      className={classes.label}>
                      {`Subcategory`}
                    </InputLabel>
                    <Select
                      name="category"
                      labelId="multiple-category-label"
                      id="category-label"
                      multiple
                      value={selectedCategory}
                      onChange={handleChangeMulti}
                      input={
                        <OutlinedInput id="category-label" label="Branch(es)" />
                      }
                      renderValue={selected => (
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 0.5
                          }}>
                          {selected.map(category => (
                            <Chip key={category.id} label={category.title} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}>
                      {Subcategories?.data?.results.map(category => (
                        <MenuItem
                          key={category.id}
                          value={category}
                          style={getStyles(
                            category,
                            selectedCategory || '',
                            theme
                          )}>
                          {category.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <LoaderButton
              className={classes.submitButton}
              formState={multiFormState}
              isLoading={isLoadingUpdate}
              title={'Add'}
            />
          </form>
        </Box>
      </Modal>
      <Modal open={openEditSubcategoryModal} onClose={handleCloseModal}>
        <Box sx={{ ...ModalStyle }}>
          <form onSubmit={handleUpdateSubcategory}>
            <Typography variant="h4">Update Subcategory</Typography>
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
      <Modal open={openDeleteCategoryModal} onClose={handleCloseModal}>
        <Box sx={{ ...smModalStyle }}>
          <form onSubmit={handleDeleteCategory}>
            <Typography variant="h4">Remove Category</Typography>
            <Typography variant="subtitle1" style={{ marginTop: '5px' }}>
              Are you sure you want to remove this Category?
            </Typography>
            <Button
              type="submit"
              variant={'contained'}
              color={'secondary'}
              className={classes.submitButton}>
              Remove
            </Button>
          </form>
        </Box>
      </Modal>
      <Modal open={openDeleteSubcategoryModal} onClose={handleCloseModal}>
        <Box sx={{ ...smModalStyle }}>
          <form onSubmit={handleDeleteSubcategory}>
            <Typography variant="h4">Remove Subcategory</Typography>
            <Typography variant="subtitle1" style={{ marginTop: '5px' }}>
              Are you sure you want to remove this Subcategory?
            </Typography>
            <Button
              type="submit"
              variant={'contained'}
              color={'secondary'}
              className={classes.submitButton}>
              Remove
            </Button>
          </form>
        </Box>
      </Modal>
      <Modal open={openAddProductModal} onClose={handleCloseModal}>
        <Box sx={{ ...ModalStyle }}>
          <form onSubmit={handleAddProduct}>
            <Typography variant="h4">Add New Product</Typography>
            <div className={classes.fields}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    error={hasError('price')}
                    fullWidth
                    helperText={
                      hasError('price') ? formState.errors.price[0] : null
                    }
                    label="Price"
                    name="price"
                    onChange={handleChange}
                    value={formState.values.price || ''}
                    variant="outlined"
                  />
                </Grid>{' '}
                <Grid item xs={12} style={{ display: 'flex' }} md={6}>
                  {logo ? (
                    <Avatar
                      alt="avatar"
                      src={selectedFile}
                      className={classes.avatar}
                    />
                  ) : (
                    <InsertPhoto className={classes.icon} />
                  )}
                  <TextField
                    type="file"
                    onChange={handleFileSelect}
                    // value={formState.values.name || ''}
                    variant="outlined"
                  />
                </Grid>
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
              title={'Add'}
            />
          </form>
        </Box>
      </Modal>
    </>
  );
};

CreateFrom.propTypes = {
  className: PropTypes.string
};

export default CreateFrom;
