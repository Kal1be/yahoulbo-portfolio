import { motion } from "framer-motion"
<<<<<<< HEAD
import "./build.scss"
function Body1() {
    return (
      <div className="lg:flex justify-between px-2 relative mt-20 items-center">
       <div className="max-4xl flex justify-center w-full mx-auto">
          <motion.img initial={{rotate:2,opacity:0,scale:.2}} transition={{duration:2}} whileInView={{rotate:360,opacity:1,scale:1}}
 src="/yahoulbo-portfolio/FelixDev.png" className="my-image w-96 h-96 my-3 lg:mt-0"/>
=======
function Body1() {
    return (
      <div className="lg:flex justify-between px-2 relative mt-20 items-center">
       <div>
          <motion.img
 src="/yahoulbo-portfolio/FelixDev.png" className="w-72 h-72 my-3 lg:mt-0"/>
>>>>>>> 487160f1f3bb0381bd7a91437a666d60b348900d
        </div>
  <div>
      <h2 className="font-bold text-2xl text-white my-1">Yahoulbo Felix </h2>
      <p className="text-xl font-medium text-gray-500">Frontend Developer</p>
<<<<<<< HEAD
      <p className="lg:pe-12 text-gray-300 text-xl my-3 font-medium">
=======
      <p className="lg:pe-12 text-gray-500 text-xl my-3 font-medium">
>>>>>>> 487160f1f3bb0381bd7a91437a666d60b348900d
      Highly motivated and passionate computer scientist and detail-oriented frontend Developer with a strong track record of creating responsive and user-friedly web applications.Proficient in a wide range of technologies including React.js,TypeScript, Node.js and MongoDb with expertise in high scalability  using Next.js for efficient problem-solving abilities and a deep understand of software developpment principles. 
</p>
  </div>
  
      </div>
    )
  }
  
  export default Body1