import RegionContainer from '../components/RegionContainer';
import RegionSearchBar from '../components/RegionSearchBar';

export const Region = () => {
  return (
    <section>
      <h3 className="grid place-items-center relative bg-blueBg bg-cover bg-center text-white p-8">
        <div className="absolute inset-0 bg-[#0591be]"></div>
        <span className="relative z-10 mx-auto text-[32px] font-medium leading-10">
          المدن
        </span>
      </h3>
      <RegionSearchBar />
      <RegionContainer />
    </section>
  );
};
