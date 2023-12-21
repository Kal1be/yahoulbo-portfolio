import React from 'react'
import { motion } from 'framer-motion'

function Links({setOpen}) {
  const links = [
    "Homepage",
    "Services",
    "Project",
    "PortFolio",
    "Contact",
    "About" 

  ]
  return (
    <div className='links'>
    {links.map(item=>{
      return(
          <motion.a
          initial={{opacity:0}}
          transition={{duration:2}}
          whileInView={{opacity:1}}
          
           href={`#${item}`} onClick={()=>setOpen(prev=>!prev)} key={item}>{item}</motion.a>
      )
    })}
    </div>
  )
}

export default Links
