/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useContext, useState} from 'react'
import Axios from "axios";
import {userIDContext} from "../../../../app/pages/UserContext";


const TablesWidget14 = (props) => {
  const [saleList, setSaleList] = useState([]);
  const {userID} = useContext(userIDContext);

  useEffect(()=>{
    Axios.get("http://localhost:3022/api/sale/get").then((res) => {
        setSaleList(res.data);
    });
  }, [])

  return (
    <div className={`card ${props.className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>我的购买</span>
          <span className='text-muted mt-1 fw-bold fs-7'>书山有路勤为径，学海无涯苦作舟</span>
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
                <th className='min-w-150px'>订单号</th>
                <th className='min-w-140px'>图书名</th>
                <th className='min-w-120px'>购买时间</th>
                <th className='min-w-120px'>图书价值</th>
                <th className='min-w-120px'>状态</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>

              {saleList.map((sale, key) => {
                if (sale.userID === userID)
                  return(<tr className={key}>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        111-0{sale.userID}-{sale.id}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {sale.bookName}
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>ID: {sale.bookID}</span>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {sale.time}
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>UTC Time</span>
                    </td>
                    <td className='text-dark fw-bolder text-hover-primary fs-6'>￥{sale.price}</td>
                    <td>
                        <span className='badge badge-light-success'>订单完成</span> 
                    </td>
                  </tr>);
                else return <></>;
              })}
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

export {TablesWidget14}
