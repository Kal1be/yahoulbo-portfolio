  import React from 'react'
import {motion } from "framer-motion"
function Togglebtn({setOpen}) {
  return (
    <button className='button' onClick={()=>{
      setOpen(prev=>!prev)
    }}>
    <svg width="23" height="23" viewBox='0 0 23 23 '>
  <motion.path strokeWidth="3"
   stroke='black'
    strokeLinecap='round'
    variants={{close:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}/>
  <motion.path strokeWidth="3" stroke='black' strokeLinecap='round'/>
  <motion.path strokeWidth="3" stroke='black'
  strokeLinecap='round'
  variants={{close:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}}/>
    </svg>
    </button>
  )
}

export default Togglebtn
