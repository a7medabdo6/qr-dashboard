import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import '../style.css';
import Menu from '@material-ui/core/Menu';

import {
  Typography,
  MenuItem,
  Accordion,
  AccordionSummary,
  Divider,
  Button,
  Box
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import BuildCircleIcon from '@material-ui/icons/RadioButtonUnchecked';
import EditIcon from '@material-ui/icons/Edit';
import SubcategoriesList from './SubcategoriesList';

const useStyles = makeStyles(theme => ({
  accordion: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  autoMargin: {
    marginTop: 'auto',
    marginBottom: 'auto',
    maxHeight: '35px',
    zIndex: 2,
    [theme.breakpoints.up('xs')]: {
      maxWidth: '300px',
      minWidth: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100px',
      minWidth: '60px',
      fontSize: theme.spacing(1.8)
    }
  },
  divider: {
    margin: 'auto',
    border: 'solid',
    borderColor: '#e4e4e4',
    borderWidth: '0.7px',
    [theme.breakpoints.up('xs')]: {
      width: '75%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '10%'
    }
  },
  addIcon: {
    color: '#00b41e',
    padding: '0px',
    minWidth: 'auto'
  },
  paddingZero: {
    padding: '0px',
    minWidth: 'auto'
  },
  icon: {
    width: '30px',
    height: '30px'
  },
  secIcon: {
    width: '20px',
    height: '20px'
  },
  editIcon: {
    color: '#fb8c01',
    padding: '0px',
    minWidth: 'auto'
  },
  child: {
    position: 'relative',
    top: '0px'
  },
  child2: {
    left: '17%',
    top: '17%',
    position: 'absolute'
  }
}));

function CategoryItem(props) {
  const classes = useStyles();
  const {
    handleExpand,
    handleClick,
    handleClose,
    handleOpenDeleteCatModal,
    handleOpenEditCategoryModal,
    handleAddNewSubCategory,
    handleAddExistingSubCategory,
    expanded,
    anchorEl,
    category,
    index
  } = props;
  return (
    <Accordion
      key={index}
      className={classes.accordion}
      expanded={expanded === index}>
      <AccordionSummary
        expandIcon={
          <Box onClick={() => handleExpand('category', index)}>
            <ExpandMoreIcon />
          </Box>
        }
        aria-controls="panel1bh-content"
        id="panel1bh-header">
        <Typography
          variant={'h4'}
          color={'secondary'}
          className={classes.autoMargin}
          onClick={() => handleExpand('category', index)}>
          {category?.title}
        </Typography>
        <Divider className={classes.divider} />

        <Button
          color="primary"
          className={classes.addIcon}
          onClick={e => handleClick(e, category?.id)}
          size="large"
          variant="text">
          <AddCircleIcon className={classes.icon} />
        </Button>

        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleAddNewSubCategory}>Add New</MenuItem>
          <MenuItem onClick={handleAddExistingSubCategory}>
            Add From Existing
          </MenuItem>
        </Menu>

        <Button
          color="secondary"
          className={classes.paddingZero}
          onClick={() => handleOpenDeleteCatModal(category?.id)}
          size="large"
          variant="text">
          <RemoveCircleIcon className={classes.icon} />
        </Button>
        <Button
          color="secondary"
          className={classes.editIcon}
          onClick={() => handleOpenEditCategoryModal(category?.id)}
          size="large"
          variant="text">
          <BuildCircleIcon className={clsx(classes.icon, classes.child)} />
          <EditIcon
            className={clsx(classes.secIcon, classes.child, classes.child2)}
          />
        </Button>
      </AccordionSummary>
      <SubcategoriesList {...props} />
    </Accordion>
  );
}

export default CategoryItem;
