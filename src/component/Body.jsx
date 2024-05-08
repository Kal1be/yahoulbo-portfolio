import { motion } from "framer-motion"
import "./build.scss"
function Body() {
  return (
    <div className="w-full flex relative mt-36 items-center">
   
<motion.div className="w-[800px]"
initial={{opacity:0,y:20}}
transition={{duration:1}}
whileInView={{opacity:1,y:0}}>

    <h2 className="font-bold text-2xl text-white my-1">Yahoulbo Felix</h2>
    <p className="text-md font-medium text-gray-500">Frontend Developer</p>
    <p className="my-p lg:pe-12 text-gray-300 text-lg my-1 font-sans ">
      Highly motivated and passionate computer scientist and detail-oriented frontend Developer 
      with a strong track record of creating responsive and user-friedly web applications.
      Proficient in a wide range of technologies including React.js,TypeScript, Node.js and MongoDb with expertise in high scalability  
      using Next.js for efficient problem-solving abilities and a deep understand of software developpment principles. 
</p>
</motion.div>
  <div className="">
        <motion.img 
whileHover={{scale:1}}
initial={{rotate:2,opacity:0,scale:1}} transition={{duration:2}} animate={{rotate:360,opacity:1,scale:1}}
 src="/yahoulbo-portfolio/FelixDev.png" className="my-image h-full w-full lg:mt-0"/>

      </div>
     
    </div>
  )
}

export default Body
