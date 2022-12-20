import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Divider,
  List,
  ListItem,
  Typography,
  colors
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/InboxOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';
import DraftsIcon from '@material-ui/icons/DraftsOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import FlagIcon from '@material-ui/icons/OutlinedFlag';

import { Label } from 'components';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.white
  },
  toolbar: {
    padding: theme.spacing(2, 3)
  },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  button: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    fontWeight: theme.typography.fontWeightRegular
  },
  folderIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.icon
  },
  totalItems: {
    marginLeft: theme.spacing(1)
  },
  newItems: {
    marginLeft: 'auto'
  },
  active: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main,
    '& $folderIcon': {
      color: theme.palette.primary.main
    }
  }
}));

const EmailFolders = props => {
  const { onFolderOpen, className, ...rest } = props;

  const classes = useStyles();

  const [active, setActive] = useState('Active');

  const handleSelect = folder => {
    setActive(folder.id);
    onFolderOpen && onFolderOpen(folder.id);
  };

  const folders = [
    {
      id: 'Active',
      title: 'Active',
      total_items: 200,
      new_items: 2,
      icon: <InboxIcon className={classes.folderIcon} />
    },
   
   
    {
      id: 'OFF',
      title: 'OFF',
      total_items: 31,
      icon: <DeleteIcon className={classes.folderIcon} />
    }
  ];

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.toolbar}>
      <Link to="/category/create" >
        <Button color="primary" fullWidth variant="contained">
          
            <AddIcon className={classes.addIcon} />
            Create Category
        </Button>
        </Link>

      </div>
      <Divider />
      <List>
        {folders.map(folder => (
          <ListItem className={classes.listItem} key={folder.title}>
            <Button
              className={clsx(classes.button, {
                [classes.active]: active === folder.id
              })}
              fullWidth
              onClick={() => handleSelect(folder)}>
              {folder.icon}
              {folder.title}
              {folder.total_items > 0 && (
                <Typography className={classes.totalItems} variant="body2">
                  ({folder.total_items > 99 ? '99+' : folder.total_items})
                </Typography>
              )}
              {folder.new_items && (
                <Label
                  className={classes.newItems}
                  color={colors.red[600]}
                  shape="rounded"
                  variant="contained">
                  {folder.new_items}
                </Label>
              )}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

EmailFolders.propTypes = {
  className: PropTypes.string,
  onFolderOpen: PropTypes.func
};

export default EmailFolders;
