import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="font-cairo w-full border-b border-gray-300 py-2 dark:bg-darkPrimary dark:text-white">
      <div className="flex items-center justify-end gap-12 px-4 sm:px-12 lg:px-20 py-2 bg-white text-sm">
        <div className="flex gap-4 text-blue-500 font-bold">
          <a href="tel:777999204" className="hover:underline">
            <i className="fa-solid fa-phone text-blue-500"></i>
            777999204
          </a>
          <a href="tel:730000702" className="hover:underline">
            <i className="fa-solid fa-phone text-blue-500"></i>
            730000702
          </a>
        </div>
        <button className="border-2 py-2 px-4">Login</button>
        <div className="flex items-center gap-4">
          <SearchBar />
        </div>
      </div>

      {/* القائمة الرئيسية */}
      <div className="w-5/6 mx-auto flex justify-around gap-8 items-center px-4 sm:px-12 py-2">
        {/* اللوجو */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <img src="logo.png" alt="New Life Logo" className="h-[60px]" />
        </Link>

        {/* القائمة */}
        <nav className=" hidden font-semibold lg:flex gap-8 text-[13px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? 'bg-[#0591be] text-white shadow-md'
                  : 'hover:bg-[#0591be] hover:text-white'
              }`
            }
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/region"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? 'bg-[#0591be] text-white shadow-md'
                  : 'hover:bg-[#0591be] hover:text-white'
              }`
            }
          >
            المدن
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? 'bg-[#0591be] text-white shadow-md'
                  : 'hover:bg-[#0591be] hover:text-white'
              }`
            }
          >
            عن الشركة
          </NavLink>
          <NavLink
            to="/program"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? 'bg-[#0591be] text-white shadow-md'
                  : 'hover:bg-[#0591be] hover:text-white'
              }`
            }
          >
            البرنامج الصحي
          </NavLink>
          <NavLink
            to="/check"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? 'bg-[#0591be] text-white shadow-md'
                  : 'hover:bg-[#0591be] hover:text-white'
              }`
            }
          >
            تحقق من العضوية
          </NavLink>
          <NavLink
            to="/recent"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? 'bg-[#0591be] text-white shadow-md'
                  : 'hover:bg-[#0591be] hover:text-white'
              }`
            }
          >
            أضيف حديث
          </NavLink>
          <NavLink
            to="/area"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? 'bg-[#0591be] text-white shadow-md'
                  : 'hover:bg-[#0591be] hover:text-white'
              }`
            }
          >
            فروعنا
          </NavLink>
          <NavLink
            to="/specials"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? 'bg-[#0591be] text-white shadow-md'
                  : 'hover:bg-[#0591be] hover:text-white'
              }`
            }
          >
            المميزين
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
