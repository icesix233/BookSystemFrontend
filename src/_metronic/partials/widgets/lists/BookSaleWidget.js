/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useContext} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import Axios from "axios";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {userIDContext} from "../../../../app/pages/UserContext";
import RentBookButton from './RentBookButton';

const BookSaleWidget = (props) => {
    const {userID} = useContext(userIDContext);

    /* 菜单相关 */
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedBook, setSelectedBook] = React.useState({});
    const [selectedBookName, setSelectedBookName] = React.useState({});
    const [selectedBookID, setSelectedBookID] = React.useState("");
    const [selectedBookPrice, setSelectedBookPrice] = React.useState("");
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const buyBook = () => {
        handleClose();
        Axios.post("http://localhost:3022/api/sale/add", {bookID: selectedBookID, bookName: selectedBookName, userID: userID, price: selectedBookPrice, time: '2022-06-17'}).then(()=>{
            console.log("successful buy");
        })
    }

    const [bookList, setBookList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3022/api/book/get").then((res) => {
            setBookList(res.data);
            console.log(res.data);
        })
    }, [])


    /* 购买成功dialog */
    const [dopen, setdOpen] = React.useState(false);

    const handledClickOpen = () => {
        setdOpen(true);
    };

    const handledClose = () => {
        setdOpen(false);
    };

    return (
    <div className='card card-xl-stretch mb-5 mb-xl-8'>
    <div className='card-header align-items-center border-0 mt-4'>
    <h3 className='card-title align-items-start flex-column'>
        <span className='fw-bolder text-dark'>图书总览</span>
    </h3>
    </div>
        {/* begin::Body */}
        <div className='card-body pt-3'>
        {bookList.map((book, key) => {
            return (
            <div key={key}>
                {/* begin::Item */}
                <div className='d-flex align-items-sm-center mb-7'>
                {/* begin::Symbol */}
                <div className='symbol symbol-100px symbol-3by2 me-4'>
                    <div
                    className='symbol-label'
                    style={{backgroundImage: `url(${toAbsoluteUrl(`/media/books/${book['bookName']}.jpeg`)})`}}
                    ></div>
                </div>
                {/* end::Symbol */}
                {/* begin::Content */}
                <div className='d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2'>
                    {/* begin::Title */}
                    <div className='flex-grow-1 my-lg-0 my-2 me-2'>
                    <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                        {book['bookName']}
                    </a>
                    <span className='text-muted fw-bold d-block pt-1'>{book['bookAuthor']}</span>
                    <span className='text-muted fw-bold d-block pt-1'>{book['bookDescription']}</span>
                    <span className='text-muted fw-bold d-block pt-1'>类别：{book['bookCategory']}</span>
                    </div>
                    {/* end::Title */}
                    {/* begin::Section */}
                    <div className='d-flex align-items-center'>
                    <div className='me-6'>
                        <i className='bi bi-cash-coin me-1 text-warning fs-3'></i>
                        <span className='text-gray-800 fw-bolder'>￥{book['price']}</span>
                    </div>
                    {/* begin::menu button */}
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(e) => {handleClick(e); setSelectedBook(book); setSelectedBookName(book['bookName']) ;setSelectedBookID(book['id']); setSelectedBookPrice(book['price'])}}
                    >
                        选择
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <RentBookButton book={selectedBook}/>
                        <MenuItem onClick={() => {buyBook();handledClickOpen();}}>购买</MenuItem>
                    </Menu>
                    {/* end::menu button */}
                    </div>
                    {/* end::Section */}
                </div>
                {/* end::Content */}

                <Dialog
                    open={dopen}
                    onClose={handledClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"购买图书"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        您已购买成功。欢迎继续购物。
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handledClose} autoFocus>
                        OK
                    </Button>
                    </DialogActions>
                </Dialog>

                </div>
                {/* end::Item */}
            </div>
            );
        })}

        </div>
        {/* end::Body */}
    </div>
    )
}

export {BookSaleWidget}
