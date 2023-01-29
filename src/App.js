import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SideLinks from './components/SideLinks';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Hero></Hero>
      <SideLinks></SideLinks>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
