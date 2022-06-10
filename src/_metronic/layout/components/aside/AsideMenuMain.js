/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import {isManagerContext} from '../../../../app/pages/UserContext';
import {useContext} from 'react';

export function AsideMenuMain() {
  const {isManager} = useContext(isManagerContext);

  return (
    <>
    {
      isManager
      ?
      <div>
        <AsideMenuItem
          to='/dashboard'
          icon='/media/icons/duotune/art/art002.svg'
          title='主页'
          fontIcon='bi-app-indicator'
        />
        <AsideMenuItem
          to='/auth'
          icon='/media/icons/duotune/general/gen019.svg'
          title='退出登录'
          fontIcon='bi-layers'
        />
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>图书管理</span>
          </div>
        </div>
        <AsideMenuItemWithSub
          to='/crafted/pages'
          title='图书管理'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/general/gen022.svg'
        >
          <AsideMenuItem to='/booklist' title='图书总览' hasBullet={true} />
          <AsideMenuItem to='/bookadd' title='图书管理' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='类别管理' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='日志管理' hasBullet={true} />


        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/crafted/accounts'
          title='借阅管理'
          icon='/media/icons/duotune/communication/com001.svg'
          fontIcon='bi-person'
        >
          <AsideMenuItem to='/crafted/account/overview' title='借阅总览' hasBullet={true} />
          <AsideMenuItem to='/crafted/account/settings' title='借阅日志' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='/error'
          title='用户管理'
          fontIcon='bi-sticky'
          icon='/media/icons/duotune/communication/com006.svg'
        >
          <AsideMenuItem to='/users' title='所有用户' hasBullet={true} />
        </AsideMenuItemWithSub>
        {/*
        <AsideMenuItemWithSub
          to='/crafted/widgets'
          title='Widgets'
          icon='/media/icons/duotune/general/gen025.svg'
          fontIcon='bi-layers'
        >
          <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
          <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
          <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
          <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
          <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
          <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
        </AsideMenuItemWithSub>
        */}
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>图书借阅</span>
          </div>
        </div>
        <AsideMenuItemWithSub
          to='/apps/chat'
          title='浏览图书'
          fontIcon='bi-chat-left'
          icon='/media/icons/duotune/communication/com012.svg'
        >
          <AsideMenuItem to='/apps/chat/private-chat' title='按类别' hasBullet={true} />
          <AsideMenuItem to='/apps/chat/group-chat' title='按名字' hasBullet={true} />
          <AsideMenuItem to='/apps/chat/drawer-chat' title='按人气' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItem
          to='/apps/user-management/users'
          icon='/media/icons/duotune/general/gen051.svg'
          title='我的借阅'
          fontIcon='bi-layers'
        />
        <div className='menu-item'>
          <div className='menu-content'>
            <div className='separator mx-1 my-4'></div>
          </div>
        </div>
        <div className='menu-item'>
          <a
            target='_blank'
            className='menu-link'
            href="https://github.com/icesix233/BookSystemFrontend"
          >
            <span className='menu-icon'>
              <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
            </span>
            <span className='menu-title'>Github Page</span>
          </a>
        </div>
      </div>
      :
      <div>
        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>图书借阅</span>
          </div>
        </div>
        <AsideMenuItemWithSub
          to='/apps/chat'
          title='浏览图书'
          fontIcon='bi-chat-left'
          icon='/media/icons/duotune/communication/com012.svg'
        >
          <AsideMenuItem to='/booklist' title='按类别' hasBullet={true} />
          <AsideMenuItem to='/booklist' title='按名字' hasBullet={true} />
          <AsideMenuItem to='/booklist' title='按人气' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItem
          to='/booklist'
          icon='/media/icons/duotune/general/gen051.svg'
          title='我的借阅'
          fontIcon='bi-layers'
        />
        <div className='menu-item'>
          <div className='menu-content'>
            <div className='separator mx-1 my-4'></div>
          </div>
        </div>
        <div className='menu-item'>
          <a
            target='_blank'
            className='menu-link'
            href="https://github.com/icesix233/BookSystemFrontend"
          >
            <span className='menu-icon'>
              <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
            </span>
            <span className='menu-title'>Github Page</span>
          </a>
        </div>
      </div>
      }
    </>
  )
}
