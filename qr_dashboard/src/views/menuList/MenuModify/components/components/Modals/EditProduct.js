import React, { Fragment, useEffect, useState } from 'react';
import {
  TextField,
  Typography,
  Box,
  Button,
  Modal,
  Avatar,
  CircularProgress,
  Tabs,
  Tab
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import validate from 'validate.js';
import moment from 'moment';

import LoaderButton from 'components/Buttons';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import PropTypes from 'prop-types';
import {
  useGetProductHook,
  useUpdateProductHook,
  useUpdateProductImageHook
} from 'hooks/apis/Products';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

const productSchema = {
  title: {
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

function EditProduct({
  openUpdateProductModal,
  handleCloseModal,
  classes,
  productId
}) {
  const [formState, setFormState] = useState({
    isValid: false,
    values: { active: true, order: 1 },
    touched: {},
    errors: {}
  });

  const { data: product } = useGetProductHook(productId);
  const { mutate: UpdateProductImage } = useUpdateProductImageHook();
  const { mutate: UpdateProduct } = useUpdateProductHook();

  const [modifiers, setModifiers] = useState([]);
  const [variants, setVariants] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [nutrients, setNutrients] = useState([]);

  const [logo, setLogo] = useState(false);
  const [selectedFile, setSelectedFile] = useState(false);

  useEffect(() => {
    const errors = validate(formState.values, productSchema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  useEffect(() => {
    if (product?.data && product?.data?.id !== formState?.values?.id) {
      const errors = validate(product?.data, productSchema);
      setModifiers(product.data.modifiers);
      setVariants(product.data.varients);
      setIngredients(product.data.ingredients);
      setNutrients(product.data.nutrients);
      setFormState({
        values: { ...product?.data },
        isValid: errors ? false : true,
        errors: errors || {},
        touched: {}
      });
    }
  }, [product]);

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

  const handleChangeModifier = (event, index) => {
    event.persist();
    let newModifiers = [...modifiers];
    newModifiers[index][event.target.name] =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setModifiers(newModifiers);
  };

  const handleChangeVariant = (event, index) => {
    event.persist();
    let newVariants = [...variants];
    newVariants[index][event.target.name] =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setVariants(newVariants);
  };

  const handleChangeIngredient = (event, index) => {
    event.persist();
    let newIngredients = [...ingredients];
    newIngredients[index][event.target.name] =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setIngredients(newIngredients);
  };

  const handleChangeNutrient = (event, index) => {
    event.persist();
    let newNutrients = [...nutrients];
    newNutrients[index][event.target.name] =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setNutrients(newNutrients);
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

  const handleAddModifier = () => {
    let newModifiers = [...modifiers];
    newModifiers.push({
      title_en: '',
      title_ar: '',
      price: '',
      active: true
    });
    setModifiers(newModifiers);
  };

  const handleAddVariant = () => {
    let newVariants = [...variants];
    newVariants.push({
      title_en: '',
      title_ar: '',
      price: '',
      active: true
    });
    setVariants(newVariants);
  };

  const handleAddIngredient = () => {
    let newIngredients = [...ingredients];
    newIngredients.push({
      title_en: '',
      title_ar: '',
      price: '',
      active: true
    });
    setIngredients(newIngredients);
  };

  const handleAddNutrient = () => {
    let newNutrients = [...nutrients];
    newNutrients.push({
      title_en: '',
      title_ar: '',
      price: '',
      active: true
    });
    setNutrients(newNutrients);
  };

  const handleUpdateImage = async () => {
    const formData = new FormData();
    formData.append('image', logo);
    formData.append('id', productId);
    await UpdateProductImage(formData);
  };

  const handleRemoveModifier = index => {
    let newModifiers = [...modifiers];
    newModifiers.splice(index, 1);
    setModifiers(newModifiers);
  };

  const handleRemoveVariant = index => {
    let newVariants = [...variants];
    newVariants.splice(index, 1);
    setVariants(newVariants);
  };

  const handleRemoveIngredient = index => {
    let newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleRemoveNutrient = index => {
    let newNutrients = [...nutrients];
    newNutrients.splice(index, 1);
    setNutrients(newNutrients);
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const handleEditProduct = async event => {
    event.preventDefault();
    if (logo) {
      handleUpdateImage();
    }
    const product = {
      id: formState.values.id,
      price: formState.values.price,
      title_en: formState.values.title_en,
      title_ar: formState.values.title_ar,
      modifiers,
      varients: variants
    };
    await UpdateProduct(product);
    closeModal();
  };

  const closeModal = () => {
    setLogo(false);
    setFormState({
      isValid: false,
      values: { active: true, order: 1 },
      touched: {},
      errors: {}
    });
    setModifiers([]);
    setVariants([]);
    setIngredients([]);
    setNutrients([]);
    setTab(0);
    handleCloseModal();
  };

  const [tab, setTab] = useState(0);
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Modal open={openUpdateProductModal} onClose={closeModal}>
      <Box sx={{ ...ModalStyle }}>
        {product?.data ? (
          <form onSubmit={handleEditProduct}>
            <Typography variant="h4" style={{ textAlign: 'initial' }}>
              Edit Product
            </Typography>
            <Typography variant="subtitle2" style={{ textAlign: 'initial' }}>
              Last Updated:{' '}
              {moment(formState.values.update_at).format('DD/MM/YYYY hh:mm a')}
            </Typography>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={tab}
                  onChange={handleChangeTab}
                  aria-label="Product Tabs"
                  variant="scrollable"
                  className={classes.tabs}>
                  <Tab label={'Basic Info'} />
                  <Tab label={`modifiers (${modifiers?.length})`} />
                  <Tab label={`variants (${variants?.length})`} />
                  <Tab label={`Ingredients (${ingredients?.length})`} />
                  <Tab label={`Nutrients (${nutrients?.length})`} />
                </Tabs>
              </Box>

              <TabPanel
                className="order-modal-details-tab-panel"
                value={tab}
                index={0}>
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
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        error={hasError('title_ar')}
                        fullWidth
                        helperText={
                          hasError('title_ar')
                            ? formState.errors.title_ar[0]
                            : null
                        }
                        label="title (ar)"
                        name="title_ar"
                        onChange={handleChange}
                        value={formState.values.title_ar || ''}
                        variant="outlined"
                      />
                    </Grid>
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
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex' }} md={6}>
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
              </TabPanel>

              <TabPanel value={tab} index={1}>
                <Grid container item spacing={2} xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    <Typography
                      variant={'caption'}
                      style={{ textAlign: 'initial' }}
                      fontSize={11}>
                      Modifiers
                    </Typography>
                    <Button
                      color="primary"
                      className={classes.addIcon}
                      onClick={handleAddModifier}
                      size="small"
                      variant="text">
                      <AddCircleIcon className={classes.smIcon} />
                    </Button>
                  </Grid>
                  {modifiers?.map((modifier, index) => (
                    <Fragment key={index}>
                      <Grid item xs={12} md={3}>
                        <Button
                          color="primary"
                          className={classes.addIcon}
                          onClick={() => handleRemoveModifier(index)}
                          size="small"
                          variant="text">
                          <RemoveCircleIcon className={classes.smIcon} />
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('title_en')}
                          fullWidth
                          label="title (en)"
                          name="title_en"
                          onChange={e => handleChangeModifier(e, index)}
                          value={modifier.title_en || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('title_ar')}
                          fullWidth
                          label="title (ar)"
                          name="title_ar"
                          onChange={e => handleChangeModifier(e, index)}
                          value={modifier.title_ar || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('price')}
                          fullWidth
                          label="Price"
                          name="price"
                          onChange={e => handleChangeModifier(e, index)}
                          value={modifier.price || ''}
                          variant="outlined"
                        />
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value={tab} index={2}>
                <Grid container item spacing={2} xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    <Typography
                      variant={'caption'}
                      style={{ textAlign: 'initial' }}
                      fontSize={11}>
                      Variants
                    </Typography>
                    <Button
                      color="primary"
                      className={classes.addIcon}
                      onClick={handleAddVariant}
                      size="small"
                      variant="text">
                      <AddCircleIcon className={classes.smIcon} />
                    </Button>
                  </Grid>
                  {variants?.map((variant, index) => (
                    <Fragment key={index}>
                      <Grid item xs={12} md={3}>
                        <Button
                          color="primary"
                          className={classes.addIcon}
                          onClick={() => handleRemoveVariant(index)}
                          size="small"
                          variant="text">
                          <RemoveCircleIcon className={classes.smIcon} />
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('title_en')}
                          fullWidth
                          label="title (en)"
                          name="title_en"
                          onChange={e => handleChangeVariant(e, index)}
                          value={variant.title_en || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('title_ar')}
                          fullWidth
                          label="title (ar)"
                          name="title_ar"
                          onChange={e => handleChangeVariant(e, index)}
                          value={variant.title_ar || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('price')}
                          fullWidth
                          label="Price"
                          name="price"
                          onChange={e => handleChangeVariant(e, index)}
                          value={variant.price || ''}
                          variant="outlined"
                        />
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value={tab} index={3}>
                <Grid container item spacing={2} xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    <Typography
                      variant={'caption'}
                      style={{ textAlign: 'initial' }}
                      fontSize={11}>
                      Ingredients
                    </Typography>
                    <Button
                      color="primary"
                      className={classes.addIcon}
                      onClick={handleAddIngredient}
                      size="small"
                      variant="text">
                      <AddCircleIcon className={classes.smIcon} />
                    </Button>
                  </Grid>
                  {ingredients?.map((variant, index) => (
                    <Fragment key={index}>
                      <Grid item xs={12} md={3}>
                        <Button
                          color="primary"
                          className={classes.addIcon}
                          onClick={() => handleRemoveIngredient(index)}
                          size="small"
                          variant="text">
                          <RemoveCircleIcon className={classes.smIcon} />
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('title_en')}
                          fullWidth
                          label="title (en)"
                          name="title_en"
                          onChange={e => handleChangeIngredient(e, index)}
                          value={variant.title_en || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('title_ar')}
                          fullWidth
                          label="title (ar)"
                          name="title_ar"
                          onChange={e => handleChangeIngredient(e, index)}
                          value={variant.title_ar || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('price')}
                          fullWidth
                          label="Price"
                          name="price"
                          onChange={e => handleChangeIngredient(e, index)}
                          value={variant.price || ''}
                          variant="outlined"
                        />
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value={tab} index={4}>
                <Grid container item spacing={2} xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    <Typography
                      variant={'caption'}
                      style={{ textAlign: 'initial' }}
                      fontSize={11}>
                      Nutrients
                    </Typography>
                    <Button
                      color="primary"
                      className={classes.addIcon}
                      onClick={handleAddNutrient}
                      size="small"
                      variant="text">
                      <AddCircleIcon className={classes.smIcon} />
                    </Button>
                  </Grid>
                  {nutrients?.map((variant, index) => (
                    <Fragment key={index}>
                      <Grid item xs={12} md={3}>
                        <Button
                          color="primary"
                          className={classes.addIcon}
                          onClick={() => handleRemoveNutrient(index)}
                          size="small"
                          variant="text">
                          <RemoveCircleIcon className={classes.smIcon} />
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('title_en')}
                          fullWidth
                          label="title (en)"
                          name="title_en"
                          onChange={e => handleChangeNutrient(e, index)}
                          value={variant.title_en || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('title_ar')}
                          fullWidth
                          label="title (ar)"
                          name="title_ar"
                          onChange={e => handleChangeNutrient(e, index)}
                          value={variant.title_ar || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          error={hasError('price')}
                          fullWidth
                          label="Price"
                          name="price"
                          onChange={e => handleChangeNutrient(e, index)}
                          value={variant.price || ''}
                          variant="outlined"
                        />
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>
              </TabPanel>
            </Box>
            <LoaderButton
              className={classes.submitButton}
              formState={formState}
              isLoading={false}
              title={'Update'}
            />
          </form>
        ) : (
          <CircularProgress color="primary" />
        )}
      </Box>
    </Modal>
  );
}

export default EditProduct;
