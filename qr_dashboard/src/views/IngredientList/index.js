import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import SkeletonChildren from 'components/Skeleton/table';
import EmptySection from 'components/EmptySection';
import { Page, Paginate, SearchBar } from 'components';
import { Header, IngredientCard } from './components';
import useRouter from 'utils/useRouter';

import { useGetAllIngredientsHook } from 'hooks/apis/Ingredients';
import { useSelector } from 'react-redux';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const CategoryList = () => {
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    create_at_after: '',
    create_at_before: '',
    active: ''
  });
  const { isLoading, data } = useGetAllIngredientsHook(search, filters);
  const { Ingredients } = useSelector(state => state.Ingredient);

  const classes = useStyles();
  const [page] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const userInfo = useSelector(state => state.UserInfo.user);

  const [itemsPerPage, setitemsPerPage] = useState(3);
  const [itemOffset, setItemOffset] = useState(0);

  const handleFilter = values => {
    setFilters(values);
  };
  const handleSearch = text => {
    setSearch(text);
  };

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % Ingredients?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (userInfo?.branches?.length > 0) {
      router.history.push('/');
    }
  }, [data]);

  if (isLoading) {
    return <SkeletonChildren />;
  }

  return (
    <Page className={classes.root} title="Category Management List">
      <Header />
      <SearchBar onFilter={handleFilter} onSearch={handleSearch} />
      <div className={classes.results}>
        <Typography color="textSecondary" gutterBottom variant="body2">
          {Ingredients.length} Records found. Page {page + 1} of{' '}
          {Math.ceil(Ingredients.length / itemsPerPage)}
        </Typography>
        {currentItems && currentItems.length > 0 ? (
          currentItems.map(Ingredient => (
            <IngredientCard key={Ingredient.id} Ingredient={Ingredient} />
          ))
        ) : (
          <EmptySection />
        )}
      </div>

      <div className={classes.paginate}>
        <Paginate
          pageCount={pageCount}
          itemOffset={itemOffset}
          projects={Ingredients}
          setPageCount={setPageCount}
          onPageChange={handlePageClick}
          itemsPerPage={itemsPerPage}
          setCurrentItems={setCurrentItems}
        />
      </div>
    </Page>
  );
};

export default CategoryList;
