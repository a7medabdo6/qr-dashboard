import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';
import ReactPaginate from 'react-paginate';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    listStyle: 'none',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  active: {},
  activeLink: {},
  break: {},
  breakLink: {},
  disabled: {},
  next: {
    marginLeft: theme.spacing(1)
  },
  nextLink: {
    padding: '6px 16px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: colors.blueGrey[50]
    }
  },
  page: {},
  pageLink: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    outline: 'none',
    cursor: 'pointer',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'block',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
      color: theme.palette.text.primary
    },
    '&$activeLink': {
      backgroundColor: colors.blueGrey[50],
      color: theme.palette.text.primary
    }
  },
  previous: {
    marginRight: theme.spacing(1)
  },
  previousLink: {
    padding: '6px 16px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: colors.blueGrey[50]
    }
  }
}));

const Paginate = props => {
  const {
    pageCount,
    pageRangeDisplayed,
    onPageChange,
    className,
    setCurrentItems,
    itemsPerPage,
    itemOffset,
    setPageCount,
    projects,
    ...rest
  } = props;
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`, projects);
    setCurrentItems(projects.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(projects.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, projects]);
  const classes = useStyles();

  return (
    <ReactPaginate
      activeClassName={classes.active}
      activeLinkClassName={classes.activeLink}
      breakClassName={classes.break}
      breakLabel="..."
      breakLinkClassName={classes.breakLink}
      containerClassName={clsx(classes.root, className)}
      disabledClassName={classes.disabled}
      marginPagesDisplayed={2}
      nextClassName={classes.next}
      nextLabel={pageCount > 1 ? 'next' : ''}
      nextLinkClassName={classes.nextLink}
      onPageChange={onPageChange}
      pageClassName={classes.page}
      pageCount={pageCount > 1 ? pageCount : ''}
      pageLinkClassName={classes.pageLink}
      pageRangeDisplayed={pageRangeDisplayed}
      previousClassName={classes.previous}
      previousLabel={pageCount > 1 ? 'previous' : ''}
      previousLinkClassName={classes.previousLink}
      subContainerClassName="pages pagination"
      {...rest}
    />
  );
};

Paginate.propTypes = {
  className: PropTypes.string,
  onPageChange: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageRangeDisplayed: PropTypes.number.isRequired
};

Paginate.defaultProps = {
  onPageChange: () => {},
  pageRangeDisplayed: 5
};

export default Paginate;
