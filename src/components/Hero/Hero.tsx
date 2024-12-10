import { Hero3D } from './Hero3D';
import { HeroContent } from './HeroContent';

export const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-900">
      <div className="absolute inset-0">
        <Hero3D />
      </div>
      <HeroContent />
    </section>
  );
};