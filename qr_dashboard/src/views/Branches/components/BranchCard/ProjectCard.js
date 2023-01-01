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
  useActivateBranchHook,
  useDeleteBranchHook
} from 'hooks/apis/Branches';
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

const ProjectCard = props => {
  const { project, className, ...rest } = props;
  const classes = useStyles();

  const { t } = useTranslation();
  const statusColors = {
    'In progress': colors.orange[600],
    Canceled: colors.grey[600],
    Completed: colors.green[600]
  };
  const { mutate: DeleteBranch } = useDeleteBranchHook();
  const { mutate: ActivateBranch } = useActivateBranchHook();
  const onDeleteHandle = () => {
    DeleteBranch({ id: project.id });
  };
  const onActivateHandle = () => {
    ActivateBranch({ id: project.id, active: !project.active });
  };
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          {/* <Avatar alt="Author" className={classes.avatar} src={project?.avatar}>
            {project?.name}
          </Avatar> */}
          <div>
            <Link
              color="textPrimary"
              component={RouterLink}
              noWrap
              to={`/branches/edit/${project?.id}`}
              variant="h5">
              {project?.title}
            </Link>
            {/* <Typography variant="body2">
              <Link
                color="textPrimary"
                component={RouterLink}
                to="/management/customers/1"
                variant="h6">
                {project?.name}
              </Link>
            </Typography> */}
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
          <Typography variant="h6">{project?.group?.title}</Typography>
          <Typography variant="body2"> {t('Group_Name')}</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project?.create_at).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2">{t('started')} </Typography>
        </div>
        {/* <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project?.subscribedfrom).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2">Project started</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project?.subscribedTo).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2">Project deadline</Typography>
        </div> */}
        <div className={classes.stats}>
          <Typography
            style={{
              color: project?.active
                ? statusColors.Completed
                : statusColors['In progress']
            }}
            variant="h6">
            {project?.active ? t('Active') : t('Disable')}
          </Typography>
          <Typography variant="body2">{t('Status')} </Typography>
        </div>
        <div className={classes.actions}>
          <Link component={RouterLink} to={`/branches/edit/${project?.id}`}>
            <Button
              style={{ marginInline: '5px' }}
              color="primary"
              size="small"
              variant="outlined">
              {t('Edit')}
            </Button>
          </Link>

          {project?.active && (
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
          {!project?.active && (
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

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
