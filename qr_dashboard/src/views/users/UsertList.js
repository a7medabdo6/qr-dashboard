import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import axios from 'utils/axios';
import { Page, Paginate, SearchBar } from 'components';
import { Header, ProjectCard } from './components';
import { useGetAllUsersHook } from 'hooks/apis/Auth/index';
import { useSelector } from 'react-redux';
import SkeletonChildren from 'components/Skeleton/table';
import EmptySection from 'components/EmptySection';
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

const ProjectManagementList = () => {
  const [search, setsearch] = useState('');
  const [filters, setfilters] = useState({
    create_at_after: '',
    create_at_before: '',
    active: ''
  });
  const { isLoading, data } = useGetAllUsersHook(search, filters);
  const { allusers } = useSelector(state => state.UserInfo);
  const classes = useStyles();
  const [rowsPerPage] = useState(10);
  const [page] = useState(0);
  const [projects, setProjects] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  useEffect(() => {
    // let mounted = true;
    // const fetchProjects = () => {
    //   axios.get('/api/projects').then(response => {
    //     if (mounted) {
    //       setProjects(response.data.projects);
    //     }
    //   });
    // };
    // fetchProjects();
    // return () => {
    //   mounted = false;
    // };

    console.log(allusers, 'allusers');
  }, [data]);

  const handleFilter = values => {
    setfilters(values);
  };
  const handleSearch = text => {
    setsearch(text);
  };

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % allusers.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  // if (isLoading) {
  //   return <SkeletonChildren />;
  // }

  return (
    <Page className={classes.root} title="Project Management List">
      <Header />
      <SearchBar onFilter={handleFilter} onSearch={handleSearch} />
      {isLoading ? (
        <SkeletonChildren />
      ) : (
        <>
          <div className={classes.results}>
            <Typography color="textSecondary" gutterBottom variant="body2">
              {allusers.length} Records found. Page {page + 1} of{' '}
              {Math.ceil(allusers.length / rowsPerPage)}
            </Typography>
            {currentItems && currentItems.length > 0 ? (
              currentItems.map(project => (
                <>
                  {project.id != JSON.parse(localStorage.getItem('user')).id ? (
                    <ProjectCard key={project.id} project={project} />
                  ) : (
                    <></>
                  )}
                </>
              ))
            ) : (
              <EmptySection />
            )}
          </div>

          <div className={classes.paginate}>
            <Paginate
              pageCount={pageCount}
              itemOffset={itemOffset}
              projects={allusers}
              setPageCount={setPageCount}
              onPageChange={handlePageClick}
              itemsPerPage={itemsPerPage}
              setCurrentItems={setCurrentItems}
            />
          </div>
        </>
      )}
    </Page>
  );
};

export default ProjectManagementList;
