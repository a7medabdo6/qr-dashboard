import React from 'react';
import { Typography, Box, Modal, Button } from '@material-ui/core';
import { useParams } from 'react-router';
import { useModifyMenuHook } from 'hooks/apis/Menus';

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

function DeleteCategory({
  menu,
  categoryId,
  subcategoryId,
  openDeleteSubcategoryModal,
  handleCloseModal,
  setIsLoading,
  classes
}) {
  let { id } = useParams();

  const { mutate: UpdateMenuRequest } = useModifyMenuHook();

  const handleDeleteSubcategory = async () => {
    setIsLoading(true);
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
    ].subcategories
      .filter(cat => cat.id !== subcategoryId)
      .map(cat => {
        return { id: cat.id };
      });
    await UpdateMenuRequest(Menu);
    await setIsLoading(false);
    await handleCloseModal();
  };

  return (
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
  );
}

export default DeleteCategory;
