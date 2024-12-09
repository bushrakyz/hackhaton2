import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Topheader = () => {
  return (
  
      
      <div className="bg-primaryColor flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
<Image src="" alt={''} width={24} height={24}/>

<div className="flex md:gap-4 sm:gap-3 gap-2">
  <Link href="#" className="hover:text-gray-800">Find Link Store</Link>
  <Link href="#" className="hover:text-gray-800">Help</Link>
  <Link href="#" className="hover:text-gray-800">Join Us</Link>
  <Link href="#" className="hover:text-gray-800">Sign In</Link>
</div>
</div>



  )
}

export default Topheader