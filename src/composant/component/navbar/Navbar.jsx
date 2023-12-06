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
         initial={{opacity:0.5,scale:0.5}}
         transition={{duration:2}}
         whileInView={{opacity:1,scale:1}}
         >Yahoulbo Felix</motion.span>
        <motion.div className="social"
        initial={{x:-200,scale:0,opacity:0}}
        transition={{duration:2}}
        whileInView={{opacity:1,scale:1,x:0}}
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
