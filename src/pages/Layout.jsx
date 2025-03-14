import Header from '@components/Header';
// import TopHeader from '@components/TopHeader';
import Footer from '@sections/Footer.jsx';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      {/* <TopHeader /> */}
      <Header />
      <main className="font-inter w-screen min-h-[72vh] bg-[#F5F8FF] pt-36">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
