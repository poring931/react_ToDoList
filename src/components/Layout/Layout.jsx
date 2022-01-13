import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='bg-black h-screen py-5'>
            {children}
        </div>
    )
}

export default Layout;