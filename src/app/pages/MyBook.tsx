import React from "react";
import {
    TablesWidget13
  } from '../../_metronic/partials/widgets/tables/TablesWidget13'
  import {
    TablesWidget14
  } from '../../_metronic/partials/widgets/tables/TablesWidget14'
                  
export function MyBook() {
    return (
        <>
          {/* begin::Row */}
            <div>
              <TablesWidget13 className='card-xl-stretch mb-5 mb-xl-8' />
              <TablesWidget14 className='card-xl-stretch mb-5 mb-xl-8' />
            </div>
          {/* end::Row */}
        </>
      )
}