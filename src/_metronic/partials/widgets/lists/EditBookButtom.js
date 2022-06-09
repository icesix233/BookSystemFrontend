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

    const [bookName, setBookName] = useState(props.book.bookName);
    const [bookAuthor, setBookAuthor] = useState(props.book.bookAuthor);
    const [bookCategory, setBookCategory] = useState(props.book.bookCategory);
    const [bookDescription, setBookDescription] = useState(props.book.bookDescription);
    const [bookTime, setBookTime] = useState(props.book.bookTime);
    const [bookOpr, setBookOpr] = useState(props.book.bookOpretor);

    const handleSubmit = () => {
        handleClose();
        console.log(bookName,bookAuthor,bookCategory,bookDescription,bookTime,bookOpr);

        Axios.post("http://localhost:3022/api/book/update", {
            bookName: bookName,
            bookDescription: bookDescription,
            bookAuthor: bookAuthor,
            bookCategory: bookCategory,
            bookTime: bookTime,
            bookOpr: bookOpr
        }).then(() => {
            console.log("successful update");
        })
    }

    return (
        <div>
            <MenuItem onClick={handleClickOpen}>修改</MenuItem>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>修改图书信息</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    图书信息的修改将同步提交至数据库
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
                    onChange={(e)=>{setBookName(e.target.value)}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="author"
                    label="图书作者"
                    fullWidth
                    variant="standard"
                    defaultValue={`${props.book.bookAuthor}`}
                    onChange={(e)=>{setBookAuthor(e.target.value)}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="des"
                    label="图书描述"
                    fullWidth
                    variant="standard"
                    defaultValue={`${props.book.bookDescription}`}
                    onChange={(e)=>{setBookDescription(e.target.value)}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="category"
                    label="图书分类"
                    fullWidth
                    variant="standard"
                    defaultValue={`${props.book.bookCategory}`}
                    onChange={(e)=>{setBookCategory(e.target.value)}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="time"
                    label="入库时间"
                    type="date"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{setBookTime(e.target.value)}}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="time"
                    label="入库员"
                    fullWidth
                    variant="standard"
                    defaultValue={`${props.book.bookOpretor}`}
                    onChange={(e)=>{setBookOpr(e.target.value)}}
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