import React from 'react'
import Footer from '../footer/Footer'

function About() {
  return (
  <>
   <div className='wrap mt-24 text-white'>
    <img src="/yahoulbo-portfolio/felx.jpg" className='w-24 border h-24 rounded-full' alt="" />

<h2 className='md:text-xl font-medium my-2 opacity-55 text-lg '>About my-Self
</h2>
<div className='my-2 text-xl'>
    <p>Hello my name is <span className='text-[#e80b24]'>Yahoulbo Felix</span>,i'm a software developer,student,self motivator,programmer.</p>
    <br />
    <p>As i say,i'm a hard-worker and my ability to learn fast help me alot for entirely my life.</p>
</div>
<div className='text-xl my-4'>

    <h3 className='text-xl font-bold opacity-75 text-[#e80b24]'>About my current work</h3>
    <p>As a developper,i'm currently seeking for an internship opportunity to further enhance skills in 
      HTML,CSS3, JavaScript, React.js(Next.js), TypeScript, Node.js and MongoDb while gained practical experience in a professional environment!</p>
</div>
</div>
<div className='px-3'>
<h3 className='text-2xl opacity-75 my-5 text-gray-200'>Download my CV here!</h3>

<a className='bg-[#0e4465a0] border rounded-xl text-gray-400 py-2 px-3 my-2' href="/yahoulbo-portfolio/dev-felix.pdf" download>Download CV</a>
</div>
<div className='mt-8'>
<Footer/>
</div>
</> 
  )
}

export default About
