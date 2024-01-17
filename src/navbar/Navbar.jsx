import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
function Navbar() {
  return (
   <div className="fixed z-50 top-3 shadow-xl">
     <div className="wrapper flex justify-between items-center rounded-2xl">
      <div className="">
        <h2 className=" font-bold text-xl" id="felix">Yahoulbo</h2>
      </div>
      <div>
        <ul className="lg:flex justify-between text-xl" id="open">
            <li  className="mx-3">Home</li>
            <li  className="mx-3">About</li>
            <li  className="mx-3">Blog</li>
            <li  className="mx-3">Service</li>
            <li  className="mx-3">Contact</li>
        </ul>
        <h4 className="my-btn text-2xl"><FontAwesomeIcon icon={faBars}/></h4>
      </div>
    </div>
   </div>
  )
}

export default Navbar
