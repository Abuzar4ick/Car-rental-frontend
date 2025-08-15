import { useState } from "react";
// image
import HeaderImage from "../../../assets/header-img.svg";
// icons
import { IoIosArrowDown } from "react-icons/io";
// moadl
import Modal from "../Modal";

const Header = () => {
  const [open, setOpen] = useState(false);

  const carTypes = [
    { id: 1, text: "Sport" },
    { id: 2, text: "Sedan" },
    { id: 3, text: "SUV" },
    { id: 4, text: "VAN" },
    { id: 5, text: "Minivan" },
    { id: 6, text: "Pickup" },
    { id: 7, text: "Cabriolet" },
  ];

  const places = [
    { id: 1, place_name: "Tashkent" },
    { id: 2, place_name: "Samarqand" },
    { id: 3, place_name: "Buxoro" },
    { id: 4, place_name: "Navoiy" },
    { id: 5, place_name: "Xorazm" },
    { id: 6, place_name: "Namangan" },
    { id: 7, place_name: "Jizzax" },
  ];

  return (
    <div
      className="w-full h-[660px] sm:h-[660px] xs:h-auto rounded-[40px] flex items-center justify-center p-6 text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(89,55,224,0.85), rgba(89,55,224,0.85)), url(${HeaderImage})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-white max-w-2xl space-y-6 sm:space-y-4 xs:space-y-3">
        <h1 className="font-extrabold text-[56px] leading-tight max-[700px]:text-[46px] max-[500px]:text-[36px] drop-shadow-lg">
          Experience the road like never before
        </h1>
        <p className="text-[16px] xs:text-[14px] opacity-90 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officia
          nesciunt! Dolorem nam ratione consectetur, aut recusandae facere
          totam.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#FF9E0C] hover:bg-[#e18c07] transition-colors duration-200 h-[48px] w-[180px] xs:w-full rounded-[12px] text-white font-semibold shadow-lg">
            View all cars
          </button>
          <button
            onClick={() => setOpen(true)}
            className="bg-transparent border border-white hover:bg-white hover:text-[#5937E0] transition-colors duration-200 h-[48px] w-[180px] xs:w-full rounded-[12px] text-white font-semibold shadow-lg"
          >
            Book now
          </button>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-[410px] max-[500px]:w-[350px] bg-white rounded-[20px] shadow-2xl overflow-hidden">
          <form className="p-6 flex flex-col gap-5">
            <p className="text-[24px] font-bold text-center">
              Book your car
            </p>

            <div className="relative">
            <select className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition">
              <option selected>Car type</option>
              {carTypes.map((carType) => (
                <option key={carType.id}>{carType.text}</option>
              ))}
            </select>
            <IoIosArrowDown className="absolute top-3.5 right-4" />
            </div>

            <div className="relative">
              <select className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition">
                <option selected>Place of rental</option>
                {places.map((place) => (
                  <option key={place.id}>{place.place_name}</option>
                ))}
              </select>
              <IoIosArrowDown className="absolute top-3.5 right-4" />
            </div>

            <div className="relative">
              <select className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition">
              <option selected>Place of return</option>
                {places.map((place) => (
                  <option key={place.id}>{place.place_name}</option>
                ))}
              </select>
              <IoIosArrowDown className="absolute top-3.5 right-4" />
            </div>
            
            <button
              type="submit"
              className="mt-3 h-[42px] bg-[#FF9E0C] text-white rounded-[12px] font-semibold hover:bg-[#ea8f07] cursor-pointer transition-colors"
            >
              Confirm booking
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
