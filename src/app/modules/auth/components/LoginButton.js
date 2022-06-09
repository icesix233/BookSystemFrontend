import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from 'react-router-dom';

function LoginButton(props){
    const [open, setOpen] = React.useState(false);

    const tryToLogin = () => {
        if (props.userName === '1' && props.password === '1'){
            handleClickOpen();
        }
    }

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    return (
    <div>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
        >
          <span className='indicator-label' onClick={tryToLogin}>继续</span>
        </button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
            登录成功，欢迎{props.userName}进入系统。请点击继续按钮。
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>推出</Button>
            <Link to="/dashboard" className="btn btn-primary">继续</Link>
        </DialogActions>
        </Dialog>
    </div>
    );
}

export default LoginButton;