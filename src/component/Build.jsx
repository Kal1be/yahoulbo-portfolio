import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBootstrap, faGithub, faLinkedinIn, faMdb, faNodeJs, faReact, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import {  faArrowRight, faMailBulk} from '@fortawesome/free-solid-svg-icons'
import "./build.scss"
function Build() {
  return (
    <div className='mt-20'>
    {/* ++++++++++++++++++ about my-self and my work _+++++++++++++++++++++++++++++++_+++++++++++++ */}
      <div className='text-xl font-[400] text-gray-200'>
        <p>I'm <span className='text-[#e80b24]'>Yahoulbo</span>, a 19-year-old student belonging to the Federal University of Minna.
         I'm a brother, a son, a friend, a self-taught web developer and programmer,
          an open-source enthusiast, and an extreme melophile.</p>
      </div>
      {/* _++++++++++++++++++++ the social media that we use _++++++++++++++++++++++++++++++++++++++++= */}
      <div className='flex my-3 text-white' id='network'>
        <p className='bg-[#0e4465a0] me-3 py-1 px-1 cursor-pointer rounded-lg font-medium'><FontAwesomeIcon icon={faGithub} className='px-2'/>Github</p>
        <p className='bg-[#0e4465a0] mx-1 lg:mx-2 py-1 px-1 cursor-pointer rounded-lg font-medium'><FontAwesomeIcon icon={faXTwitter} className='px-2'/>Twitter</p>
        <p className='bg-[#0e4465a0] mx-1 lg:mx-2 py-1 px-1 cursor-pointer rounded-lg font-medium'><FontAwesomeIcon icon={faLinkedinIn} className='px-2'/>LinkedinIn</p>
        <p className='bg-[#0e4465a0] mx-1 lg:mx-2 py-1 px-1 cursor-pointer rounded-lg font-medium'><FontAwesomeIcon icon={faMailBulk} className='px-2'/>Email</p>
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
        <div className='rounded-lg py-3 px-2 bg-[#0e4465a0] my-6'>
            <h3 className='text-2xl font-medium text-white'>Built a school website name <span className='text-[#e80b24]'>universite de Toukra</span></h3>
            <h4 className='text-xl font-medium text-gray-300 my-3'>Septembre 2023</h4>
            <p className='text-xl text-gray-300'>We create a university website who help the foreign to know about the university !</p>
        </div>
        <div className='rounded-lg py-3 px-2 bg-[#0e4465a0] my-6'>
            <h3 className='text-2xl font-medium text-white'>Built a school website name <span className='text-[#e80b24]'>universite de Toukra</span></h3>
            <h4 className='text-xl font-medium text-gray-300 my-3'>Septembre 2023</h4>
            <p className='text-xl text-gray-300'>We create a university website who help the foreign to know about the university !</p>
        </div>
        <div className='rounded-lg py-3 px-2 bg-[#0e4465a0] my-6'>
            <h3 className='text-2xl font-medium text-white'>Built a school website name <span className='text-[#e80b24]'>universite de Toukra</span></h3>
            <h4 className='text-xl font-medium text-gray-300 my-3'>Septembre 2023</h4>
            <p className='text-xl text-gray-300'>We create a university website who help the foreign to know about the university !</p>
        </div>
      </div>
        <h2 className='text-xl text-white'>Read more <FontAwesomeIcon icon={faArrowRight} className='mt-2'/></h2>
      </div>
      {/* +______________________________ our peojwct +____________________+++++++++++++++++++++++++++++==== */}
      <hr/>
      <div className='my-20'>
      <h2 className='text-2xl font-bold text-white'>Latest project</h2>
      <div className='lg:flex mt-10'>
       <div className='border h-[50vh] lg:w-[65%] lg:me-2 rounded-xl' id='element'>
about
       </div>
       <div className='border h-[50vh] lg:w-[65%] lg:ms-2 lg:mt-0 mt-4 rounded-xl'  id='element'>
about
       </div>
      </div>
      <h2 className='text-xl my-8 text-white'>Read more <FontAwesomeIcon icon={faArrowRight} className='mt-2'/></h2>
      </div>
    </div>
  )
}

export default Build
