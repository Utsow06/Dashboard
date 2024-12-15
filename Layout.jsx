import React from 'react'
import Sidebar from './Sidebar'

import Content from './Content'
import Header from './Header'

const Layout = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar/>
      <div className='flex flex-col'>
        <Header/>
        <Content/>
      </div>
    </div>
  )
}

export default Layout
