import {KTSVG} from '../../../../../../../_metronic/helpers'
import * as React from 'react';
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';

const BookAddToolbar = () => {
    const [open, setOpen] = React.useState(false);

    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookCategory, setBookCategory] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [bookTime, setBookTime] = useState("");
    const [bookOpr, setBookOpr] = useState("");

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleSubmit = () => {
        handleClose();
        console.log(bookName);
        Axios.post("http://localhost:3022/api/book/add", {
            bookName: bookName,
            bookDescription: bookDescription,
            bookAuthor: bookAuthor,
            bookCategory: bookCategory,
            bookTime: bookTime,
            bookOpr: bookOpr
        }).then(() => {
            console.log("successful insert");
        })
    }

    return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>

        {/* begin::Add user */}
        <button type='button' className='btn btn-primary' onClick={handleClickOpen}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        添加图书
        </button>
        {/* end::Add user */}

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>添加图书</DialogTitle>
        <DialogContent>
          <DialogContentText>
            图书将同步提交至数据库
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="图书名"
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
            onChange={(e)=>{setBookAuthor(e.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="des"
            label="图书描述"
            fullWidth
            variant="standard"
            onChange={(e)=>{setBookDescription(e.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="图书分类"
            fullWidth
            variant="standard"
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
            onChange={(e)=>{setBookOpr(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSubmit}>提交</Button>
        </DialogActions>
      </Dialog>

    </div>
    )
}

export {BookAddToolbar}
