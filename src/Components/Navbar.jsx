import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 '>
        <div className='text-white flex justify-between items-center mycontainer p-4 py-5 h-14'>
        <div className='logo font-bold'>
            <span className='text-green-700'>&lt;</span>
            <span>Pass</span><span className='text-green-700'>OP/&gt;</span>
            </div>
      <ul className='flex gap-4'>
        <li><a className='hover: font-bold' href="/">Home</a></li>
        <li><a className='hover: font-bold' href="#">About</a></li>
        <li><a className='hover: font-bold' href="#">Contact</a></li>
      </ul>
        </div>
    </nav>
  )
}
export default Navbar
