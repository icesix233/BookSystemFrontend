import React from "react";
import {
    BookListWidget
  } from '../../_metronic/partials/widgets'
                  
export function BookList() {
    return (
        <>
          {/* begin::Row */}
            <div>
              <BookListWidget className='card-xl-stretch mb-5 mb-xl-8' />
            </div>
          {/* end::Row */}
        </>
      )
}