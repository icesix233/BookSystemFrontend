import React, {useState} from "react";
import Axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function EditBookButton(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        };
    
    const handleClose = () => {
        setOpen(false);
    };

    const [userName, setUserName] = useState(props.user.userName);
    const [userPassword, setuserPassword] = useState(props.user.userPassword);
    const [isManager, setIsManager] = useState(props.user.isManager);

    const handleSubmit = () => {
        handleClose();

        Axios.post("http://localhost:3022/api/user/update", {
            userName: userName,
            userPassword: userPassword,
            isManager: isManager
        }).then(() => {
            console.log("successful update");
        })
    }

    return (
        <div>
            <MenuItem onClick={handleClickOpen}>修改</MenuItem>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>修改用户信息</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    用户信息的修改将同步提交至数据库
                </DialogContentText>
                <TextField
                    disabled
                    autoFocus
                    margin="dense"
                    id="name"
                    label="用户名"
                    defaultValue={`${props.user.userName}`}
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{setUserName(e.target.value)}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="author"
                    label="用户密码"
                    fullWidth
                    variant="standard"
                    defaultValue={`${props.user.userPassword}`}
                    onChange={(e)=>{setuserPassword(e.target.value)}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="des"
                    label="用户是否为管理员"
                    fullWidth
                    variant="standard"
                    defaultValue={`${props.user.isManager}`}
                    onChange={(e)=>{setIsManager(e.target.value)}}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>取消</Button>
                <Button onClick={handleSubmit}>提交</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
  }
  
  export default EditBookButton;