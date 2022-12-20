import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import '../style.css';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Typography
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BuildCircleIcon from '@material-ui/icons/RadioButtonUnchecked';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Grid from '@material-ui/core/Grid';
import { Fragment } from 'react';

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
  dividerHidden: {
    margin: 'auto',
    border: 'solid',
    borderColor: '#ccc',
    borderWidth: '0.7px',
    visibility: 'hidden'
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
  productRemove: {
    padding: '0px',
    minWidth: 'auto',
    top: 16
  },
  icon: {
    width: '30px',
    height: '30px'
  },
  smIcon: {
    width: '22px',
    height: '22px'
  },
  secIcon: {
    width: '20px',
    height: '20px'
  },
  smSecIcon: {
    width: '12px',
    height: '12px'
  },
  editIcon: {
    color: '#fb8c01',
    padding: '0px',
    minWidth: 'auto'
  },
  flexColumn: {
    flexDirection: 'column',
    justifyContent: 'space'
  },
  secondaryLevel: {
    backgroundColor: '#f0f0f0'
  },
  darkIcon: {
    color: '#707070',
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
  },
  child3: {
    left: '22%',
    top: '22%',
    position: 'absolute'
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.up('xs')]: {
      padding: '15px 35px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '15px 5px'
    }
  },
  subData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.up('xs')]: {
      padding: '6px 35px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '6px 5px'
    }
  },
  orange: {
    color: '#fb8c01'
  },
  subDataSubTitle: {
    overflow: 'clip',
    maxHeight: '35px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '150px'
    }
  }
}));
function SubcategoriesList(props) {
  const classes = useStyles();
  const {
    category,
    subExpanded,
    handleExpand,
    handleOpenDeleteSubModal,
    handleOpenEditSubcategoryModal,
    handleOpenAddProductModal,
    handleOpenUpdateProductModal,
    handleOpenDeleteProductModal
  } = props;
  return (
    <AccordionDetails className={classes.flexColumn}>
      {category?.subcategories?.map((subCategory, index) => (
        <Accordion
          key={index}
          className={classes.accordion}
          expanded={subExpanded === index}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                onClick={() => handleExpand('subcategory', index)}
              />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography
              variant={'h4'}
              color={'primary'}
              className={classes.autoMargin}
              onClick={() => handleExpand('subcategory', index)}>
              {subCategory?.title}
            </Typography>
            <Divider className={classes.divider} />
            <Button
              color="primary"
              className={classes.addIcon}
              onClick={() =>
                handleOpenAddProductModal(category?.id, subCategory?.id)
              }
              size="large"
              variant="text">
              <AddCircleIcon className={classes.icon} />
            </Button>
            <Button
              color="secondary"
              className={classes.paddingZero}
              onClick={() =>
                handleOpenDeleteSubModal(category?.id, subCategory?.id)
              }
              size="large"
              variant="text">
              <RemoveCircleIcon className={classes.icon} />
            </Button>
            <Button
              color="secondary"
              className={classes.editIcon}
              onClick={() =>
                handleOpenEditSubcategoryModal(category?.id, subCategory?.id)
              }
              size="large"
              variant="text">
              <BuildCircleIcon className={clsx(classes.icon, classes.child)} />
              <EditIcon
                className={clsx(classes.secIcon, classes.child, classes.child2)}
              />
            </Button>
          </AccordionSummary>
          <AccordionDetails className={classes.flexColumn}>
            <Grid container spacing={3}>
              {subCategory?.products?.map((product, index) => (
                <Fragment key={index}>
                  <Grid item xs={12} md={3}>
                    <a href="#">
                      <Button
                        color="secondary"
                        className={classes.productRemove}
                        onClick={() =>
                          handleOpenDeleteProductModal(
                            category?.id,
                            subCategory?.id,
                            product?.id
                          )
                        }
                        size="large"
                        variant="text">
                        <RemoveCircleIcon className={classes.icon} />
                      </Button>
                      <div
                        style={{marginTop:'20px'}}
                        className="product-card"
                        onClick={() =>
                          handleOpenUpdateProductModal(product?.id)
                        }>
                        <img src={product?.image} />
                        <Typography
                          variant="h5"
                          className={
                            classes.autoMargin + ' product-h5-menu-editor my-2'
                          }>
                          {product?.title}
                        </Typography>
                      </div>
                    </a>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </AccordionDetails>
  );
}

export default SubcategoriesList;
