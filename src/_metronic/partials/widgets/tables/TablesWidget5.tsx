/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import Axios from "axios";

type Props = {
  className: string
}

const TablesWidget5: React.FC<Props> = ({className}) => {
  const [bookList, setBookList] = useState([]);
  useEffect(()=>{
    Axios.get("http://localhost:3022/api/book/get").then((res) => {
      setBookList(res.data);
    })
  }, [])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>新入库书目</span>
          <span className='text-muted mt-1 fw-bold fs-7'>书目定期采购，列表每周更新</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_1'
              >
                本周
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                {/* begin::Table head */}
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {bookList.map((book,key) => {
                    if(key>4) return<></>;
                    return<>
                      <tr>
                        <td>
                          <div key={key} className='symbol symbol-45px me-2'>
                            <span className='symbol-label'>
                              <img
                                src={toAbsoluteUrl(`/media/books/${book['bookName']}.jpeg`)}
                                className='h-100 align-self-center'
                                alt=''
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                            {book['bookName']}
                          </a>
                          <span className='text-muted fw-bold d-block'>{book['bookAuthor']}</span>
                        </td>
                        <td className='text-end text-muted fw-bold'>{book['bookTime']}</td>
                        <td className='text-end'>
                          <span className='badge badge-light-success'>{book['bookOpretor']}</span>
                        </td>
                        <td className='text-end'>
                          <a
                            href='#'
                            className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                          >
                            <KTSVG
                              path='/media/icons/duotune/arrows/arr064.svg'
                              className='svg-icon-2'
                            />
                          </a>
                        </td>
                      </tr>
                    </>
                  })}

                  
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          
          
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget5}
