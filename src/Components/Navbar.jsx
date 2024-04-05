import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800'>
      <div className='text-white flex flex-wrap justify-between items-center mycontainer p-4 py-5 md:py-3 md:px-6 lg:px-12 xl:px-24'>
        <div className='logo font-bold text-lg'>
          <span className='text-green-700'>&lt;</span>
          <span>Pass</span><span className='text-green-700'>OP/&gt;</span>
        </div>
        <ul className='flex flex-wrap gap-4 md:gap-8'>
          <li><a className='hover:font-bold' href="/">Home</a></li>
          <li><a className='hover:font-bold' href="#">About</a></li>
          <li><a className='hover:font-bold' href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
