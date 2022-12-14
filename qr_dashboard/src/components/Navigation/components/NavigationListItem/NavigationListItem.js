/* eslint-disable react/display-name */
import React, { useState, forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { ListItem, Button, Collapse, colors } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useTranslation } from 'react-i18next';

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

const useStyles = makeStyles(theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
    color: 'white'
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: 'white',
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%'
  },
  buttonLeaf: {
    color: 'white',
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  icon: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  expandIcon: {
    marginLeft: 'auto',
    height: 16,
    width: 16,
    color: 'white'
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  active: {
    color: 'rgb(251, 140, 0)',
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: 'rgb(251, 140, 0)'
    }
  }
}));

const NavigationListItem = props => {
  const { t, i18n } = useTranslation();

  const {
    title,
    title_ar,
    href,
    depth,
    children,
    icon: Icon,
    className,
    open: openProp,
    label: Label,
    ...rest
  } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(open => !open);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = {
    paddingLeft
  };

  if (children) {
    return (
      <ListItem
        {...rest}
        className={`${clsx(classes.item, className)} m-rtl `}
        disableGutters>
        <Button className={classes.button} onClick={handleToggle} style={style}>
          {Icon && <Icon className={classes.icon} />}
          {i18n.language == 'en' ? title : title_ar}
          {open ? (
            <ExpandLessIcon
              className={`${classes.expandIcon} m-rtl`}
              color="inherit"
            />
          ) : (
            <ExpandMoreIcon
              className={`${classes.expandIcon} m-rtl`}
              color="inherit"
            />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  } else {
    return (
      <ListItem
        {...rest}
        className={`${clsx(classes.itemLeaf, className)} m-rtl`}
        disableGutters>
        <Button
          activeClassName={classes.active}
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          component={CustomRouterLink}
          exact
          style={style}
          to={href}>
          {Icon && <Icon className={classes.icon} />}

          {i18n.language == 'en' ? title : title_ar}
          {Label && (
            <span className={classes.label}>
              <Label />
            </span>
          )}
        </Button>
      </ListItem>
    );
  }
};

NavigationListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  title_ar: PropTypes.string.isRequired
};

NavigationListItem.defaultProps = {
  depth: 0,
  open: false
};

export default NavigationListItem;
