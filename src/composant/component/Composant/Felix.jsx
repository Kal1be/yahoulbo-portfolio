import React from 'react'
import { motion } from 'framer-motion'
import "./felix.scss"

const textVariants={
  initial:{
    x:-500,
    opacity:0
  },
 animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    },
    scrollButton:{
      opacity:0,
      y:10,
      transition:{
        duration:2,
        repeat:Infinity
      }

    }
  }
}
const SliderVariants={
  initial:{
    x:0,
  },
 animate:{
    x:"-50%",
   
    transition:{
      duration:10,
      repeat:Infinity,
      repeatType:"mirror"
    }
  }
}
function Felix() {
  return (
   <div>
     <div className='aboutfelix'>
     <motion.div variants={textVariants} initial="initial" animate="animate">
     <motion.h2  variants={textVariants}
     className='felix'
      initial={{opacity:0,x:-200,scale:1}}
      transition={{duration:1}}
      whileInView={{opacity:1,scale:1,x:0}}>
      Hi! My name is <span className='text-red-600'>Yahoulbo Felix</span>, i'm a<br />
    Web Developper<br/>
    </motion.h2>
    <div>
    <motion.div  variants={textVariants} className='flex md:gap-4 gap-4 my-4 justify-center'>
    <motion.button variants={textVariants} 
     className='border text-white py-3 px-2 rounded-lg text-sm font-bold '>Our latest Project</motion.button>
    <motion.button  variants={textVariants}
    className='bg-white text-slate-600 text-sm py-3 px-2 rounded-lg font-bold'>Contact me</motion.button>
    </motion.div>
    <div className='flex justify-center' id='animate'>
   <motion.img   variants={textVariants} src='./scroll.png' animate=" scrollButton" alt='my scroll image' className='center left-[2%] '/>
 </div>
 <motion.div className='slidingTextContainer' variants={SliderVariants} initial="initial" animate="animate">
Writer Content Creator Influencer </motion.div>
    </div>
   
     </motion.div>
      <motion.img src="./devsoftware.jpg" alt="personnal picture" className='z-100'
      />
    </div>
   
   </div>
  )
}

export default Felix
