import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBootstrap, faGithub, faLinkedinIn, faMdb, faNodeJs, faReact, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import {  faArrowRight, faMailBulk} from '@fortawesome/free-solid-svg-icons'
import "./build.scss"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
function Build() {
  return (
    <div className='lg:mt-20 mt-10'>
    {/* ++++++++++++++++++ about my-self and my work _+++++++++++++++++++++++++++++++_+++++++++++++ */}
      <div className='text-xl font-[400] text-gray-200'>
        <p>I'm <span className='text-[#e80b24]'>Yahoulbo</span>, a 19-year-old student belonging to the Federal University of Minna.
         I'm a brother, a son, a friend, a self-taught web developer and programmer,
          an open-source enthusiast, and an extreme melophile.</p>
      </div>
      {/* _++++++++++++++++++++ the social media that we use _++++++++++++++++++++++++++++++++++++++++= */}
      <div className='flex my-3 text-white' id='network'>
        <p className='bg-[#0e4465a0] me-3 py-1 px-1 cursor-pointer rounded-lg font-medium'><a href='https://github.com/kal1be'><FontAwesomeIcon icon={faGithub} className='px-2'/>Github</a></p>
        <p className='bg-[#0e4465a0] mx-1 lg:mx-2 py-1 px-1 cursor-pointer rounded-lg font-medium'><a href='https://xtwiter.com/kalibe'><FontAwesomeIcon icon={faXTwitter} className='px-2'/>Twitter</a></p>
        <p className='bg-[#0e4465a0] mx-1 lg:mx-2 py-1 px-1 cursor-pointer rounded-lg font-medium'><a href='https://www.linkedin.com/in/kalibe-felix-38aa2a294'><FontAwesomeIcon icon={faLinkedinIn} className='px-2'/>LinkedinIn</a></p>
        <p className='bg-[#0e4465a0] mx-1 lg:mx-2 py-1 px-1 cursor-pointer rounded-lg font-medium'><a href='https://gmail.com/yahoulbofelix@gmail.com'><FontAwesomeIcon icon={faMailBulk} className='px-2'/>Email</a></p>
      </div>
      {/* _+++++++++++++++++++ the current skills that we working _++++++++++++++++++++++ */}
      <div className='my-20'>
       <h2 className='text-2xl font-bold text-white'>Current favorite tech stack/tools</h2>
       <div className='text-gray-400 text-3xl flex justify-between  w-52 mt-6'>
       <FontAwesomeIcon icon={faBootstrap}/>
       <FontAwesomeIcon icon={faReact}/>
       <FontAwesomeIcon icon={faNodeJs}/>
       <FontAwesomeIcon icon={faMdb}/>
       </div>
      </div>

      <hr/>
      {/* +++++++++++++++++ our latest blog _+++++++++++++++++++++++++++++++++++++= */}
      <div className='my-20'>
      <h2 className='text-2xl font-bold text-white'>Our latest blog</h2>
      <div>
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
         className='rounded-lg py-3 px-2 bg-[#0e4465a0] my-6'>
            <h3 className='text-2xl font-medium text-white'>Built a school website name <span className='text-[#e80b24]'>universite de Toukra</span></h3>
            <h4 className='text-xl font-medium text-gray-300 my-3'>Septembre 2023</h4>
            <p className='text-xl text-gray-300'>We create a university website who help the foreign to know about the university !</p>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}} className='rounded-lg py-3 px-2 bg-[#0e4465a0] my-6'>
            <h3 className='text-2xl font-medium text-white'> Build a Web documentation named <span className='text-[#e80b24]'>WebDocs</span></h3>
            <h4 className='text-xl font-medium text-gray-300 my-3'>october 2023</h4>
            <p className='text-xl text-gray-300'>the website was create to help the beginner to get some knowledge with html,css and javascript.</p>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}} className='rounded-lg py-3 px-2 bg-[#0e4465a0] my-6'>
            <h3 className='text-2xl font-medium text-white'>Built a<span className='text-[#e80b24]'>AnasDev</span> Institute</h3>
            <h4 className='text-xl font-medium text-gray-300 my-3'>november 2023</h4>
            <p className='text-xl text-gray-300'>The website is created to teach user with programming and data analyst course and certified with it.</p>
        </motion.div>
      </div>
        <h2 className='text-xl text-white'>Read more <FontAwesomeIcon icon={faArrowRight} className='mt-2'/></h2>
      </div>
      {/* +______________________________ our peojwct +____________________+++++++++++++++++++++++++++++==== */}
      <hr/>
      <div className='my-20'>
      <h2 className='text-2xl font-bold text-white'>Latest project</h2>
      <p className='text-white text-xl my-2'>Click on these picture to enter the website .</p>
      {/* _++++++++++++++++++ the first latest project_++++++++++++++++++++++++++++ */}
      <div className='lg:flex mt-10'>
       <Link className='lg:w-[65%]' to="https://kal1be.github.io/toukra-project">
       <div className='border  lg:me-2' id='element'>
<img src='/yahoulbo-portfolio/toukra1.png' className='h-[35vh] w-full'/>
<h4 className='text-xl font-medium text-gray-300 my-3 px-1'>Septembre 2023</h4>
<p className='text-xl my-2 text-white px-1'>the university website was created in the objectif to help the foreign
 to know more about the university and know about their program.</p>
       </div></Link>
     <Link className='lg:w-[65%]' to="https://kal1be.github.io/business-plan">
     <div className='border  lg:ms-2 lg:mt-0 mt-4'  id='element'>
       <motion.img 
      src='/yahoulbo-portfolio/tou.png' className='h-[35vh] w-full'/>
       <h4 className='text-xl font-medium text-gray-300 px-1 my-3'>Janvier 2024</h4>
       <p className='text-xl my-2 text-white px-1'>TchadCommerce.com is the e-commerce online create to help our customer to ask some price of the product that the need to get and buy directly online .</p>
       </div></Link>
      </div>
      {/* +____________________=++++++++++++++++++++ the second latest project+_______________________________+++++++++++++++++ */}

      <div className='lg:flex mt-10'>
      <Link className='lg:w-[65%]' to="https://anasdev-school.vercel.app">
      <div className='border  lg:me-2' id='element'>
<img src='/yahoulbo-portfolio/anasdev.png' className='h-[35vh] w-full'/>
<h4 className='text-xl font-medium text-gray-300 my-3 px-1'>Janvier 2024</h4>
<p className='text-xl my-2 text-white px-1'>AnasDev is created to teach technologie course and some others features and get certified after learn some course .</p>
       </div></Link>
      <Link className='lg:w-[65%]'>
      <div className='border  lg:ms-2 lg:mt-0 mt-4'  id='element'>
       <motion.img 
      src='/yahoulbo-portfolio/webdocs.png' className='h-[35vh] w-full'/>
       <h4 className='text-xl font-medium text-gray-300 px-1 my-3'>septembre 2023</h4>
       <p className='text-xl my-2 text-white px-1'>WebDocs is created to teach the beginner some knowledge with some language like javascript,css,python,etc...</p>
       </div></Link>
      </div>
      <h2 className='text-xl my-8 text-white'>View more <FontAwesomeIcon icon={faArrowRight} className='mt-2'/></h2>
      </div>
    </div>
  )
}

export default Build
