import Test from './Test';
import './app.scss'
import Felix from './composant/component/Composant/Felix';
import MySkills from './composant/component/Composant/MySkills';
import Navbar from './composant/component/navbar/Navbar';
const App = () => {
  return( 
   <div>
    <section id='Homepage'>
      <Navbar/>
     <Felix/>
      </section>
      <section id='Services'>
      <MySkills/>
    </section>
    <section id='About'>About</section>
    <section id='PortFolio'>Portfolio</section>
    <section>Portfolio2</section>
   
    <section id='Project'>Project</section>
    <section id='Contact'>contact</section>
   </div>
  )
};

export default App;
