import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import {
  Header,
  About,
  UpdateProfile,
  ChangePassword,
  Connections,
  Projects,
  Reviews
} from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  inner: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const Profile = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'about', label: 'About' },
    { value: 'UpdateProfile', label: 'Update Profile' },
    { value: 'ChangePassword', label: 'Change Password' },
    { value: 'reviews', label: 'Reviews' }
  ];

  if (!tab) {
    return <Redirect to={`/profile/${id}/about`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page className={classes.root} title="Profile">
      <Header />
      <div className={classes.inner}>
        <Tabs
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={tab}
          variant="scrollable">
          {tabs.map(tab => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {tab === 'about' && <About />}
          {tab === 'UpdateProfile' && <UpdateProfile />}
          {tab === 'ChangePassword' && <ChangePassword />}
          {tab === 'reviews' && <Reviews />}
        </div>
      </div>
    </Page>
  );
};

Profile.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Profile;
