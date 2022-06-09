/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'

const MegaMenu: FC = () => (
  <div className='row' data-kt-menu-dismiss='true'>
    <div className='col-lg-4 border-left-lg-1'>
      <div className='menu-inline menu-column menu-active-bg'>
        <div className='menu-item'>
          <a href='https://github.com/icesix233/BookSystemFrontend' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>Frontend Github</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='https://github.com/icesix233/BookSystemBackend' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>Backend Github</span>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export {MegaMenu}
