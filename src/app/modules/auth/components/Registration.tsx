/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export function Registration() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    };

  const handleClose = () => {
    setOpen(false);
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isManager, setIsManager] = useState(0);

  const registerReq = () => {
    Axios.post("http://localhost:3022/api/user/add", {
      userName: userName,
      userPassword: password,
      isManager: isManager
    }).then(()=>{
      console.log("successful add");
    })
    handleClickOpen();
  }

  return (
    <div>
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
    >
      {/* begin::Heading */}
      <div className='mb-10 text-center'>
        {/* begin::Title */}
        <h1 className='text-dark mb-3'>创建账户</h1>
        {/* end::Title */}

      </div>
      {/* end::Heading */}

      {/* begin::Form group Email */}
      <div className='fv-row mb-7'>
        <label className='form-label fw-bolder text-dark fs-6'>用户名</label>
        <input
          placeholder='名字'
          type='name'
          onChange={(e)=>setUserName(e.target.value)}
          autoComplete='off'
          className={clsx(
            'form-control form-control-lg form-control-solid'
          )}
        />
      </div>
      {/* end::Form group */}

      {/* begin::Form group Password */}
      <div className='mb-10 fv-row' data-kt-password-meter='true'>
        <div className='mb-1'>
          <label className='form-label fw-bolder text-dark fs-6'>密码</label>
          <div className='position-relative mb-3'>
            <input
              type='password'
              placeholder='密码'
              onChange={(e)=>setPassword(e.target.value)}
              autoComplete='off'
              className={clsx(
                'form-control form-control-lg form-control-solid'
              )}
            />
          </div>
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Confirm password */}
      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>确认密码</label>
        <input
          type='password'
          placeholder='再次输入一次密码'
          autoComplete='off'
          className={clsx(
            'form-control form-control-lg form-control-solid'
          )}
        />
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='form-check form-check-custom form-check-solid'>
          <input
            className='form-check-input'
            type='checkbox'
            onChange={(e)=>{
              if (e.target.checked) setIsManager(1);
              else setIsManager(0);
            }}
            id='kt_login_toc_agree'
          />
          <label
            className='form-check-label fw-bold text-gray-700 fs-6'
            htmlFor='kt_login_toc_agree'
          >
            是否为图书管理员。
          </label>
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='form-check form-check-custom form-check-solid'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
          />
          <label
            className='form-check-label fw-bold text-gray-700 fs-6'
            htmlFor='kt_login_toc_agree'
          >
            我遵守《诚信借阅守则》。
          </label>
        </div>
      </div>
      {/* end::Form group */}

    </form>

    {/* begin::Form group */}
    <div className='text-center'>
      <button
        type='submit'
        id='kt_sign_up_submit'
        className='btn btn-lg btn-primary w-100 mb-5'
        onClick={registerReq}
      >
        <span className='indicator-label'>提交</span>
      </button>
      <Link to='/auth/login'>
        <button
          type='button'
          id='kt_login_signup_form_cancel_button'
          className='btn btn-lg btn-light-primary w-100 mb-5'
        >
          取消
        </button>
      </Link>
    </div>
    {/* end::Form group */}

    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">
          {"注册成功"}
      </DialogTitle>
      <DialogContent>
          <DialogContentText id="alert-dialog-description">
          注册成功。请返回登录页面进行登录
          </DialogContentText>
      </DialogContent>
      <DialogActions>
          <Button onClick={handleClose}>退出</Button>
          <Link to="/auth" className="btn btn-primary">继续</Link>
      </DialogActions>
    </Dialog>

    </div>
  )
}
