import React from 'react';
import '../style.css';
import EmptySection from 'components/EmptySection';
import CategoryItem from './CategoryItem';

function Category({
  handleExpand,
  handleClick,
  handleClose,
  handleOpenDeleteCatModal,
  handleOpenDeleteSubModal,
  handleOpenEditCategoryModal,
  handleOpenEditSubcategoryModal,
  handleAddNewSubCategory,
  handleAddExistingSubCategory,
  handleOpenAddProductModal,
  data,
  expanded,
  anchorEl,
  subExpanded,
  productExpanded
}) {
  return (
    <div>
      {data?.data?.categories?.length > 0 ? (
        data?.data?.categories.map((category, index) => (
          <CategoryItem
            key={index}
            category={category}
            index={index}
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
            expanded={expanded}
            anchorEl={anchorEl}
            subExpanded={subExpanded}
            productExpanded={productExpanded}
          />
        ))
      ) : (
        <EmptySection />
      )}
    </div>
  );
}

export default Category;
