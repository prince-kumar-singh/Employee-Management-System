import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
        <div className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Prince</span> 👋</div>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header