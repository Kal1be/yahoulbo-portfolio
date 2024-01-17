// import Test from './Test';
import './app.scss'
import Body from './component/Body';
import Body1 from './component/Body1';
import Build from './component/Build';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const App = () => {
  return( 
   <div>
   <Navbar/>
   <div className='wrap '>
  <div className='laptop'>
  <Body/>
  </div>
  <div className='phone'>
    <Body1/>
  </div>
  <Build/>
  <Footer/>
   </div>
   </div>
  )
};

export default App;
