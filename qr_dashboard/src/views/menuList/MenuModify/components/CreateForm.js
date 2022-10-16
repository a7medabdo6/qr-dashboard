import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  TextField,
  Checkbox,
  Typography,
  Select,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
  InputLabel,
  FormControl,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Button,
  Link
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import BuildCircleIcon from '@material-ui/icons/RadioButtonUnchecked';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import LoaderButton from 'components/Buttons';
import EmptySection from 'components/EmptySection';

import { useParams } from 'react-router-dom';
import {
  useCreateMenuHook,
  useGetOneMenuHook,
  useUpdateMenuHook
} from 'hooks/apis/Menus';

const useStyles = makeStyles(theme => ({
  root: {},
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
    borderColor: '#ccc',
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
  icon: {
    width: '35px',
    height: '35px'
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
    backgroundColor: '#e9e9e9'
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
    left: '20%',
    top: '20%',
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

const CreateFrom = props => {
  let { id } = useParams();
  const { data, isLoading: isLoadingData } = useGetOneMenuHook(id);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [subExpanded, setSubExpanded] = useState(false);
  const [productExpanded, setProductExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSubChange = panel => (event, isExpanded) => {
    setSubExpanded(isExpanded ? panel : false);
  };

  const handleProductChange = panel => (event, isExpanded) => {
    setProductExpanded(isExpanded ? panel : false);
  };
  if (isLoadingData) {
    return <div>Loading ....</div>;
  }
  return (
    <div className={classes.root}>
      {data?.data?.categories?.length > 0 ? (
        data?.data?.categories.map((category, index) => (
          <Accordion
            key={index}
            className={classes.accordion}
            expanded={expanded === index}
            onChange={handleChange(index)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography
                variant={'h4'}
                color={'primary'}
                className={classes.autoMargin}>
                {category?.title}
              </Typography>
              <Divider className={classes.divider} />
              <Button
                color="primary"
                className={classes.addIcon}
                onClick={() => console.log(category?.id)}
                size="large"
                variant="text">
                <AddCircleIcon className={classes.icon} />
              </Button>
              <Button
                color="secondary"
                className={classes.paddingZero}
                onClick={() => console.log(category?.id)}
                size="large"
                variant="text">
                <RemoveCircleIcon className={classes.icon} />
              </Button>
              <Button
                color="secondary"
                className={classes.editIcon}
                onClick={() => console.log(category?.id)}
                size="large"
                variant="text">
                <BuildCircleIcon
                  className={clsx(classes.icon, classes.child)}
                />
                <EditIcon
                  className={clsx(
                    classes.secIcon,
                    classes.child,
                    classes.child2
                  )}
                />
              </Button>
            </AccordionSummary>
            <AccordionDetails className={classes.flexColumn}>
              {category?.subcategories?.map((subCategory, index) => (
                <Accordion
                  key={index}
                  className={classes.accordion}
                  expanded={subExpanded === index}
                  onChange={handleSubChange(index)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography
                      variant={'h4'}
                      color={'primary'}
                      className={classes.autoMargin}>
                      {subCategory?.title}
                    </Typography>
                    <Divider className={classes.divider} />
                    <Button
                      color="primary"
                      className={classes.addIcon}
                      onClick={() => console.log(subCategory?.id)}
                      size="large"
                      variant="text">
                      <AddCircleIcon className={classes.icon} />
                    </Button>
                    <Button
                      color="secondary"
                      className={classes.paddingZero}
                      onClick={() => console.log(subCategory?.id)}
                      size="large"
                      variant="text">
                      <RemoveCircleIcon className={classes.icon} />
                    </Button>
                    <Button
                      color="secondary"
                      className={classes.editIcon}
                      onClick={() => console.log(subCategory?.id)}
                      size="large"
                      variant="text">
                      <BuildCircleIcon
                        className={clsx(classes.icon, classes.child)}
                      />
                      <EditIcon
                        className={clsx(
                          classes.secIcon,
                          classes.child,
                          classes.child2
                        )}
                      />
                    </Button>
                  </AccordionSummary>
                  <AccordionDetails className={classes.flexColumn}>
                    {subCategory?.products?.map((product, index) => (
                      <Accordion
                        key={index}
                        expanded={productExpanded === index}
                        onChange={handleProductChange(index)}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          className={classes.secondaryLevel}
                          id="panel2bh-header">
                          <Typography
                            variant="h5"
                            className={classes.autoMargin + ' product-h5-menu-editor'}>
                            <img src={product.image} className="product-thumb-menu-editor" />
                            {product?.title}
                          </Typography>
                          <Divider className={classes.dividerHidden} />
                          <Button
                            color="default"
                            onClick={() => console.log(product?.id)}
                            className={classes.darkIcon}
                            size="large"
                            variant="text">
                            <RemoveCircleIcon className={classes.icon} />
                          </Button>
                          <Button
                            color="default"
                            className={classes.darkIcon}
                            onClick={() => console.log(product?.id)}
                            size="large"
                            variant="text">
                            <BuildCircleIcon className={classes.icon} />
                            <EditIcon
                              className={clsx(
                                classes.secIcon,
                                classes.child,
                                classes.child2
                              )}
                            />
                          </Button>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <div className={classes.subHeader}>
                                <Typography
                                  variant="h6"
                                  className={classes.orange}>
                                  VARIANTS
                                </Typography>
                                <Button
                                  className={classes.editIcon}
                                  onClick={() => console.log('Add')}
                                  size="large"
                                  variant="text">
                                  <AddCircleIcon className={classes.smIcon} />
                                </Button>
                              </div>
                              <div className={classes.subData}>
                                <Typography
                                  variant="subtitle1"
                                  className={classes.subDataSubTitle}>
                                  Small
                                </Typography>
                                <span>
                                  <Button
                                    className={classes.darkIcon}
                                    onClick={() => console.log('Add')}
                                    size="large"
                                    variant="text">
                                    <RemoveCircleOutlineIcon
                                      className={classes.smIcon}
                                    />
                                  </Button>
                                  <Button
                                    color="default"
                                    className={classes.darkIcon}
                                    size="large"
                                    variant="text">
                                    <BuildCircleIcon
                                      className={clsx(
                                        classes.smIcon,
                                        classes.child
                                      )}
                                    />
                                    <EditIcon
                                      className={clsx(
                                        classes.smSecIcon,
                                        classes.child,
                                        classes.child3
                                      )}
                                    />
                                  </Button>
                                </span>
                              </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <div className={classes.subHeader}>
                                <Typography
                                  variant="h6"
                                  className={classes.orange}>
                                  MODIFIERS
                                </Typography>
                                <Button
                                  className={classes.editIcon}
                                  onClick={() => console.log('Add')}
                                  size="large"
                                  variant="text">
                                  <AddCircleIcon className={classes.smIcon} />
                                </Button>
                              </div>
                              <div className={classes.subData}>
                                <Typography
                                  variant="subtitle1"
                                  className={classes.subDataSubTitle}>
                                  Extra Cheese
                                </Typography>
                                <span>
                                  <Button
                                    className={classes.darkIcon}
                                    onClick={() => console.log('Add')}
                                    size="large"
                                    variant="text">
                                    <RemoveCircleOutlineIcon
                                      className={classes.smIcon}
                                    />
                                  </Button>
                                  <Button
                                    color="default"
                                    className={classes.darkIcon}
                                    size="large"
                                    variant="text">
                                    <BuildCircleIcon
                                      className={clsx(
                                        classes.smIcon,
                                        classes.child
                                      )}
                                    />
                                    <EditIcon
                                      className={clsx(
                                        classes.smSecIcon,
                                        classes.child,
                                        classes.child3
                                      )}
                                    />
                                  </Button>
                                </span>
                              </div>
                              <div className={classes.subData}>
                                <Typography
                                  variant="subtitle1"
                                  className={classes.subDataSubTitle}>
                                  No Olive
                                </Typography>
                                <span>
                                  <Button
                                    className={classes.darkIcon}
                                    onClick={() => console.log('Add')}
                                    size="large"
                                    variant="text">
                                    <RemoveCircleOutlineIcon
                                      className={classes.smIcon}
                                    />
                                  </Button>
                                  <Button
                                    color="default"
                                    className={classes.darkIcon}
                                    size="large"
                                    variant="text">
                                    <BuildCircleIcon
                                      className={clsx(
                                        classes.smIcon,
                                        classes.child
                                      )}
                                    />
                                    <EditIcon
                                      className={clsx(
                                        classes.smSecIcon,
                                        classes.child,
                                        classes.child3
                                      )}
                                    />
                                  </Button>
                                </span>
                              </div>
                            </Grid>
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <EmptySection />
      )}
    </div>
  );
};

CreateFrom.propTypes = {
  className: PropTypes.string
};

export default CreateFrom;
