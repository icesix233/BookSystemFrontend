import React from "react";
import {
    BookSaleWidget
  } from '../../_metronic/partials/widgets'
                  
export function BookSale() {
    return (
        <>
          {/* begin::Row */}
            <div>
              <BookSaleWidget className='card-xl-stretch mb-5 mb-xl-8' />
            </div>
          {/* end::Row */}
        </>
      )
}