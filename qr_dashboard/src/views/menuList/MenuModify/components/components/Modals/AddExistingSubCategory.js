import React, { useState } from 'react';
import {
  Typography,
  Select,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
  InputLabel,
  FormControl,
  Modal
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/styles';
import { useParams } from 'react-router';
import LoaderButton from 'components/Buttons';
import { useModifyMenuHook } from 'hooks/apis/Menus';
import { useGetSubcategoryHook } from 'hooks/apis/Category';

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

function AddExistingSubCategory({
  menu,
  categoryId,
  openAddExistingSubCategoryModal,
  handleCloseModal,
  classes
}) {
  let { id } = useParams();
  const theme = useTheme();
  const {
    mutate: UpdateMenuRequest,
    isLoading: isLoadingUpdate
  } = useModifyMenuHook();

  const { data: Subcategories } = useGetSubcategoryHook();

  const [selectedCategory, setSelectedCategories] = useState([]);

  const [multiFormState, setMultiFormState] = useState({
    isValid: false
  });

  const handleChangeMulti = event => {
    const {
      target: { value }
    } = event;
    setSelectedCategories([...value]);
    setMultiFormState({
      isValid: value?.length > 0 ? true : false
    });
  };

  const handleAddExistingSubcategory = async event => {
    event.preventDefault();
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
    selectedCategory.forEach(category => {
      Menu.categories[catIndex].subcategories.push({ id: category.id });
    });
    await UpdateMenuRequest(Menu);
    setMultiFormState(false);
    setSelectedCategories([]);
    handleCloseModal();
  };

  return (
    <Modal open={openAddExistingSubCategoryModal} onClose={handleCloseModal}>
      <Box sx={{ ...ModalStyle }}>
        <form onSubmit={handleAddExistingSubcategory}>
          <Typography
            variant="h4"
            style={{ textAlign: 'initial', marginBottom: '20px' }}>
            Add Existing Subcategory
          </Typography>
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
  );
}

export default AddExistingSubCategory;
