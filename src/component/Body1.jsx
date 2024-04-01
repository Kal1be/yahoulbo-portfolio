import { motion } from "framer-motion"
function Body1() {
    return (
      <div className="lg:flex justify-between relative mt-32 items-center">
       <div>
          <motion.img
 src="/yahoulbo-portfolio/FelixDev.png" className="lg:w-56 lg:h-36 h-48 w-48 my-8 lg:mt-0"/>
        </div>
  <div>
      <h2 className="font-bold text-2xl text-white my-1">Yahoulbo</h2>
      <p className="text-xl font-medium text-gray-500">Solo developper kinda student</p>
      <p className="lg:pe-12 text-gray-500 my-3 font-medium">Learning about web and trying to help out other devs in the process.
       I love open source and writing about tech is one of my best passion.
  </p>
  </div>
  
      </div>
    )
  }
  
  export default Body1