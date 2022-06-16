/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import Axios from "axios";
import EditRentButton from './EditRentButton';

const TablesWidget16 = (props) => {
  const [rentList, setRentList] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3022/api/rent/get").then((res) => {
      setRentList(res.data);
    });
  }, [])

  return (
    <div className={`card ${props.className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>借阅管理</span>
          <span className='text-muted mt-1 fw-bold fs-7'>信息修改将同步至数据库</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>借阅编号</th>
                <th className='min-w-140px'>图书名</th>
                <th className='min-w-120px'>开始时间</th>
                <th className='min-w-120px'>结束时间</th>
                <th className='min-w-120px'>图书价值</th>
                <th className='min-w-120px'>状态</th>
                <th className='min-w-100px text-end'>操作</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>

              {rentList.map((rent, key) => {
                return(<tr className={key}>
                <td>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                    </div>
                </td>
                <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                    000-0{rent.userID}-{rent.id}
                    </a>
                </td>
                <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    {rent.bookName}
                    </a>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>ID: {rent.bookID}</span>
                </td>
                <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    {rent.startTime}
                    </a>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>UTC Time</span>
                </td>
                <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    {rent.endTime}
                    </a>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                    UTC Time
                    </span>
                </td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>￥{rent.price}</td>
                <td>
                    {rent.status === 1 ? 
                    <span className='badge badge-light-success'>已归还</span> 
                    : rent.status === 2 ?
                    <span className='badge badge-light-warning'>未归还</span>
                    :
                    <span className='badge badge-light-danger'>已逾期</span>
                    }
                </td>
                <td className='text-end'>
                  <EditRentButton rent={rent}/>
                </td>
                </tr>);
              })}

              {
              /*
              
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                    56037-XDER
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    Brasil
                  </a>
                  <span className='text-muted fw-bold text-muted d-block fs-7'>Code: PH</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    05/28/2020
                  </a>
                  <span className='text-muted fw-bold text-muted d-block fs-7'>Code: Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    Intertico
                  </a>
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span>
                </td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>$3560</td>
                <td>
                  <span className='badge badge-light-success'>Approved</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
              */
              }
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget16}
