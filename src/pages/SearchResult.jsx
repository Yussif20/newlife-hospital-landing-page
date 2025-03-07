// import { useProductContext } from '../ProductContext';
import Button from '@components/Button';

import { Link } from 'react-router-dom';

export const SearchResult = () => {
  // const { products, searchQuery } = useProductContext();

  // const SearchedProducts = products.filter(
  //   (product) =>
  //     (product.titles[currentLanguage] &&
  //       product.titles[currentLanguage]
  //         .toLowerCase()
  //         .includes(searchQuery.toLowerCase())) ||
  //     (product.titles['en'] &&
  //       product.titles['en'].toLowerCase().includes(searchQuery.toLowerCase()))
  // );

  return (
    <section>
      {[].length > 0 ? (
        <div className="flex items-center flex-wrap gap-2 gap-y-8 justify-evenly py-4">
          {[].map((product) => {
            return <h1 key={product.id}>hello</h1>;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center pt-6">
          <Link to="/">
            <Button></Button>
          </Link>
        </div>
      )}
    </section>
  );
};
