import React, { Fragment, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Divider, Paper, Avatar, Typography } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import { UserInfo } from 'store/Auth/Slice';
import useRouter from 'utils/useRouter';
import { Navigation } from 'components';
import navigationConfig from './navigationConfig';
import { useGetActiveUserHook } from 'hooks/apis/Auth';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    overflowY: 'auto',
    position: 'fixed',
    top: '64px'
  },
  content: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: 'white !important',
    height: '100vh'
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  navigation: {
    marginTop: theme.spacing(2)
  }
}));

const NavBar = props => {
  const { openMobile, onMobileClose, className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const [userData, setUserData] = useState({});

  const { data, isLoading } = useGetActiveUserHook();

  const userInfo = useSelector(state => state.UserInfo.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.location.pathname]);

  useEffect(() => {
    if (data?.data) {
      setUserData(data.data);
      dispatch(UserInfo(data.data));
    }
  }, [data]);

  const navbarContent = (
    <div className={classes.content}>
      <div className={classes.profile}>
        <Avatar
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src={userInfo?.avatar || userData.avatar}
          to="/profile/1/about"
        />
        <Typography
          className={classes.name}
          style={{ color: 'white' }}
          variant="h4">
          {userInfo?.name || userData.name || 'no name'}
        </Typography>
        <Typography style={{ color: 'white' }} variant="body2">
          {userInfo?.role || userData.role || 'no role'}
        </Typography>
      </div>
      <Divider className={classes.divider} />

      <nav className={classes.navigation}>
        {navigationConfig.map(list => (
          <Navigation
            component="div"
            key={list.title}
            pages={list.pages}
            title={list.title}
          />
        ))}
      </nav>
    </div>
  );

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary">
          <div {...rest} className={clsx(classes.root, className)}>
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square>
          {navbarContent}
        </Paper>
      </Hidden>
    </Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
