import React, {useState, useContext} from "react";
import Axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {userIDContext} from "../../../../app/pages/UserContext";

function RentBookButton(props) {
    /* dialog */

    const [dopen, setdOpen] = React.useState(false);

    const handledClickOpen = () => {
        setdOpen(true);
    };

    const handledClose = () => {
        setdOpen(false);
    };

    /* dialog end */

    const {userID} = useContext(userIDContext);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        };
    
    const handleClose = () => {
        setOpen(false);
    };

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleSubmit = () => {
        handleClose();

        Axios.post("http://localhost:3022/api/rent/add", {
            bookID: props.book.id,
            userID: userID,
            startTime: startTime,
            endTime: endTime
        }).then(() => {
            console.log("successful add");
        })

        handledClickOpen();
    }

    return (
        <div>
            <MenuItem onClick={handleClickOpen}>借阅</MenuItem>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>借阅图书</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    借阅图书的状态将同步提交至数据库
                </DialogContentText>
                <TextField
                    disabled
                    autoFocus
                    margin="dense"
                    id="name"
                    label="图书名"
                    defaultValue={`${props.book.bookName}`}
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="time"
                    label="借阅起始时间"
                    type="date"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{setStartTime(e.target.value)}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="time"
                    label="借阅终止时间"
                    type="date"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{setEndTime(e.target.value)}}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>取消</Button>
                <Button onClick={handleSubmit}>提交</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={dopen}
                onClose={handledClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"借阅图书"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    您已借阅成功。欢迎继续浏览。
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handledClose} autoFocus>
                    OK
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
  }
  
  export default RentBookButton;