import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { ToastShow } from 'store/Global/Slice';
import { useDispatch } from 'react-redux';

export default function PositionedSnackbar() {
  const { toast } = useSelector(state => state.GlobalState);
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    open: toast,
    vertical: 'top',
    horizontal: 'right'
  });
  const { vertical, horizontal, open } = state;

  console.log(toast, 'toasttoast');
  const handleClose = () => {
    //setState({ ...state, open: false });
    dispatch(ToastShow(null));
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={toast ? true : false}
        onClose={handleClose}
        autoHideDuration={2000}
        message="I love snacks"
        key={'top' + 'right'}>
        <Alert onClose={handleClose} severity="success">
          {toast}
        </Alert>
      </Snackbar>
    </div>
  );
}
