import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../config/particle-config';

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className='App'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={particlesConfig}
      />
    </div>
  );
}
