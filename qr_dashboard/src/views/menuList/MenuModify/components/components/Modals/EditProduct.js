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
  Tab,
  FormControl,
  InputLabel,
  Select,
  Chip,
  OutlinedInput,
  MenuItem,
  Checkbox
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import validate from 'validate.js';
import moment from 'moment';

import LoaderButton from 'components/Buttons';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PropTypes from 'prop-types';
import {
  useGetProductHook,
  useUpdateProductHook,
  useUpdateProductImageHook
} from 'hooks/apis/Products';
import { useGetAllIngredientsHook } from 'hooks/apis/Ingredients';
import { useGetAllNutrientsHook } from 'hooks/apis/Nutrients/Types';
import { useGetAllNutrientsHook as useGetAllNutrientsUnitsHook } from 'hooks/apis/Nutrients/Units';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/styles';

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

const productSchema = {
  title_en: {
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
  const theme = useTheme();

  const [formState, setFormState] = useState({
    isValid: false,
    values: { active: true, order: 1 },
    touched: {},
    errors: {}
  });

  const { data: product } = useGetProductHook(productId);
  const { mutate: UpdateProductImage } = useUpdateProductImageHook();
  const { mutate: UpdateProduct } = useUpdateProductHook();

  const [Product, setProduct] = useState(false);

  const [modifiers, setModifiers] = useState([]);
  const [variants, setVariants] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [nutrients, setNutrients] = useState([]);

  const [logo, setLogo] = useState(false);
  const [selectedFile, setSelectedFile] = useState(false);

  useGetAllIngredientsHook();
  const { Ingredients } = useSelector(state => state.Ingredient);

  useGetAllNutrientsHook();
  const { Types } = useSelector(state => state.Nutrients);

  useGetAllNutrientsUnitsHook();
  const { Units } = useSelector(state => state.Nutrients);

  useEffect(() => {
    const errors = validate(formState.values, productSchema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  useEffect(() => {
    if (product?.data) {
      setProduct(product?.data);
    }
  }, [product?.data]);

  useEffect(() => {
    if (Product) {
      const errors = validate(Product, productSchema);
      setModifiers(Product.modifiers);
      setVariants(Product.varients);
      setIngredients(
        Ingredients?.filter(ingredient =>
          Product.ingredients.map(ing => ing.id).includes(ingredient.id)
        )
      );
      setNutrients(
        Product.nutrients.map(nutrient => {
          return {
            ...nutrient,
            type: nutrient.type.id,
            unit: nutrient.unit.id
          };
        })
      );
      setFormState({
        values: { ...Product },
        isValid: errors ? false : true,
        errors: errors || {},
        touched: {}
      });
    }
  }, [Product]);

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

  const handleAddNutrient = () => {
    let newNutrients = [...nutrients];
    newNutrients.push({
      type: '',
      unit: '',
      value: '',
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
      varients: variants,
      ingredients: ingredients.map(ingredient => {
        return { id: ingredient.id };
      }),
      nutrients
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
    setProduct(false);
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

  const handleChangeMulti = event => {
    const {
      target: { value }
    } = event;
    const ingredients =
      (event.target.type === typeof value) === 'string'
        ? value.split(',')
        : value;
    setIngredients(ingredients);
  };

  return (
    <Modal open={openUpdateProductModal} onClose={closeModal}>
      <Box sx={{ ...ModalStyle }}>
        {Product ? (
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
                        error={hasError('title_en')}
                        fullWidth
                        helperText={
                          hasError('title_en')
                            ? formState.errors.title_en[0]
                            : null
                        }
                        label="title (en)"
                        name="title_en"
                        onChange={handleChange}
                        value={formState.values.title_en || ''}
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
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value={tab} index={1}>
                <Grid container item spacing={2} xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    <Button
                      color="primary"
                      onClick={handleAddModifier}
                      variant="contained">
                      Add Modifier
                    </Button>
                  </Grid>
                  {modifiers?.map((modifier, index) => (
                    <Fragment key={index}>
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
                      <Grid item xs={12} md={3}>
                        <Button
                          style={{ marginInline: '5px' }}
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={() => handleRemoveModifier(index)}>
                          delete
                          <DeleteForeverIcon />
                        </Button>
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value={tab} index={2}>
                <Grid container item spacing={2} xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    <Button
                      color="primary"
                      onClick={handleAddVariant}
                      variant="contained">
                      Add Variant
                    </Button>
                  </Grid>
                  {variants?.map((variant, index) => (
                    <Fragment key={index}>
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
                      <Grid item xs={12} md={3}>
                        <Button
                          style={{ marginInline: '5px' }}
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={() => handleRemoveVariant(index)}>
                          delete
                          <DeleteForeverIcon />
                        </Button>
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value={tab} index={3}>
                <Grid container item spacing={2} xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    <FormControl fullWidth>
                      <InputLabel
                        id="multiple-Ingredient-label"
                        className={classes.label}>
                        {`Ingredient(s)`}
                      </InputLabel>
                      <Select
                        name="Ingredients"
                        labelId="multiple-Ingredient-label"
                        id="Ingredient-label"
                        multiple
                        value={ingredients || []}
                        onChange={handleChangeMulti}
                        input={
                          <OutlinedInput
                            id="Ingredient-label"
                            label="Ingredient(s)"
                          />
                        }
                        renderValue={selected => (
                          <Box
                            sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: 0.5
                            }}>
                            {selected.map(Ingredient => (
                              <Chip
                                key={Ingredient.id}
                                label={Ingredient.name}
                              />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}>
                        {Ingredients?.map(Ingredient => (
                          <MenuItem
                            key={Ingredient.id}
                            value={Ingredient}
                            style={getStyles(
                              Ingredient,
                              formState.values.Ingredient || '',
                              theme
                            )}>
                            {Ingredient.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={tab} index={4}>
                <Grid container item spacing={2} xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    <Button
                      color="primary"
                      onClick={handleAddNutrient}
                      variant="contained">
                      Add Nutrients
                    </Button>
                  </Grid>
                  {nutrients?.map((variant, index) => (
                    <Fragment key={index}>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                          label="Value"
                          name="value"
                          onChange={e => handleChangeNutrient(e, index)}
                          value={variant.value || ''}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>Type</InputLabel>
                          <Select
                            name="type"
                            value={variant.type}
                            onChange={e => handleChangeNutrient(e, index)}
                            MenuProps={MenuProps}>
                            {Types?.map(type => (
                              <MenuItem key={type.id} value={type.id}>
                                {type.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>Unit</InputLabel>
                          <Select
                            name="unit"
                            value={variant.unit}
                            onChange={e => handleChangeNutrient(e, index)}
                            MenuProps={MenuProps}>
                            {Units?.map(unit => (
                              <MenuItem key={unit.id} value={unit.id}>
                                {unit.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Button
                          style={{ marginInline: '5px' }}
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={() => handleRemoveNutrient(index)}>
                          delete
                          <DeleteForeverIcon />
                        </Button>
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
