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
    [theme.breakpoints.up('xs')]: {
      margin: 'auto',
      maxHeight: '35px',
      zIndex: 2
    },
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
      maxWidth: '60px',
      maxHeight: '35px',
      zIndex: 2,
      fontSize: theme.spacing(1.8)
    }
  },
  divider: {
    [theme.breakpoints.up('xs')]: {
      margin: 'auto',
      width: '75%',
      border: 'solid',
      borderColor: '#ccc',
      borderWidth: '0.7px'
    },
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
      width: '20%',
      border: 'solid',
      borderColor: '#ccc',
      borderWidth: '0.7px'
    }
  },
  dividerHidden: {
    [theme.breakpoints.up('xs')]: {
      margin: 'auto',
      width: '75%',
      border: 'solid',
      borderColor: '#ccc',
      borderWidth: '0.7px',
      visibility: 'hidden'
    },
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
      width: '20%',
      border: 'solid',
      borderColor: '#ccc',
      borderWidth: '0.7px',
      visibility: 'hidden'
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

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSubChange = panel => (event, isExpanded) => {
    setSubExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordion}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography
            variant={'h4'}
            color={'primary'}
            className={classes.autoMargin}>
            Pizza
          </Typography>
          <Divider className={classes.divider} />
          <Button
            color="primary"
            className={classes.addIcon}
            onClick={() => console.log('Add')}
            size="large"
            variant="text">
            <AddCircleIcon className={classes.icon} />
          </Button>
          <Button
            color="secondary"
            className={classes.paddingZero}
            size="large"
            variant="text">
            <RemoveCircleIcon className={classes.icon} />
          </Button>
          <Button
            color="secondary"
            className={classes.editIcon}
            size="large"
            variant="text">
            <BuildCircleIcon className={clsx(classes.icon, classes.child)} />
            <EditIcon
              className={clsx(classes.secIcon, classes.child, classes.child2)}
            />
          </Button>
        </AccordionSummary>
        <AccordionDetails className={classes.flexColumn}>
          <Accordion
            expanded={subExpanded === 'panel2'}
            onChange={handleSubChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              className={classes.secondaryLevel}
              id="panel2bh-header">
              <Typography variant="h5" className={classes.autoMargin}>
                Margarita
              </Typography>
              <Divider className={classes.dividerHidden} />
              <Button
                color="default"
                className={classes.darkIcon}
                size="large"
                variant="text">
                <RemoveCircleIcon className={classes.icon} />
              </Button>
              <Button
                color="default"
                className={classes.darkIcon}
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
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className={classes.subHeader}>
                    <Typography variant="h6" className={classes.orange}>
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
                        <RemoveCircleOutlineIcon className={classes.smIcon} />
                      </Button>
                      <Button
                        color="default"
                        className={classes.darkIcon}
                        size="large"
                        variant="text">
                        <BuildCircleIcon
                          className={clsx(classes.smIcon, classes.child)}
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
                    <Typography variant="h6" className={classes.orange}>
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
                        <RemoveCircleOutlineIcon className={classes.smIcon} />
                      </Button>
                      <Button
                        color="default"
                        className={classes.darkIcon}
                        size="large"
                        variant="text">
                        <BuildCircleIcon
                          className={clsx(classes.smIcon, classes.child)}
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
                        <RemoveCircleOutlineIcon className={classes.smIcon} />
                      </Button>
                      <Button
                        color="default"
                        className={classes.darkIcon}
                        size="large"
                        variant="text">
                        <BuildCircleIcon
                          className={clsx(classes.smIcon, classes.child)}
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
          <Accordion
            expanded={subExpanded === 'panel3'}
            onChange={handleSubChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              className={classes.secondaryLevel}
              id="panel2bh-header">
              <Typography variant="h5" className={classes.autoMargin}>
                Supreme
              </Typography>
              <Divider className={classes.dividerHidden} />
              <Button
                color="default"
                className={classes.darkIcon}
                size="large"
                variant="text">
                <RemoveCircleIcon className={classes.icon} />
              </Button>
              <Button
                color="default"
                className={classes.darkIcon}
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
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={subExpanded === 'panel4'}
            onChange={handleSubChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              className={classes.secondaryLevel}
              id="panel2bh-header">
              <Typography variant="h5" className={classes.autoMargin}>
                Sea Food
              </Typography>
              <Divider className={classes.dividerHidden} />
              <Button
                color="default"
                className={classes.darkIcon}
                size="large"
                variant="text">
                <RemoveCircleIcon className={classes.icon} />
              </Button>
              <Button
                color="default"
                className={classes.darkIcon}
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
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordion}
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography
            variant={'h4'}
            color={'primary'}
            className={classes.autoMargin}>
            Burger
          </Typography>
          <Divider className={classes.divider} />
          <Button
            color="primary"
            className={classes.addIcon}
            onClick={() => console.log('Add')}
            size="large"
            variant="text">
            <AddCircleIcon className={classes.icon} />
          </Button>
          <Button
            color="secondary"
            className={classes.paddingZero}
            size="large"
            variant="text">
            <RemoveCircleIcon className={classes.icon} />
          </Button>
          <Button
            color="secondary"
            className={classes.editIcon}
            size="large"
            variant="text">
            <BuildCircleIcon className={clsx(classes.icon, classes.child)} />
            <EditIcon
              className={clsx(classes.secIcon, classes.child, classes.child2)}
            />
          </Button>
        </AccordionSummary>
        <AccordionDetails className={classes.flexColumn}>
          <Accordion
            expanded={subExpanded === 'panel5'}
            onChange={handleSubChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              className={classes.secondaryLevel}
              id="panel2bh-header">
              <Typography variant="h5" className={classes.autoMargin}>
                Cheese Burger
              </Typography>
              <Divider className={classes.dividerHidden} />
              <Button
                color="default"
                className={classes.darkIcon}
                size="large"
                variant="text">
                <RemoveCircleIcon className={classes.icon} />
              </Button>
              <Button
                color="default"
                className={classes.darkIcon}
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
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={subExpanded === 'panel6'}
            onChange={handleSubChange('panel6')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              className={classes.secondaryLevel}
              id="panel2bh-header">
              <Typography variant="h5" className={classes.autoMargin}>
                Beef Burger
              </Typography>
              <Divider className={classes.dividerHidden} />
              <Button
                color="default"
                className={classes.darkIcon}
                size="large"
                variant="text">
                <RemoveCircleIcon className={classes.icon} />
              </Button>
              <Button
                color="default"
                className={classes.darkIcon}
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
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

CreateFrom.propTypes = {
  className: PropTypes.string
};

export default CreateFrom;
