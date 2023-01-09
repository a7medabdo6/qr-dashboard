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
import {
  useActivateCategoryHook,
  useDeleteCategoryHook
} from 'hooks/apis/Category';

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

const CategoryCard = props => {
  const { Category, className, ...rest } = props;
  const classes = useStyles();

  const statusColors = {
    'In progress': colors.orange[600],
    Canceled: colors.grey[600],
    Completed: colors.green[600]
  };
  const { mutate: DeleteCategory } = useDeleteCategoryHook();
  const { mutate: ActivateCategory } = useActivateCategoryHook();
  const onDeleteHandle = () => {
    DeleteCategory({ id: Category.id });
  };
  const onActivateHandle = () => {
    ActivateCategory({ id: Category.id, active: !Category.active });
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
              to={`/category/edit/${Category?.id}`}
              variant="h5">
              {Category?.title}
            </Link>
          </div>
        </div>
        <div className={classes.stats}>
          {Category?.branch.map(item => (
            <Typography key={item?.id} variant="h6">
              {item?.title}
              {`, `}
            </Typography>
          ))}
          <Typography variant="body2">Branches Name</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(Category?.create_at).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2"> started</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{
              color: Category?.active
                ? statusColors.Completed
                : statusColors['In progress']
            }}
            variant="h6">
            {Category?.active ? 'Active' : 'In progress'}
          </Typography>
          <Typography variant="body2"> Status</Typography>
        </div>
        <div className={classes.actions}>
          <Link component={RouterLink} to={`/Category/edit/${Category?.id}`}>
            <Button
              style={{ marginInline: '5px' }}
              color="primary"
              size="small"
              variant="outlined">
              Edit
            </Button>
          </Link>

          {Category?.active && (
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
          {!Category?.active && (
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

CategoryCard.propTypes = {
  className: PropTypes.string,
  Category: PropTypes.object.isRequired
};

export default CategoryCard;
