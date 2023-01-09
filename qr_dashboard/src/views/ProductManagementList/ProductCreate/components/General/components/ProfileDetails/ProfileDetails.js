import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlgin: 'center'
  },
  name: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    height: 100,
    width: 100
  },
  removeBotton: {
    width: '100%'
  }
}));

const ProfileDetails = props => {
  const { profile, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <Avatar
          className={classes.avatar}
          src={"https://mui.com/static/images/cards/paella.jpg"}
        />
        <Typography
          className={classes.name}
          gutterBottom
          variant="h3"
        >
          {profile.firstName} {profile.lastName}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
          component={'span'}
        >
          {/* {profile.state}, {profile.country} */}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          component={'span'}
        >
          {/* {profile.timezone} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.removeBotton}
          variant="text"
        >
          upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.object.isRequired
};

export default ProfileDetails;
