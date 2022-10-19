import React, { useState, useEffect } from 'react';
import validate, { async } from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/styles';
import './style.css';
import Menu from '@material-ui/core/Menu';

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
  FormControl,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Button,
  Modal
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import BuildCircleIcon from '@material-ui/icons/RadioButtonUnchecked';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import LoaderButton from 'components/Buttons';
import EmptySection from 'components/EmptySection';

import { useParams } from 'react-router-dom';
import {
  useCreateMenuHook,
  useGetOneMenuHook,
  useModifyMenuHook
} from 'hooks/apis/Menus';
import { useGetMainCategoryHook } from 'hooks/apis/Category';

const useStyles = makeStyles(theme => ({
  root: {},
  accordion: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  autoMargin: {
    marginTop: 'auto',
    marginBottom: 'auto',
    maxHeight: '35px',
    zIndex: 2,
    [theme.breakpoints.up('xs')]: {
      maxWidth: '300px',
      minWidth: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100px',
      minWidth: '60px',
      fontSize: theme.spacing(1.8)
    }
  },
  divider: {
    margin: 'auto',
    border: 'solid',
    borderColor: '#e4e4e4',
    borderWidth: '0.7px',
    [theme.breakpoints.up('xs')]: {
      width: '75%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '10%'
    }
  },
  dividerHidden: {
    margin: 'auto',
    border: 'solid',
    borderColor: '#ccc',
    borderWidth: '0.7px',
    visibility: 'hidden'
  },
  addIcon: {
    color: '#00b41e',
    padding: '0px',
    minWidth: 'auto'
  },
  paddingZero: {
    padding: '0px',
    minWidth: 'auto'
  },
  icon: {
    width: '30px',
    height: '30px'
  },
  smIcon: {
    width: '22px',
    height: '22px'
  },
  secIcon: {
    width: '20px',
    height: '20px'
  },
  smSecIcon: {
    width: '12px',
    height: '12px'
  },
  editIcon: {
    color: '#fb8c01',
    padding: '0px',
    minWidth: 'auto'
  },
  flexColumn: {
    flexDirection: 'column',
    justifyContent: 'space'
  },
  secondaryLevel: {
    backgroundColor: '#f0f0f0'
  },
  darkIcon: {
    color: '#707070',
    padding: '0px',
    minWidth: 'auto'
  },
  child: {
    position: 'relative',
    top: '0px'
  },
  child2: {
    left: '17%',
    top: '17%',
    position: 'absolute'
  },
  child3: {
    left: '22%',
    top: '22%',
    position: 'absolute'
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.up('xs')]: {
      padding: '15px 35px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '15px 5px'
    }
  },
  subData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.up('xs')]: {
      padding: '6px 35px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '6px 5px'
    }
  },
  orange: {
    color: '#fb8c01'
  },
  subDataSubTitle: {
    overflow: 'clip',
    maxHeight: '35px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '150px'
    }
  },
  headerRoot: {
    marginBottom: theme.spacing(5)
  },
  btnWhite: {
    backgroundColor: '#fff',
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1)
    }
  },
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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #eee',
  borderRadius: '10px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  width: '65%'
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
  const [isLoading, setIsLoading] = useState(false);

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

  const handleClick = event => {
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

  const handleAddExistingCategoryModal = () => {
    setOpenAddExistingCategoryModal(true);
  };

  const handleOpenEditCategoryModal = categoryId => {
    setOpenEditCategoryModal(true);
    let editedCategory = data.data.categories.filter(
      cat => cat.id === categoryId
    )[0];
    console.log('editedCategory', editedCategory);
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

  const handleCloseModal = () => {
    setOpenModal(false);
    setOpenEditCategoryModal(false);
    setOpenAddExistingCategoryModal(false);
    setMultiFormState(false);
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

  const handleDeleteCategory = async categoryId => {
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

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  if (isLoadingData || isLoading) {
    return <div>Loading ....</div>;
  }
  return (
    <>
      <div className={classes.headerRoot}>
        <Grid
          alignItems="flex-end"
          container
          justify="space-between"
          spacing={3}>
          <Grid item>
            <Typography
              component="h2"
              gutterBottom
              variant="overline"></Typography>
            <Typography component="h1" variant="h3">
              Modify Menu
            </Typography>
          </Grid>
          <Grid item>
            <Button
              color="default"
              className={classes.btnWhite}
              onClick={handleOpenModal}
              variant="outlined">
              Add New Category
            </Button>
            <Button
              color="default"
              className={classes.btnWhite}
              onClick={handleAddExistingCategoryModal}
              variant="outlined">
              Add Existing Category
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        {data?.data?.categories?.length > 0 ? (
          data?.data?.categories.map((category, index) => (
            <Accordion
              key={index}
              className={classes.accordion}
              expanded={expanded === index}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    onClick={() => handleExpand('category', index)}
                  />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography
                  variant={'h4'}
                  color={'secondary'}
                  className={classes.autoMargin}
                  onClick={() => handleExpand('category', index)}>
                  {category?.title}
                </Typography>
                <Divider className={classes.divider} />

                <Button
                  color="primary"
                  className={classes.addIcon}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  size="large"
                  variant="text">
                  <AddCircleIcon className={classes.icon} />
                </Button>

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Add New</MenuItem>
                  <MenuItem onClick={handleClose}>Add From Existing</MenuItem>
                </Menu>

                <Button
                  color="secondary"
                  className={classes.paddingZero}
                  onClick={() => handleDeleteCategory(category?.id)}
                  size="large"
                  variant="text">
                  <RemoveCircleIcon className={classes.icon} />
                </Button>
                <Button
                  color="secondary"
                  className={classes.editIcon}
                  onClick={() => handleOpenEditCategoryModal(category?.id)}
                  size="large"
                  variant="text">
                  <BuildCircleIcon
                    className={clsx(classes.icon, classes.child)}
                  />
                  <EditIcon
                    className={clsx(
                      classes.secIcon,
                      classes.child,
                      classes.child2
                    )}
                  />
                </Button>
              </AccordionSummary>
              <AccordionDetails className={classes.flexColumn}>
                {category?.subcategories?.map((subCategory, index) => (
                  <Accordion
                    key={index}
                    className={classes.accordion}
                    expanded={subExpanded === index}>
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          onClick={() => handleExpand('subcategory', index)}
                        />
                      }
                      aria-controls="panel1bh-content"
                      id="panel1bh-header">
                      <Typography
                        variant={'h4'}
                        color={'primary'}
                        className={classes.autoMargin}
                        onClick={() => handleExpand('subcategory', index)}>
                        {subCategory?.title}
                      </Typography>
                      <Divider className={classes.divider} />
                      <Button
                        color="primary"
                        className={classes.addIcon}
                        onClick={() => console.log(subCategory?.id)}
                        size="large"
                        variant="text">
                        <AddCircleIcon className={classes.icon} />
                      </Button>
                      <Button
                        color="secondary"
                        className={classes.paddingZero}
                        onClick={() => console.log(subCategory?.id)}
                        size="large"
                        variant="text">
                        <RemoveCircleIcon className={classes.icon} />
                      </Button>
                      <Button
                        color="secondary"
                        className={classes.editIcon}
                        onClick={() => console.log(subCategory?.id)}
                        size="large"
                        variant="text">
                        <BuildCircleIcon
                          className={clsx(classes.icon, classes.child)}
                        />
                        <EditIcon
                          className={clsx(
                            classes.secIcon,
                            classes.child,
                            classes.child2
                          )}
                        />
                      </Button>
                    </AccordionSummary>
                    <AccordionDetails className={classes.flexColumn}>
                      {subCategory?.products?.map((product, index) => (
                        <Accordion
                          key={index}
                          expanded={productExpanded === index}>
                          <AccordionSummary
                            expandIcon={
                              <ExpandMoreIcon
                                onClick={() => handleExpand('product', index)}
                              />
                            }
                            aria-controls="panel2bh-content"
                            className={classes.secondaryLevel}
                            id="panel2bh-header">
                            <Typography
                              variant="h5"
                              className={
                                classes.autoMargin + ' product-h5-menu-editor'
                              }
                              onClick={() => handleExpand('product', index)}>
                              <img
                                src={product.image}
                                className="product-thumb-menu-editor"
                              />
                              {product?.title}
                            </Typography>
                            <Divider className={classes.dividerHidden} />
                            <Button
                              color="default"
                              onClick={() => console.log(product?.id)}
                              className={classes.darkIcon}
                              size="large"
                              variant="text">
                              <RemoveCircleIcon className={classes.icon} />
                            </Button>
                            <Button
                              color="default"
                              className={classes.darkIcon}
                              onClick={() => console.log(product?.id)}
                              size="large"
                              variant="text">
                              <BuildCircleIcon className={classes.icon} />
                              <EditIcon
                                className={clsx(
                                  classes.secIcon,
                                  classes.child,
                                  classes.child2
                                )}
                              />
                            </Button>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container spacing={2}>
                              <Grid item xs={12} md={6}>
                                <div className={classes.subHeader}>
                                  <Typography
                                    variant="h6"
                                    className={classes.orange}>
                                    VARIANTS
                                  </Typography>
                                  <Button
                                    className={classes.editIcon}
                                    onClick={() => console.log('Add')}
                                    size="large"
                                    variant="text">
                                    <AddCircleIcon className={classes.smIcon} />
                                  </Button>
                                </div>
                                <div className={classes.subData}>
                                  <Typography
                                    variant="subtitle1"
                                    className={classes.subDataSubTitle}>
                                    Small
                                  </Typography>
                                  <span>
                                    <Button
                                      className={classes.darkIcon}
                                      onClick={() => console.log('Add')}
                                      size="large"
                                      variant="text">
                                      <RemoveCircleOutlineIcon
                                        className={classes.smIcon}
                                      />
                                    </Button>
                                    <Button
                                      color="default"
                                      className={classes.darkIcon}
                                      size="large"
                                      variant="text">
                                      <BuildCircleIcon
                                        className={clsx(
                                          classes.smIcon,
                                          classes.child
                                        )}
                                      />
                                      <EditIcon
                                        className={clsx(
                                          classes.smSecIcon,
                                          classes.child,
                                          classes.child3
                                        )}
                                      />
                                    </Button>
                                  </span>
                                </div>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <div className={classes.subHeader}>
                                  <Typography
                                    variant="h6"
                                    className={classes.orange}>
                                    MODIFIERS
                                  </Typography>
                                  <Button
                                    className={classes.editIcon}
                                    onClick={() => console.log('Add')}
                                    size="large"
                                    variant="text">
                                    <AddCircleIcon className={classes.smIcon} />
                                  </Button>
                                </div>
                                <div className={classes.subData}>
                                  <Typography
                                    variant="subtitle1"
                                    className={classes.subDataSubTitle}>
                                    Extra Cheese
                                  </Typography>
                                  <span>
                                    <Button
                                      className={classes.darkIcon}
                                      onClick={() => console.log('Add')}
                                      size="large"
                                      variant="text">
                                      <RemoveCircleOutlineIcon
                                        className={classes.smIcon}
                                      />
                                    </Button>
                                    <Button
                                      color="default"
                                      className={classes.darkIcon}
                                      size="large"
                                      variant="text">
                                      <BuildCircleIcon
                                        className={clsx(
                                          classes.smIcon,
                                          classes.child
                                        )}
                                      />
                                      <EditIcon
                                        className={clsx(
                                          classes.smSecIcon,
                                          classes.child,
                                          classes.child3
                                        )}
                                      />
                                    </Button>
                                  </span>
                                </div>
                                <div className={classes.subData}>
                                  <Typography
                                    variant="subtitle1"
                                    className={classes.subDataSubTitle}>
                                    No Olive
                                  </Typography>
                                  <span>
                                    <Button
                                      className={classes.darkIcon}
                                      onClick={() => console.log('Add')}
                                      size="large"
                                      variant="text">
                                      <RemoveCircleOutlineIcon
                                        className={classes.smIcon}
                                      />
                                    </Button>
                                    <Button
                                      color="default"
                                      className={classes.darkIcon}
                                      size="large"
                                      variant="text">
                                      <BuildCircleIcon
                                        className={clsx(
                                          classes.smIcon,
                                          classes.child
                                        )}
                                      />
                                      <EditIcon
                                        className={clsx(
                                          classes.smSecIcon,
                                          classes.child,
                                          classes.child3
                                        )}
                                      />
                                    </Button>
                                  </span>
                                </div>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <EmptySection />
        )}
      </div>
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
    </>
  );
};

CreateFrom.propTypes = {
  className: PropTypes.string
};

export default CreateFrom;
