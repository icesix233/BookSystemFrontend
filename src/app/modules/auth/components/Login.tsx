/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import LoginButton from './LoginButton'

export function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //const {isManager, setIsManger} = useContext(isManagerContext);

  return (
    <div>
      <form
        className='form w-100'
        noValidate
        id='kt_login_signin_form'
      >
        {/* begin::Heading */}
        <div className='text-center mb-10'>
          <h1 className='text-dark mb-3'>账号登录</h1>
          <div className='text-gray-400 fw-bold fs-4'>
            第一次使用？{' '}
            <Link to='/auth/registration' className='link-primary fw-bolder'>
              创建账号
            </Link>
          </div>
        </div>
        {/* begin::Heading */}

        {/* begin::Form group */}
        <div className='fv-row mb-10'>
          <label className='form-label fs-6 fw-bolder text-dark'>用户名</label>
          <input
            className={clsx('form-control form-control-lg form-control-solid')}
            name='name'
            autoComplete='off'
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
        {/* end::Form group */}

        {/* begin::Form group */}
        <div className='fv-row mb-10'>
          <div className='d-flex justify-content-between mt-n5'>
            <div className='d-flex flex-stack mb-2'>
              {/* begin::Label */}
              <label className='form-label fw-bolder text-dark fs-6 mb-0'>密码</label>
              {/* end::Label */}
            </div>
          </div>
          <input
            type='password'
            autoComplete='off'
            onChange={(e)=>setPassword(e.target.value)}
            className={clsx(
              'form-control form-control-lg form-control-solid')}
          />
        </div>
        {/* end::Form group */}

      </form>

      <div className='text-center'>
        <LoginButton userName={userName} password={password}/>
      </div>
    </div>
  )
}