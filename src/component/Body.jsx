import { motion } from "framer-motion"
function Body() {
  return (
    <div className="lg:flex w-full justify-between relative mt-40 items-center">
   
<motion.div className="w-[690px]"
initial={{opacity:0,y:20}}
transition={{duration:1}}
whileInView={{opacity:1,y:0}}>
    <h2 className="font-bold text-3xl text-white my-1">Yahoulbo Felix</h2>
    <p className="text-xl font-medium text-gray-500">Frontend Developer</p>
    <p className="lg:pe-12 text-gray-500 text-xl my-3 font-medium">
      Highly motivated and passionate computer scientist and detail-oriented frontend Developer with a strong track record of creating responsive and user-friedly web applications.Proficient in a wide range of technologies including React.js,TypeScript, Node.js and MongoDb with expertise in high scalability  using Next.js for efficient problem-solving abilities and a deep understand of software developpment principles. 
</p>
</motion.div>
  <div className="">
        <motion.img 
//         initial={{opacity:0,y:-20,scale:.9}}
// transition={{duration:1}}
// whileInView={{opacity:1,y:0}}
// whileHover={{scale:1}}
 src="/yahoulbo-portfolio/FelixDev.png" className=" h-full w-full mt-8 lg:mt-0"/>
      </div>
     
    </div>
  )
}

export default Body
