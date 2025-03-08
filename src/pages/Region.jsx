import RegionContainer from '../components/RegionContainer';
import RegionSearchBar from '../components/RegionSearchBar';
import SectionHeader from './../components/SectionHeader';

export const Region = () => {
  return (
    <section>
      <SectionHeader title="المدن" />
      <RegionSearchBar />
      <RegionContainer />
    </section>
  );
};
