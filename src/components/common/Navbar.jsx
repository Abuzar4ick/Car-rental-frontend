import { NavLink } from "react-router-dom";
import { useState } from "react";
// images
import Logo from "../../../public/Car-rental_logo.svg";
import Phone from "../../assets/phone-img.svg";
// icons
import { FiMenu } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const links = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Vehicles", link: "/vehicles" },
    { id: 3, text: "Details", link: null },
    { id: 4, text: "About Us", link: "/about" },
    { id: 5, text: "Contact Us", link: "/contact" },
  ];

  return (
    <nav className="main-container h-[104px] flex justify-between items-center relative">
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>

      <ul className="flex gap-[30px] max-[950px]:hidden">
        {links.map((link) => (
          <NavLink key={link.id} to={link.link}>
            {link.text}
          </NavLink>
        ))}
      </ul>

      <div className="flex gap-[12px] max-[950px]:hidden">
        <img src={Phone} alt="phone" />
        <div>
          <p>Need help?</p>
          <a href="tel:+998947188410" className="font-semibold">
            +998947188410
          </a>
        </div>
      </div>

      <div className="min-[950px]:hidden flex z-50">
        {showMenu ? (
          <RiCloseLargeLine size={30} onClick={toggleMenu} />
        ) : (
          <FiMenu size={30} onClick={toggleMenu} />
        )}
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-[50%] max-[550px]:w-[70%] bg-white transform transition-transform duration-300 z-40 min-[950px]:hidden flex ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 p-6">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              onClick={() => setShowMenu(false)}
              className="hover:text-blue-400 text-lg"
            >
              {link.text}
            </NavLink>
          ))}
        </ul>
      </div>

      {showMenu && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-[#3333338d] bg-opacity-50 z-30 min-[950px]:hidden flex"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
