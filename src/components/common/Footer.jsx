import { NavLink } from "react-router-dom";
// images
import Logo from "../../../public/Car-rental_logo.svg";
import GooglePlay from '../../assets/Google Play.svg'
import AppStore from '../../assets/App Store.svg'
// icons
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  const networks = [
    { id: 1, icon: <TiSocialFacebook size={25} /> },
    { id: 2, icon: <AiOutlineInstagram /> },
    { id: 3, icon: <FaXTwitter /> },
    { id: 4, icon: <AiOutlineYoutube /> }
  ]

  const usefulLinks = [
    { id: 1, text: 'About Us', link: '/about' },
    { id: 2, text: 'Contact Us', link: '/about' },
    { id: 3, text: 'Gallery', link: '/about' },
    { id: 4, text: 'Blog', link: '/about' },
    { id: 5, text: 'F.A.Q', link: '/about' }
  ]

  const vehicles = [
    { id: 1, text: 'Sedan' },
    { id: 2, text: 'Cabriolet' },
    { id: 3, text: 'Pickup' },
    { id: 4, text: 'Minivan' },
    { id: 5, text: 'SUV' },
  ]

  return (
    <div className="main-container min-h-[279px] flex flex-col gap-10">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">
        <img src={Logo} alt="Logo" className="mx-auto md:mx-0" />

        {/* Address */}
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <div className="text-white bg-[#FF9E0C] flex-shrink-0 rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <IoLocationOutline size={28} />
          </div>
          <div>
            <p>Address</p>
            <p className="font-semibold">Oxford Ave. Cary, NC 27511</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <div className="text-white bg-[#FF9E0C] flex-shrink-0 rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <MdOutlineEmail size={28} />
          </div>
          <div>
            <p>Email</p>
            <p className="font-semibold">nwiger@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <div className="text-white bg-[#FF9E0C] flex-shrink-0 rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <LuPhone size={28} />
          </div>
          <div>
            <p>Phone</p>
            <a href="tel:+998947188410" className="font-semibold">
              +998947188410
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
        {/* Networks */}
        <div className="max-w-[280px] flex flex-col gap-4 mx-auto md:mx-0">
          <p className="font-semibold text-[20px]">
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem t...
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            {networks.map((network) => (
              <div key={network.id} className="w-[30px] h-[30px] cursor-pointer rounded-full bg-black text-white flex items-center justify-center">
                {network.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Useful links */}
        <div className="grid">
          <p className="text-[20px] font-semibold">Useful links</p>
          <div className="flex flex-col text-base/relaxed">
            {usefulLinks.map((usefulLink) => (
              <NavLink key={usefulLink.id} to={usefulLink.link}>
                {usefulLink.text}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Vehicles */}
        <div className="grid">
          <p className="text-[20px] font-semibold">Vehicles</p>
          <div className="flex flex-col text-base/relaxed">
            {vehicles.map((vehicle) => (
              <p key={vehicle.id}>{vehicle.text}</p>
            ))}
          </div>
        </div>

        {/* App */}
        <div className="grid gap-2">
          <p className="text-[20px] font-semibold">Download App</p>
          <img src={GooglePlay} alt="Google play" className="w-[140px] mx-auto md:mx-0" />
          <img src={AppStore} alt="App store" className="w-[140px] mx-auto md:mx-0" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
