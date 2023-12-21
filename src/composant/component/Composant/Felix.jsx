import React from 'react'
import { motion } from 'framer-motion'
import "./felix.scss"
function Felix() {
  return (
   <div>
     <div className='aboutfelix'>
     <div>
     <motion.h2 className='felix'
      initial={{opacity:0,x:-200,scale:1}}
      transition={{duration:1}}
      whileInView={{opacity:1,scale:1,x:0}}>
      Hi! My name is <span>Yahoulbo Felix</span>, i'm a<br />
    Web Developper<br/>
    </motion.h2>
    <div>
    <div className='flex md:gap-8 gap-5 my-4 justify-center'>
    <button className='border text-white py-3 px-2 rounded-xl text-sm '>Our latest Project</button>
    <button className='bg-white text-slate-600 text-sm py-3 px-2 rounded-xl'>Contact me</button>
    </div>
    <div className='flex justify-center' id='animate'>
   <img src='./scroll.png' alt='my scroll image' className='center left-[2%] '/>
 </div>
    </div>
   
     </div>
      <motion.img src="./devsoftware.jpg" alt="personnal picture" 
      />
    </div>
   
   </div>
  )
}

export default Felix
