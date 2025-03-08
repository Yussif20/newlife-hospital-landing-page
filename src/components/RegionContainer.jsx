import RegionCard from './RegionCard';

import { cities } from '../data';

const RegionContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cities.map((city, index) => (
        <RegionCard
          key={index}
          image={city.image}
          name={city.name}
          title={city.title}
        />
      ))}
    </div>
  );
};

export default RegionContainer;
