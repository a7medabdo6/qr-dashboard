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
import { useGetMainCategoryHook } from 'hooks/apis/Category';

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

function AddExistingCategory({
  menu,
  openAddExistingCategoryModal,
  handleCloseModal,
  classes
}) {
  let { id } = useParams();
  const theme = useTheme();
  const {
    mutate: UpdateMenuRequest,
    isLoading: isLoadingUpdate
  } = useModifyMenuHook();

  const { data: Categories } = useGetMainCategoryHook();

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

  const handleAddExistingCategory = async event => {
    event.preventDefault();
    let Menu = menu;
    Menu.id = id;
    Menu.categories = Menu.categories.map(cat => {
      return { id: cat.id };
    });
    selectedCategory.forEach(category => {
      Menu.categories.push({ id: category.id });
    });
    await UpdateMenuRequest(Menu);
    setMultiFormState(false);
    setSelectedCategories([]);
    handleCloseModal();
  };

  return (
    <Modal open={openAddExistingCategoryModal} onClose={handleCloseModal}>
      <Box sx={{ ...ModalStyle }}>
        <form onSubmit={handleAddExistingCategory}>
          <Typography
            variant="h4"
            style={{ textAlign: 'initial', marginBottom: '20px' }}>
            Add Existing Category
          </Typography>
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
                        return menu?.categories?.every(allCategories => {
                          return category.id !== allCategories.id;
                        });
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
  );
}

export default AddExistingCategory;
