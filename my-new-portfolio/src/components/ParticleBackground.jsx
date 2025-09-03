import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="fixed top-0 left-0 w-full h-full z-0"
      options={{
        background: {
          color: { value: 'transparent' },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 80, // Smaller area of effect
              duration: 1,   // The push-away animation takes 1 second, making it much slower
              speed: 0.2,    // The speed of the repulse is very slow
            },
          },
        },
        particles: {
          color: { value: '#4a5568' },
          links: {
            color: '#4a5568',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: 0.5, // Slowed down the base particle speed
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.2 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;