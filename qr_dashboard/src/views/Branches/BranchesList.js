import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import SkeletonChildren from 'components/Skeleton/table';
import EmptySection from 'components/EmptySection';
import axios from 'utils/axios';
import { Page, Paginate, SearchBar } from 'components';
import { Header, ProjectCard } from './components';
import { useGetAllBranchesHook } from 'hooks/apis/Branches';
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

const ProjectManagementList = () => {
  const [search, setsearch] = useState('');
  const [filters, setfilters] = useState({
    create_at_after: '',
    create_at_before: '',
    active: ''
  });
  const { isLoading, data } = useGetAllBranchesHook(search, filters);
  const { allbranches } = useSelector(state => state.Branches);
  const userInfo = useSelector(state => state.UserInfo.user);

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

    console.log(allbranches, 'allbranches');
  }, [data]);

  const handleFilter = values => {
    setfilters(values);
  };
  const handleSearch = text => {
    setsearch(text);
  };

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % allbranches?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  // if (isLoading) {
  //   return <SkeletonChildren />;
  // }
  return (
    <Page className={classes.root} >
      <Header />
      <SearchBar onFilter={handleFilter} onSearch={handleSearch} />
      {isLoading ? (
        <SkeletonChildren />
      ) : (
        <>
          <div className={classes.results}>
            <Typography color="textSecondary" gutterBottom variant="body2">
              {/* {allbranches.length} Records found. Page {page + 1} of{' '}
              {Math.ceil(allbranches.length / rowsPerPage)} */}
            </Typography>
            {currentItems && currentItems.length > 0 ? (
              currentItems.map(project => {
                // if (userInfo.branches.includes(project.id)) {
                  return (
                    <>
                      <ProjectCard key={project.id} project={project} />
                    </>
                  );
                // }
                // return <></>;
              })
            ) : (
              <EmptySection />
            )}
          </div>

          <div className={classes.paginate}>
            <Paginate
              pageCount={pageCount}
              itemOffset={itemOffset}
              projects={allbranches}
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
