// import Test from './Test';
import Home from './Home';
import './app.scss'
import Navbar from './navbar/Navbar';
import {useState,useEffect} from "react"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  const [isloaded,setIsloaded]=useState(false);
  useEffect(()=>{
      setTimeout(() => {
          setIsloaded(true)
      },7000);
  },[])
  if(!isloaded){
     return(
      <div className='preloader bg-gray-100'>
       <span className='animation1'>D</span>
        <span className='animation2'>E</span>
        <span className='animation2'>V</span>
       </div>
     )
  }
  return( 
   <BrowserRouter>
      <Navbar/>
   <Routes>
  <Route path='/yahoulbo-portfolio/' base element={<Home/>}/>
   </Routes>
  
   </BrowserRouter>
  )
};

export default App;
