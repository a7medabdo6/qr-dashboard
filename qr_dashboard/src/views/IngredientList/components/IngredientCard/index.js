import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
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
  useActivateIngredientHook,
  useDeleteIngredientHook
} from 'hooks/apis/Ingredients';

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

const IngredientCard = props => {
  const { Ingredient, className, ...rest } = props;
  const classes = useStyles();

  const statusColors = {
    'In progress': colors.orange[600],
    Canceled: colors.grey[600],
    Completed: colors.green[600]
  };
  const { mutate: DeleteIngredient } = useDeleteIngredientHook();
  const { mutate: ActivateIngredient } = useActivateIngredientHook();
  const onDeleteHandle = () => {
    DeleteIngredient({ id: Ingredient.id });
  };
  const onActivateHandle = () => {
    ActivateIngredient({ id: Ingredient.id, active: !Ingredient.active });
  };
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Avatar
            alt="Author"
            className={classes.avatar}
            src={Ingredient?.image}></Avatar>
          <div>
            <Link
              color="textPrimary"
              component={RouterLink}
              noWrap
              to={`/ingredients/edit/${Ingredient?.id}`}
              variant="h5">
              {Ingredient?.name}
            </Link>
          </div>
        </div>
        <div className={classes.stats}>
          <Box bgcolor={Ingredient?.color} width={40} height={25}></Box>
          <Typography variant="body2"> Color</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{
              color: Ingredient?.active
                ? statusColors.Completed
                : statusColors['In progress']
            }}
            variant="h6">
            {Ingredient?.active ? 'Active' : 'Inactive'}
          </Typography>
          <Typography variant="body2"> Status</Typography>
        </div>
        <div className={classes.actions}>
          <Link
            component={RouterLink}
            to={`/ingredients/edit/${Ingredient?.id}`}>
            <Button
              style={{ marginInline: '5px' }}
              color="primary"
              size="small"
              variant="outlined">
              Edit
            </Button>
          </Link>

          {Ingredient?.active && (
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
          {!Ingredient?.active && (
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

IngredientCard.propTypes = {
  className: PropTypes.string,
  Ingredient: PropTypes.object.isRequired
};

export default IngredientCard;
