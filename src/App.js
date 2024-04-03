import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Join from './components/Join/Join.jsx';
import Plans from './components/Plans/Plans.jsx';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';
function App() {
  return (
    <div className="App">
          <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonial/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;