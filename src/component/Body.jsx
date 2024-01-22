import { motion } from "framer-motion"
function Body() {
  return (
    <div className="lg:flex justify-between relative mt-40 items-center">
   
<motion.div
initial={{opacity:0,y:20}}
transition={{duration:1}}
whileInView={{opacity:1,y:0}}>
    <h2 className="font-bold text-3xl text-white my-1">Yahoulbo</h2>
    <p className="text-xl font-medium text-gray-500">Solo developper kinda student</p>
    <p className="lg:pe-12 text-gray-500 text-xl my-3 font-medium">Learning about web and trying to help out other devs in the process.
     I love open source and writing about tech occasionally.
</p>
</motion.div>
  <div>
        <motion.img
        initial={{opacity:0,y:-20,scale:.9}}
transition={{duration:1}}
whileInView={{opacity:1,y:0}}
whileHover={{scale:1}}
 src="/yahoulbo-portfolio/devsoftware.jpg" className="lg:w-72 lg:h-36 h-44 w-44 mt-8 lg:mt-0 object-contains rounded-full"/>
      </div>
     
    </div>
  )
}

export default Body
