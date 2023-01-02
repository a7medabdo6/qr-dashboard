import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  root: {},
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  startDateButton: {
    marginRight: theme.spacing(1)
  },
  endDateButton: {
    marginLeft: theme.spacing(1)
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const userInfo = useSelector(state => state.UserInfo.user);

  const { t } = useTranslation();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography component="h2" gutterBottom variant="overline">
        {t('Home')}
      </Typography>
      <Typography component="h1" gutterBottom variant="h3">
      {t('GoodMorning')} {userInfo?.name}
      </Typography>
      <Typography variant="subtitle1">{t('WhatsHappening')}</Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {};

export default Header;
