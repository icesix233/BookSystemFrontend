/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import {useState, useEffect} from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditUserButton from './EditUserButton';

type Props = {
  className: string
}

const UsersWidget: React.FC<Props> = ({className}) => {
    const [user, setUser] = useState([]);

    /* 菜单相关 */
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedUser, setselectedUser] = React.useState({});
    const [selectedUserName, setselectedUserName] = React.useState("");
    const open = Boolean(anchorEl);
    const handleClick = (e: any) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(()=>{
        Axios.get("http://localhost:3022/api/user/get").then((res) => {
          setUser(res.data);
        })
    }, [])

    const deleteUser = () => {
        handleClose();
        Axios.post("http://localhost:3022/api/user/delete", {userName: selectedUserName}).then(()=>{
            console.log("successful delete");
        })
    }

    const getRandowAvatar = () => {
        return Math.floor(Math.random() * 30) + 1;
    }

    return (
    <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className='card-header border-0'>
        <h3 className='card-title fw-bolder text-dark'>所有用户</h3>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body pt-2'>

        {user.map((value, key) => {
            return(
                <div key={key} className='d-flex align-items-center mb-7'>
                    {/* begin::Avatar */}
                    <div className='symbol symbol-50px me-5'>
                    <img src={toAbsoluteUrl(`/media/avatars/300-${getRandowAvatar()}.jpg`)} className='' alt='' />
                    </div>
                    {/* end::Avatar */}
                    {/* begin::Text */}
                    <div className='flex-grow-1'>
                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        {value[`userName`]}
                    </a>
                    <span className='text-muted d-block fw-bold'>{value[`isManager`] === 1 ? "管理员" : "读者"}</span>
                    </div>
                    {/* end::Text */}

                    {/* begin::Section */}
                    <div className='d-flex align-items-center'>

                    {/* begin::menu button */}
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(e) => {handleClick(e); setselectedUserName(value['userName']); setselectedUser(value);}}
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
                        <EditUserButton user={selectedUser}/>
                        <MenuItem onClick={() => {deleteUser();}}>删除</MenuItem>
                    </Menu>
                    {/* end::menu button */}
                    </div>
                    {/* end::Section */}

                </div>
            );
        })}
        </div>
        {/* end::Body */}
    </div>
    )
}

export {UsersWidget}
