import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors
} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import BlockIcon from '@material-ui/icons/Block';
import SettingsIcon from '@material-ui/icons/Settings';
import { useActivateMenuHook, useDeleteMenuHook } from 'hooks/apis/Menus';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap'
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  header: {
    maxWidth: '100%',
    width: 100,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%'
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  stats: {
    padding: theme.spacing(1),
    width: 150,
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  },
  actions: {
    padding: theme.spacing(1),
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  }
}));

const MenuCard = props => {
  const { Menu, className, ...rest } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  const statusColors = {
    'In progress': colors.orange[600],
    Canceled: colors.grey[600],
    Completed: colors.green[600]
  };
  const { mutate: DeleteMenu } = useDeleteMenuHook();
  const { mutate: ActivateMenu } = useActivateMenuHook();
  const onDeleteHandle = () => {
    DeleteMenu({ id: Menu.id });
  };
  const onActivateHandle = () => {
    ActivateMenu({ id: Menu.id, active: !Menu.active });
  };
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <div>
            <Link
              color="textPrimary"
              component={RouterLink}
              noWrap
              to={`/menu/edit/${Menu?.id}`}
              variant="h5">
              {Menu?.title}
            </Link>
          </div>
        </div>
        <div className={classes.stats}>
          {Menu?.branch.map(item => (
            <Typography key={item?.id} variant="h6">
              {item?.title}
              {`, `}
            </Typography>
          ))}
          <Typography variant="body2">{t('Branches_name')} </Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(Menu?.create_at).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2"> {t('started')}</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{
              color: Menu?.active
                ? statusColors.Completed
                : statusColors['In progress']
            }}
            variant="h6">
            {Menu?.active ? t('Active') : t('Disable')}
          </Typography>
          <Typography variant="body2"> {t('status')} </Typography>
        </div>
        <div className={classes.actions}>
          <Link component={RouterLink} to={`/menu/modify/${Menu?.id}`}>
            <Button
              style={{ marginInline: '5px' }}
              color="primary"
              size="small"
              variant="text">
              <SettingsIcon />
            </Button>
          </Link>
          <Link component={RouterLink} to={`/menu/edit/${Menu?.id}`}>
            <Button
              style={{ marginInline: '5px' }}
              color="primary"
              size="small"
              variant="outlined">
              {t('Edit')}
            </Button>
          </Link>

          {Menu?.active && (
            <Button
              style={{ marginInline: '5px', width: '100px' }}
              size="small"
              variant="outlined"
              onClick={onActivateHandle}
              color="primary">
              {t('Disable')}
              <BlockIcon />
            </Button>
          )}
          {!Menu?.active && (
            <Button
              style={{ marginInline: '5px', width: '100px' }}
              size="small"
              variant="contained"
              onClick={onActivateHandle}
              color="primary">
              {t('Activate')}
              <DoneAllIcon />
            </Button>
          )}
          <Button
            style={{ marginInline: '5px' }}
            size="small"
            variant="contained"
            color="secondary"
            onClick={onDeleteHandle}>
            {t('delete')}
            <DeleteForeverIcon />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

MenuCard.propTypes = {
  className: PropTypes.string,
  Menu: PropTypes.object.isRequired
};

export default MenuCard;
