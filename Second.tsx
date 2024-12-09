import React, { ReactNode } from 'react'

const Second = ({children}:{children?:ReactNode}) => {
  return (

    <div className="wrapper  flex  items-end">

    <h1>Features</h1>

<div className=' h-full flex items-end ml-[1200px]'>
{children}
</div>
    </div>



  )
}

export default Second