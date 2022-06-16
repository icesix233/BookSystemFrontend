import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import Axios from 'axios';
import {isManagerContext, userIDContext} from '../../../pages/UserContext';

function LoginButton(props){
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState([]);

    const {setIsManager} = useContext(isManagerContext);
    const {setUserID} = useContext(userIDContext);

    useEffect(()=>{
        Axios.get("http://localhost:3022/api/user/get").then((res) => {
          setUser(res.data);
          console.log(res.data);
        })
    }, [])

    const tryToLogin = () => {
        user.forEach((value, key) => {
            if (value.userName === props.userName && value.userPassword === props.password){
                handleClickOpen();
                if (value.isManager === 1){
                    setIsManager(true);
                    setUserID(value.id);
                } else {
                    setIsManager(false);
                    setUserID(value.id);
                }
            }
        })
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
            {"登录成功"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
            欢迎{props.userName}进入系统。请点击继续按钮。
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>退出</Button>
            <Link to="/dashboard" className="btn btn-primary">继续</Link>
        </DialogActions>
        </Dialog>
    </div>
    );
}

export default LoginButton;