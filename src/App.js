import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SideLinks from './components/SideLinks';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Hero></Hero>
      <SideLinks></SideLinks>
      <Navbar></Navbar>
      <About></About>
      {/* <Projects></Projects> */}
    </div>
  );
}

export default App;
