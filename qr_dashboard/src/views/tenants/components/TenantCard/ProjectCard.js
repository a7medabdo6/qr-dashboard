import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors
} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import getInitials from 'utils/getInitials';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import BlockIcon from '@material-ui/icons/Block';
import { useDeleteTenantHook, useActivateTenantHook } from 'hooks/apis/Tenants';
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
    width: 150,
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

const ProjectCard = props => {
  const { project, className, ...rest } = props;
  const classes = useStyles();

  const statusColors = {
    'In progress': colors.orange[600],
    Canceled: colors.grey[600],
    Completed: colors.green[600]
  };
  const { mutate: DeleteTenant } = useDeleteTenantHook();
  const { mutate: ActivateTenant } = useActivateTenantHook();
  const onDeleteHandle = () => {
    DeleteTenant({ id: project.id });
  };
  const onActivateHandle = () => {
    ActivateTenant({ id: project.id, is_active: !project.is_active });
  };
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Avatar alt="Author" className={classes.avatar} src={project?.logo}>
            {/* {getInitials(project?.client_name)} */}
            {project?.client_name}
          </Avatar>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginInline: '5px'
            }}>
            <Link
              color="textPrimary"
              component={RouterLink}
              noWrap
              to="#"
              variant="h5">
              {project?.client_name}
            </Link>
            <Typography variant="body2">
              <Link
                color="textPrimary"
                component={RouterLink}
                to="#"
                variant="h6">
                {project?.schema_name}
              </Link>
            </Typography>
          </div>
        </div>
        {/* <div className={classes.stats}>
          <Typography variant="h6">
            {project?.currency}
            {project?.price}
          </Typography>
          <Typography variant="body2"> {project?.schema_name}</Typography>
        </div> */}
        <div className={classes.stats}>
          <Typography variant="h6">{project?.max_groups}</Typography>
          <Typography variant="body2">Max groups</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project?.subscribedfrom).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2">Subscribed From</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project?.subscribedTo).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2">Subscribed To</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{
              color: project?.is_active
                ? statusColors.Completed
                : statusColors['In progress']
            }}
            variant="h6">
            {project?.is_active ? 'Active' : 'Disabled'}
          </Typography>
          <Typography variant="body2"> Status</Typography>
        </div>
        <div className={classes.actions}>
          <Link component={RouterLink} to={`/tenants/edit/${project?.id}`}>
            <Button
              style={{ marginInline: '5px' }}
              color="primary"
              size="small"
              variant="outlined">
              View
            </Button>
          </Link>

          {project?.is_active && (
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
          {!project?.is_active && (
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

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
