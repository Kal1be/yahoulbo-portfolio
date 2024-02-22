import React from 'react'
import Footer from '../footer/Footer'

function Contact() {
    const handleSubmit=()=>{
    
    }
  return (
    <div className='wrap mt-24'>
        <h3 className='md:text-2xl text-xl font-bold text-white opacity-75'>Leave me a feedback and let's work together!</h3>
        <form onSubmit={handleSubmit}>
            <div className='w-full md:flex gap-12 text-white my-6 '>
                <div className='md:w-[360px]'>
                    <label className='block py-2 text-xl' htmlFor="">Enter your name</label>
                    <input type="text" className='w-full py-2 bg-[#0e4465a0] outline-none ' />
                </div>

                <div className='md:w-[360px]'>
                    <label className='block py-2 text-xl' htmlFor="email">Enter your email</label>
                    <input type="email" className='w-full py-2 bg-[#0e4465a0] outline-none' />
                </div>
            </div>
            <label htmlFor="" className='text-xl text-white'>Your message here!</label>
            <textarea className="w-full text-white bg-[#0e4465a0] my-4 outline-none" name="" id="" cols={30} rows={10}></textarea>
            <button className='text-center bg-white text-black w-full py-2 rounded-xl '>Submit</button>
        </form>

     <div className='mt-4'>
     <Footer/>
     </div>
    </div>
  )
}

export default Contact
