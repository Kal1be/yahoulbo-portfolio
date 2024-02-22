import React from 'react'
import Footer from '../footer/Footer'

function About() {
  return (
    <div className='wrap mt-24 text-white'>
        <h2 className='md:text-2xl font-extrabold my-2 opacity-55 text-xl '>About my-Self
        </h2>
        <div className='my-2 text-xl'>
            <p>Hello my name is <span className='text-[#e80b24]'>Yahoulbo Felix</span>,i'm a software developer,student,self motivator,programmer.</p>
            <br />
            <p>As i say,i'm a hard-worker and my ability to learn fast help me alot for entirely my life.</p>
        </div>
        <div className='text-xl my-4'>
            <h3 className='text-xl font-bold opacity-75 text-[#e80b24]'>Some of my project</h3>
            <p>As a developper,i'm working right now in Telesoftas Company and the way this company going
                 excite me to bring the skills and expertise i have gained to put to the way!</p>
        </div>
        <h3 className='text-2xl opacity-75 mt-4 mb-3'>Download my CV here!</h3>
        <button className='bg-[#0e4465a0] border rounded-xl py-2 px-3 my-2'>Download CV</button>
    <div className='mt-4'>
    <Footer/>
    </div>
    </div>
  )
}

export default About
