import React from 'react'
import Link

from 'next/link'
const NavLink = ({href , title}) => {
  return (
    <Link
     href={href}
     className='block py-2 pl-3 pr-4 text-[#000000] sm:text-xl rounded md:p-0 hover:text-rose-400' >
     {title}
    </Link>
  )
}

export default NavLink