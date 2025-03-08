const SectionHeader = ({ title }) => {
  return (
    <h2 className="grid place-items-center relative bg-blueBg bg-cover bg-center text-white p-8">
      <div className="absolute inset-0 bg-[#0591be]"></div>
      <span className="relative z-10 mx-auto text-[32px] font-medium leading-10">
        {title}
      </span>
    </h2>
  );
};

export default SectionHeader;
