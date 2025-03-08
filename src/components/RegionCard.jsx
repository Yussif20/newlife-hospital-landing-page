const RegionCard = ({ image, name, title }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* City Name */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
        {name}
      </div>

      {/* Hover Overlay with Title */}
      <div className="absolute inset-0 bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-center text-lg font-semibold px-4">
          {title}
        </p>
      </div>
    </div>
  );
};

export default RegionCard;
