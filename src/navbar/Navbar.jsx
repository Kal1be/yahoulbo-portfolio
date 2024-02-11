import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight, faBars, faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
function Navbar() {
  const [open,setOpen]=useState(false)
  return (
   <div className="fixed z-50 top-3 shadow-xl">
     <div className="wrapper flex justify-between items-center rounded-2xl">
      <div className="">
        <h2 className=" font-bold text-xl" id="felix">Yahoulbo</h2>
      </div>
      <div>
        <ul className="md:flex justify-between text-xl" id={open?"open":"close"}>
        <FontAwesomeIcon icon={faClose} className="absolute right-4 bg-white p-2 text-[#0e4465]" onClick={()=>{
          setOpen(!open)
        }} id="toclo"/>
            <li  className="mx-3" onClick={()=>setOpen(!open)}><Link to="/yahoulbo-portfolio/">Home</Link></li>
            <li  className="mx-3">About <FontAwesomeIcon icon={faChevronRight} className="text-sm" id="icon-none"/></li>
            <li  className="mx-3">Blog <FontAwesomeIcon icon={faChevronRight} className="text-sm" id="icon-none"/></li>
            <li  className="mx-3">Service<FontAwesomeIcon icon={faChevronRight} className="text-sm" id="icon-none"/></li>
            <li  className="mx-3">Contact<FontAwesomeIcon icon={faChevronRight} className="text-sm" id="icon-none"/></li>

        </ul>
        <h4 className="my-btn text-2xl" onClick={()=>{
          setOpen(!open)
        }}><FontAwesomeIcon icon={faBars} /></h4>
      </div>
    </div>
   </div>
  )
}

export default Navbar
