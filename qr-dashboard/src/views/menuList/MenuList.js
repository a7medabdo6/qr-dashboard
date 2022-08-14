import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import axios from 'utils/axios';
import { Page, Paginate, SearchBar } from 'components';
import { Header, ProjectCard } from './components';

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
  const classes = useStyles();
  const [rowsPerPage] = useState(10);
  const [page] = useState(0);
  const [projects, setProjects] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  
  const [itemsPerPage, setitemsPerPage] = useState(3);
  const [itemOffset, setItemOffset] = useState(0);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  useEffect(() => {
    let mounted = true;

    const fetchProjects = () => {
      axios.get('/api/projects').then(response => {
        if (mounted) {
          setProjects(response.data.projects);
        }
      });
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  const handleFilter = () => {};
  const handleSearch = () => {};

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % projects.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);

  };
 
  return (
    <Page
      className={classes.root}
      title="Project Management List"
    >
      <Header />
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      <div className={classes.results}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {projects.length} Records found. Page {page + 1} of{' '}
          {Math.ceil(projects.length / rowsPerPage)}
        </Typography>
       { console.log(currentItems,"currentItems")}
        {currentItems && currentItems.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate pageCount={3} itemOffset={itemOffset} projects={projects} setPageCount={setPageCount} onPageChange={handlePageClick} itemsPerPage={itemsPerPage} setCurrentItems={setCurrentItems} />
      </div>
    </Page>
  );
};

export default ProjectManagementList;
