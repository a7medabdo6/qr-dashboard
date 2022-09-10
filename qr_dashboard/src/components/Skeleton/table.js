import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(() => ({
  image: {
    width: '100%'
  }
}));

function SkeletonChildrenDemo(props) {
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Box margin={1}>
          <Skeleton variant="circle">
            <Avatar />
          </Skeleton>
        </Box>
        <Box width="100%">
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
      {/* <Skeleton variant="rect" width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton> */}
    </div>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool
};

export default function SkeletonChildren() {
  return (
    <Grid container style={{ marginTop: '25%', paddingInline: '30px' }}>
      <Grid
        item
        xs
        style={{
          display: 'flex',
          justifyContent: 'center',
          //   alignItems: 'center',
          flexDirection: 'column'
        }}>
        <SkeletonChildrenDemo loading />
        <SkeletonChildrenDemo loading />
        <SkeletonChildrenDemo loading />
      </Grid>
    </Grid>
  );
}
