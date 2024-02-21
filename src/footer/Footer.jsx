import { faGithub, faLinkedin, faSpotify, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Footer() {
  const date = new Date().getFullYear()
  return (
    <div>
    <div className="bg-black py-2 px-2 rounded-xl flex items-center" id="myborder">
    <FontAwesomeIcon icon={faSpotify} className="text-green-500 text-3xl"/>
    <div className="text-white mx-3 ">
    <h2>Not listening</h2>
    <span className="text-gray-400 ">Spotify-</span>
    </div>
    </div>
    <div className="text-white lg:flex my-6">
    <div>
        <h2 className="text-xl font-bold">About me</h2>
        <h3 className="text-gray-400 pe-16 py-3 ">I'm Yahoulbo, a <b>front-end developer</b> who loves intuitive, clean and modern UI design.</h3>
    </div>
    <div className="flex">
        <div className="me-6">
     <h3>Home</h3>
     <h3>Accessibility</h3>
     <h3>My Blog</h3>
     <h3>My Project</h3>
     <h3>Our Service</h3>
        </div>
        <div className="ms-6">
     <h3>About</h3>
     <h3>Blog</h3>
     <h3>Contact</h3>
     <h3>Email me</h3>
     <h3>Whatsapp</h3>
        </div>
    </div>

    </div>
    <hr/>
    <div className="flex justify-between items-center my-6 text-white">
        <p>&copy;Devsoftware <span>Yahoulbo</span> {date}</p>
        <div className="w-32 flex justify-between text-xl">
            <FontAwesomeIcon icon={faWhatsapp}/>
            <FontAwesomeIcon icon={faGithub}/>
            <FontAwesomeIcon icon={faXTwitter}/>
            <FontAwesomeIcon icon={faLinkedin}/>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
