/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import Axios from "axios";

type Props = {
  className: string
}

const BookListWidget: React.FC<Props> = ({className}) => {

  const [bookList, setBookList] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3022/api/book/get").then((res) => {
      setBookList(res.data);
    })
  }, [])
  
  return (
    <div className='card card-xl-stretch mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bolder text-dark'>所有图书</span>
          <span className='text-muted mt-1 fw-bold fs-7'>书籍是人类进步的阶梯</span>
        </h3>
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

export {BookListWidget}
