import React from "react";
import {
    BookAddWidget
  } from '../../_metronic/partials/widgets'
                  
export function BookAdd() {
    return (
        <>
          {/* begin::Row */}
            <div>
              <BookAddWidget className='card-xl-stretch mb-5 mb-xl-8' />
            </div>
          {/* end::Row */}
        </>
      )
}