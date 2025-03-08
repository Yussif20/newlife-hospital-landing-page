import logoImage from '../assets/footer/logo.png';
import googlePlayImage from '../assets/footer/google-play.jpg';
import appStoreImage from '../assets/footer/play-store.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#F5F8FF]">
      <div className="mx-auto max-w-[900px] border-t-4 border-[#0591BE]">
        <div className="w-full flex items-center justify-between mt-4">
          <img className="h-[60px]" src={logoImage} alt="Logo" />
          <div className="flex items-center justify-center gap-6">
            <img
              className="h-[60px]"
              src={googlePlayImage}
              alt="Google play download"
            />
            <img
              className="h-[60px]"
              src={appStoreImage}
              alt="App store download"
            />
          </div>
        </div>
        <p className="bg-[#0591be] py-4 mt-4 text-center text-[#FAFAFA] ">
          جميع الحقوق محفوظة لشركة نيولايف للرعاية الصحية ©
        </p>
      </div>
    </footer>
  );
};

export default Footer;
