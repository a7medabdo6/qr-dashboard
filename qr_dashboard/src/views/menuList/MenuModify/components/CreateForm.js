import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import './style.css';
import gradients from 'utils/gradients';
import { useParams } from 'react-router-dom';
import { useGetOneMenuHook } from 'hooks/apis/Menus';

import Header from './components/Header';
import CategoryList from './components/CategoryList';

import AddCategory from './components/Modals/AddCategory';
import AddExistingCategory from './components/Modals/AddExistingCategory';
import EditCategory from './components/Modals/EditCategory';
import DeleteCategory from './components/Modals/DeleteCategory';
import AddSubCategory from './components/Modals/AddSubCategory';
import AddExistingSubCategory from './components/Modals/AddExistingSubCategory';
import EditSubCategory from './components/Modals/EditSubCategory';
import DeleteSubCategory from './components/Modals/DeleteSubCategory';
import AddProduct from './components/Modals/AddProduct';
import DeleteProduct from './components/Modals/DeleteProduct';
import EditProduct from './components/Modals/EditProduct';

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
    backgroundImage: gradients.grey,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    margin: '0 10px',
    height: 44,
    width: 44,
    fontSize: 32
  },
  smIcon: {
    backgroundImage: gradients.grey,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    height: 22,
    width: 22,
    fontSize: 32
  },
  addIcon: {
    margin: '0px 13px',
    padding: '0px',
    minWidth: 'auto'
  },
  avatar: {
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    margin: 'auto 10px',
    height: 44,
    width: 44,
    fontSize: 32
  }
}));

const CreateFrom = () => {
  let { id } = useParams();
  const { data, isLoading: isLoadingData } = useGetOneMenuHook(id);

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [subExpanded, setSubExpanded] = useState(false);
  const [productExpanded, setProductExpanded] = useState(false);
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
  const [openUpdateProductModal, setOpenUpdateProductModal] = useState(false);
  const [openDeleteProductModal, setOpenDeleteProductModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [categoryId, setCategoryId] = useState(false);
  const [subcategoryId, setSubcategoryId] = useState(false);
  const [productId, setProductId] = useState(false);

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
    setCategoryId(categoryId);
  };

  const handleOpenEditSubcategoryModal = (categoryId, subcategoryId) => {
    setOpenEditSubcategoryModal(true);
    setCategoryId(categoryId);
    setSubcategoryId(subcategoryId);
  };

  const handleAddNewSubCategory = () => {
    setOpenAddSubCategoryModal(true);
    handleClose();
  };

  const handleAddExistingSubCategory = () => {
    setOpenAddExistingSubCategoryModal(true);
    handleClose();
  };

  const handleOpenAddProductModal = (categoryId, subcategoryId) => {
    setCategoryId(categoryId);
    setSubcategoryId(subcategoryId);
    setOpenAddProductModal(true);
  };

  const handleOpenDeleteProductModal = (
    categoryId,
    subcategoryId,
    productId
  ) => {
    setCategoryId(categoryId);
    setSubcategoryId(subcategoryId);
    setProductId(productId);
    setOpenDeleteProductModal(true);
  };

  const handleOpenUpdateProductModal = productId => {
    setProductId(productId);
    setOpenUpdateProductModal(true);
  };

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
        handleOpenUpdateProductModal={handleOpenUpdateProductModal}
        handleOpenDeleteProductModal={handleOpenDeleteProductModal}
      />

      {openModal && (
        <AddCategory
          menu={data?.data}
          openModal={openModal}
          handleCloseModal={() => setOpenModal(false)}
          classes={classes}
        />
      )}

      {openAddExistingCategoryModal && (
        <AddExistingCategory
          menu={data?.data}
          openAddExistingCategoryModal={openAddExistingCategoryModal}
          handleCloseModal={() => setOpenAddExistingCategoryModal(false)}
          classes={classes}
        />
      )}

      {openEditCategoryModal && (
        <EditCategory
          menu={data?.data}
          categoryId={categoryId}
          openEditCategoryModal={openEditCategoryModal}
          handleCloseModal={() => {
            setOpenEditCategoryModal(false);
            setCategoryId(false);
          }}
          classes={classes}
        />
      )}

      {openDeleteCategoryModal && (
        <DeleteCategory
          menu={data?.data}
          categoryId={categoryId}
          openDeleteCategoryModal={openDeleteCategoryModal}
          handleCloseModal={() => {
            setOpenDeleteCategoryModal(false);
            setCategoryId(false);
          }}
          setIsLoading={setIsLoading}
          classes={classes}
        />
      )}

      {openAddSubCategoryModal && (
        <AddSubCategory
          menu={data?.data}
          categoryId={categoryId}
          openAddSubCategoryModal={openAddSubCategoryModal}
          handleCloseModal={() => {
            setOpenAddSubCategoryModal(false);
            setCategoryId(false);
          }}
          classes={classes}
        />
      )}

      {openAddExistingSubCategoryModal && (
        <AddExistingSubCategory
          menu={data?.data}
          categoryId={categoryId}
          openAddExistingSubCategoryModal={openAddExistingSubCategoryModal}
          handleCloseModal={() => {
            setOpenAddExistingSubCategoryModal(false);
            setCategoryId(false);
          }}
          classes={classes}
        />
      )}

      {openEditSubcategoryModal && (
        <EditSubCategory
          menu={data?.data}
          categoryId={categoryId}
          subcategoryId={subcategoryId}
          openEditSubcategoryModal={openEditSubcategoryModal}
          handleCloseModal={() => {
            setOpenEditSubcategoryModal(false);
            setCategoryId(false);
            setSubcategoryId(false);
          }}
          classes={classes}
        />
      )}

      {openDeleteSubcategoryModal && (
        <DeleteSubCategory
          menu={data?.data}
          categoryId={categoryId}
          subcategoryId={subcategoryId}
          openDeleteSubcategoryModal={openDeleteSubcategoryModal}
          handleCloseModal={() => {
            setOpenDeleteSubcategoryModal(false);
            setCategoryId(false);
            setSubcategoryId(false);
          }}
          setIsLoading={setIsLoading}
          classes={classes}
        />
      )}

      {openAddProductModal && (
        <AddProduct
          menu={data?.data}
          categoryId={categoryId}
          subcategoryId={subcategoryId}
          openAddProductModal={openAddProductModal}
          handleCloseModal={() => {
            setOpenAddProductModal(false);
            setCategoryId(false);
            setSubcategoryId(false);
          }}
          classes={classes}
        />
      )}

      {openUpdateProductModal && (
        <EditProduct
          productId={productId}
          openUpdateProductModal={openUpdateProductModal}
          handleCloseModal={() => {
            setOpenUpdateProductModal(false);
            setCategoryId(false);
            setSubcategoryId(false);
            setProductId(false);
          }}
          classes={classes}
        />
      )}

      {openDeleteProductModal && (
        <DeleteProduct
          menu={data?.data}
          categoryId={categoryId}
          subcategoryId={subcategoryId}
          productId={productId}
          openDeleteProductModal={openDeleteProductModal}
          handleCloseModal={() => {
            setOpenDeleteProductModal(false);
            setCategoryId(false);
            setSubcategoryId(false);
            setProductId(false);
          }}
          classes={classes}
        />
      )}
    </>
  );
};

CreateFrom.propTypes = {
  className: PropTypes.string
};

export default CreateFrom;
