import React from 'react'
import {format} from "date-fns"

function Footer() {
    const currentDate = Date.now()
  return (
    <div>
        <p className='text-center text-slate-400' >@copyright {format(currentDate,"yyyy-MM-dd")}</p>
    </div>
  )
}

export default Footer