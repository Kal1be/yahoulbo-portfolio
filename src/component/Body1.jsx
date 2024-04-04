import { motion } from "framer-motion"
function Body1() {
    return (
      <div className="lg:flex justify-between px-2 relative mt-20 items-center">
       <div>
          <motion.img
 src="/yahoulbo-portfolio/FelixDev.png" className="w-72 h-72 my-3 lg:mt-0"/>
        </div>
  <div>
      <h2 className="font-bold text-2xl text-white my-1">Yahoulbo Felix </h2>
      <p className="text-xl font-medium text-gray-500">Frontend Developer</p>
      <p className="lg:pe-12 text-gray-500 text-xl my-3 font-medium">
      Highly motivated and passionate computer scientist and detail-oriented frontend Developer with a strong track record of creating responsive and user-friedly web applications.Proficient in a wide range of technologies including React.js,TypeScript, Node.js and MongoDb with expertise in high scalability  using Next.js for efficient problem-solving abilities and a deep understand of software developpment principles. 
</p>
  </div>
  
      </div>
    )
  }
  
  export default Body1