import React, {useState} from "react";
import Axios from "axios";
import {KTSVG} from '../../../helpers'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function EditRentButton(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        };
    
    const handleClose = () => {
        setOpen(false);
    };

    const [endTime, setEndTime] = useState(props.rent.endTime);
    const [status, setStatus] = useState(props.rent.status);

    const handleSubmit = () => {
        handleClose();

        Axios.post("http://localhost:3022/api/rent/update", {
            bookName: props.rent.bookName,
            endTime: endTime,
            status: status
        }).then(() => {
            console.log("successful update");
        })
    }

    return (
        <div>
            <h3
            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
            onClick={handleClickOpen}
            >
            <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
            </h3>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>修改借阅信息</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    借阅信息的修改将同步提交至数据库
                </DialogContentText>
                <TextField
                    disabled
                    autoFocus
                    margin="dense"
                    id="name"
                    label="图书名"
                    defaultValue={`${props.rent.bookName}`}
                    fullWidth
                    variant="standard"
                />
                <TextField
                    disabled
                    autoFocus
                    margin="dense"
                    id="author"
                    label="开始时间"
                    fullWidth
                    variant="standard"
                    defaultValue={`${props.rent.startTime}`}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="time"
                    label="结束时间"
                    type="date"
                    fullWidth
                    variant="standard"
                    defaultValue={`${props.rent.endTime}`}
                    onChange={(e)=>{setEndTime(e.target.value)}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="time"
                    label="状态"
                    fullWidth
                    variant="standard"
                    defaultValue={`${props.rent.status}`}
                    onChange={(e)=>{setStatus(e.target.value)}}
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
  
  export default EditRentButton;