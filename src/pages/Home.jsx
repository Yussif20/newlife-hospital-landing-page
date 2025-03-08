import Hero from '@sections/Hero';
import Companies from '../sections/Companies';
import Services from '../sections/Services';

export const Home = () => {
  return (
    <div className="pb-12 bg-[#F5F8FF]">
      <Hero />
      <Companies />
      <Services />
    </div>
  );
};
