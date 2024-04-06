import { faGithub, faLinkedin, faSpotify, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
function Footer() {
  const date = new Date().getFullYear()
  return (
    <div>
    <div className="bg-black py-2 px-2 rounded-xl flex items-center" id="myborder">
    <FontAwesomeIcon icon={faSpotify} className="text-green-500 text-3xl"/>
    <div className="text-white mx-3 ">
    <h2>Am listening</h2>
    <span className="text-gray-400 ">Spotify-plus++</span>
    </div>
    </div>
    <div className="text-white md:flex justify-between items-center lg:flex my-6">
    <div className="md:w-96 w-full">
        <h2 className="text-xl font-bold">About me</h2>
        <h3 className="text-gray-400 pe-16 py-3 ">I`m Yahoulbo, a <b>front-end developer</b> who loves intuitive, clean and modern UI design.</h3>
    </div>
    <div className="md:flex justify-around w-full items-center">
        <div className="me-6">
     <h3 className="text-lg font-medium">Check who i am ?</h3>
     <h3>Accessibility</h3>
     <h3>My Blog</h3>
     <h3>My Project</h3>
  
        </div>
        <div className="md:ms-6 my-2">
     <h3 className="text-lg font-medium">What is my service</h3>
     <h3>Blog</h3>
     <h3>Contact</h3>
     <h3>Email me</h3>
    </div>
    </div>
   
   
      </div>
      <hr className="borde my-3"/>
    <hr/>
    <div className="flex justify-between items-center my-6 text-white">
        <p>&copy;Devsoftware <span className="text-[#e80b24]">Yahoulbo</span> {date}</p>
        <div className="flex gap-3 justify-between text-xl">
          <Link>  <FontAwesomeIcon icon={faWhatsapp}/></Link>
            <Link to="https://github.com/kal1be"><FontAwesomeIcon icon={faGithub}/></Link>
           <Link> <FontAwesomeIcon icon={faXTwitter}/></Link>
          <Link>  <FontAwesomeIcon icon={faLinkedin}/></Link>
        </div>
    </div>
    </div>
  )
}

export default Footer
