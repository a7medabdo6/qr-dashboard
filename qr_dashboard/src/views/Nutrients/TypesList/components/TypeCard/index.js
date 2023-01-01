import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors,
  Box
} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import BlockIcon from '@material-ui/icons/Block';
import {
  useActivateNutrientHook,
  useDeleteNutrientHook
} from 'hooks/apis/Nutrients/Types';

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

const TypeCard = props => {
  const { Type, className, ...rest } = props;
  const classes = useStyles();

  const statusColors = {
    'In progress': colors.orange[600],
    Canceled: colors.grey[600],
    Completed: colors.green[600]
  };
  const { mutate: DeleteNutrient } = useDeleteNutrientHook();
  const { mutate: ActivateNutrient } = useActivateNutrientHook();
  const onDeleteHandle = () => {
    DeleteNutrient({ id: Type.id });
  };
  const onActivateHandle = () => {
    ActivateNutrient({ id: Type.id, active: !Type.active });
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
              to={`/nutrients/types/edit/${Type?.id}`}
              variant="h5">
              {Type?.name}
            </Link>
          </div>
        </div>
        <div className={classes.stats}>
          <Box bgcolor={Type?.color} width={40} height={25}></Box>
          <Typography variant="body2"> Color</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{
              color: Type?.active
                ? statusColors.Completed
                : statusColors['In progress']
            }}
            variant="h6">
            {Type?.active ? 'Active' : 'Inactive'}
          </Typography>
          <Typography variant="body2"> Status</Typography>
        </div>
        <div className={classes.actions}>
          <Link component={RouterLink} to={`/nutrients/types/edit/${Type?.id}`}>
            <Button
              style={{ marginInline: '5px' }}
              color="primary"
              size="small"
              variant="outlined">
              Edit
            </Button>
          </Link>

          {Type?.active && (
            <Button
              style={{ marginInline: '5px', width: '100px' }}
              size="small"
              variant="outlined"
              onClick={onActivateHandle}
              color="primary">
              Disable
              <BlockIcon />
            </Button>
          )}
          {!Type?.active && (
            <Button
              style={{ marginInline: '5px', width: '100px' }}
              size="small"
              variant="contained"
              onClick={onActivateHandle}
              color="primary">
              Activate
              <DoneAllIcon />
            </Button>
          )}
          <Button
            style={{ marginInline: '5px' }}
            size="small"
            variant="contained"
            color="secondary"
            onClick={onDeleteHandle}>
            delete
            <DeleteForeverIcon />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

TypeCard.propTypes = {
  className: PropTypes.string,
  Type: PropTypes.object.isRequired
};

export default TypeCard;
