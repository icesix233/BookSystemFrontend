/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import Axios from "axios";
import { BookAddToolbar } from '../../../../app/modules/apps/user-management/users-list/components/header/BookAddToolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditBookButton from './EditBookButton';

type Props = {
  className: string
}

const BookAddWidget: React.FC<Props> = ({className}) => {

    /* 菜单相关 */
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedBook, setSelectedBook] = React.useState({});
    const [selectedBookName, setSelectedBookName] = React.useState("");
    const open = Boolean(anchorEl);
    const handleClick = (e: any) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteBook = () => {
        handleClose();
        Axios.post("http://localhost:3022/api/book/delete", {bookName: selectedBookName}).then(()=>{
            console.log("successful delete");
        })
    }


    const [bookList, setBookList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3022/api/book/get").then((res) => {
            setBookList(res.data);
            console.log(res.data);
        })
    }, [])

    return (
    <div className='card card-xl-stretch mb-5 mb-xl-8'>
    <div className='card-header align-items-center border-0 mt-4'>
    <h3 className='card-title align-items-start flex-column'>
        <span className='fw-bolder text-dark'>图书管理</span>
    </h3>
    </div>
        {/* begin::Header */}
        <div className='card-toolbar'>
        <BookAddToolbar />
        </div>
        {/* end::Header */}
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
                        <i className='fa fa-star me-1 text-warning fs-5'></i>
                        <span className='text-gray-800 fw-bolder'>{book['bookOpretor']}</span>
                    </div>
                    {/* begin::menu button */}
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(e) => {handleClick(e); setSelectedBookName(book['bookName']); setSelectedBook(book);}}
                    >
                        编辑
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
                        <EditBookButton book={selectedBook}/>
                        <MenuItem onClick={() => {deleteBook();}}>删除</MenuItem>
                    </Menu>
                    {/* end::menu button */}
                    </div>
                    {/* end::Section */}
                </div>
                {/* end::Content */}
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

export {BookAddWidget}
