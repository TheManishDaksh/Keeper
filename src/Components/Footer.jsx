import React from 'react'
import {format} from "date-fns"

function Footer() {
    const currentDate = Date.now()
  return (
    <footer>
        <p >@copyright {format(currentDate,"yyyy-MM-dd")}</p>
    </footer>
  )
}

export default Footer