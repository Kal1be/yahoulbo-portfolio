import React from 'react'
import './navbar.scss'
import {motion} from "framer-motion"
import Sidebar from '../sidebar/sidebar'

function Navbar() {
  return (
    <div className='navbar'>
     {/* Sidebar */}
     <Sidebar/>
     <div className="wrapper">
        <motion.span
         >Yahoulbo Felix</motion.span>
        <motion.div className="social"
        >
           <a href="#"><img src="/yahoulbo-portfolio/facebook.png" alt="" /></a>
           <a href="#"><img src="/yahoulbo-portfolio/instagram.png" alt="" /></a>
           <a href="#"><img src="/yahoulbo-portfolio/youtube.png" alt="" /></a>
           <a href="#"><img src="/yahoulbo-portfolio/dribbble.png" alt="" /></a>
        </motion.div>
     </div>
    </div>
  )
}

export default Navbar
