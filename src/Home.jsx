import Body from './component/Body';
import Body1 from './component/Body1';
import Build from './component/Build';
import Scroll from './component/Scroll';
import Footer from './footer/Footer';

function Home() {
  return (
    <div>
       <div className='wrap '>
  <div className='laptop'>
  <Body/>
  </div>
  <div className='phone'>
    <Body1/>
  </div>
  <Build/>
  <Footer/>
  <Scroll/>
   </div>
    </div>
  )
}

export default Home
