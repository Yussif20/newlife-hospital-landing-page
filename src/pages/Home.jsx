import Hero from '@sections/Hero';
import Companies from '../sections/Companies';
import Services from '../sections/Services';

export const Home = () => {
  return (
    <div className="pb-12 bg-gray-100">
      <Hero />
      <Companies />
      <Services />
    </div>
  );
};
