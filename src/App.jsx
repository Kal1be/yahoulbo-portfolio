import Test from './Test';
import './app.scss'
import Felix from './composant/component/Composant/Felix';
import MySkills from './composant/component/Composant/MySkills';
import Navbar from './composant/component/navbar/Navbar';
import Parallax from './composant/component/parallax/parallax';
import Service from './composant/component/Composant/sefrvices/Service';
const App = () => {
  return( 
   <div>
    <section id='Homepage'>
      <Navbar/>
     <Felix/>
      </section>
      <section id='Services'>
     <Parallax type="services"/>
    </section>
    <section id='About'>
      <Service/>
    </section>
    <section id='PortFolio'> 
     <Parallax type="portfolio"/>
    </section>
    <section>Portfolio2</section>
   
    <section id='Project'>Project</section>
    <section id='Contact'>contact</section>
   </div>
  )
};

export default App;
