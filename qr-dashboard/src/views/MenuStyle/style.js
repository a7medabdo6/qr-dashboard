import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  main: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginBlock: '50px'
  },
  card: {
    width: '70%',
    padding: '20px'
  },
  radio: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center'
  }
}));
