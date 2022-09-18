import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import SkeletonChildren from 'components/Skeleton/table';
import EmptySection from 'components/EmptySection';
import { Page, Paginate, SearchBar } from 'components';
import { Header, MenuCard } from './components';

import { useGetAllMenusHook } from 'hooks/apis/Menus';
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

const MenusList = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    create_at_after: '',
    create_at_before: '',
    active: ''
  });
  const { isLoading, data } = useGetAllMenusHook(search, filters);
  const { allMenus } = useSelector(state => state.Menus);

  const classes = useStyles();
  const [page] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemsPerPage, setitemsPerPage] = useState(3);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    console.log('allMenus: ', allMenus);
  }, [data]);

  const handleFilter = values => {
    setFilters(values);
  };
  const handleSearch = text => {
    setSearch(text);
  };

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % allMenus?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  if (isLoading) {
    return <SkeletonChildren />;
  }
  return (
    <Page className={classes.root} title="Menus Management List">
      <Header />
      <SearchBar onFilter={handleFilter} onSearch={handleSearch} />
      <div className={classes.results}>
        <Typography color="textSecondary" gutterBottom variant="body2">
          {allMenus.length} Records found. Page {page + 1} of{' '}
          {Math.ceil(allMenus.length / itemsPerPage)}
        </Typography>
        {currentItems && currentItems.length > 0 ? (
          currentItems.map(Menu => <MenuCard key={Menu.id} Menu={Menu} />)
        ) : (
          <EmptySection />
        )}
      </div>

      <div className={classes.paginate}>
        <Paginate
          pageCount={pageCount}
          itemOffset={itemOffset}
          projects={allMenus}
          setPageCount={setPageCount}
          onPageChange={handlePageClick}
          itemsPerPage={itemsPerPage}
          setCurrentItems={setCurrentItems}
        />
      </div>
    </Page>
  );
};

export default MenusList;
