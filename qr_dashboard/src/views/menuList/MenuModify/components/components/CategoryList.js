import React from 'react';
import '../style.css';
import EmptySection from 'components/EmptySection';
import CategoryItem from './CategoryItem';

function Category(props) {
  const { data } = props;
  return (
    <div>
      {data?.data?.categories?.length > 0 ? (
        data?.data?.categories.map((category, index) => (
          <CategoryItem
            key={index}
            category={category}
            index={index}
            {...props}
          />
        ))
      ) : (
        <EmptySection />
      )}
    </div>
  );
}

export default Category;
