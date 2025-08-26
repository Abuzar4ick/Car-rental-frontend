// icons
import { IoIosArrowDown } from "react-icons/io";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { GoStopwatch } from "react-icons/go";

const Book = () => {
  const carTypes = [
    { id: 1, text: "Sport", value: "Sport" },
    { id: 2, text: "Sedan", value: "Sedan" },
    { id: 3, text: "SUV", value: "SUV" },
    { id: 4, text: "VAN", value: "VAN" },
    { id: 5, text: "Minivan", value: "Minivan" },
    { id: 6, text: "Pickup", value: "Pickup" },
    { id: 7, text: "Cabriolet", value: "Cabriolet" },
  ];

  const places = [
    { id: 1, place_name: "Tashkent", value: "Tashkent" },
    { id: 2, place_name: "Samarqand", value: "Samarqand" },
    { id: 3, place_name: "Buxoro", value: "Buxoro" },
    { id: 4, place_name: "Navoiy", value: "Novoiy" },
    { id: 5, place_name: "Xorazm", value: "Xorazm" },
    { id: 6, place_name: "Namangan", value: "Namangan" },
    { id: 7, place_name: "Jizzax", value: "Jizzax" },
  ];

  return (
    <div className="min-h-[650px] w-full flex flex-col md:flex-row items-center justify-center gap-8 py-10 px-4">
      
      {/* Booking form */}
      <div className="w-[410px] max-[500px]:w-[350px] bg-gradient-to-b from-[#6a48eb] to-[#4f2ed8] rounded-[20px] shadow-xl overflow-hidden hover:shadow-2xl transition">
        <form className="p-6 flex flex-col gap-5 text-white">
          <p className="text-[22px] sm:text-[26px] font-bold text-center mb-2">
            Book your car
          </p>

          {/* Car type */}
          <div className="relative">
            <select
              defaultValue=""
              className="w-full h-[45px] appearance-none outline-none bg-[#7d62f0] rounded-[12px] px-3 pr-10 focus:ring-2 focus:ring-[#FF9E0C] transition"
            >
              <option value="" disabled>
                Car type
              </option>
              {carTypes.map((carType) => (
                <option key={carType.id} value={carType.value}>
                  {carType.text}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="absolute top-3.5 right-4 pointer-events-none" />
          </div>

          {/* Place of rental */}
          <div className="relative">
            <select
              defaultValue="Tashkent"
              className="w-full h-[45px] appearance-none outline-none bg-[#7d62f0] rounded-[12px] px-3 pr-10 focus:ring-2 focus:ring-[#FF9E0C] transition"
            >
              <option value="" disabled>
                Place of rental
              </option>
              {places.map((place) => (
                <option key={place.id} value={place.value}>
                  {place.place_name}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="absolute top-3.5 right-4 pointer-events-none" />
          </div>

          {/* Place of return */}
          <div className="relative">
            <select
              defaultValue="Tashkent"
              className="w-full h-[45px] appearance-none outline-none bg-[#7d62f0] rounded-[12px] px-3 pr-10 focus:ring-2 focus:ring-[#FF9E0C] transition"
            >
              <option value="" disabled>
                Place of return
              </option>
              {places.map((place) => (
                <option key={place.id} value={place.value}>
                  {place.place_name}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="absolute top-3.5 right-4 pointer-events-none" />
          </div>

          {/* Rental date */}
          <div className="relative">
            <input
              type="text"
              placeholder="Rental date"
              className="w-full h-[45px] bg-[#7d62f0] rounded-[12px] px-3 pr-10 outline-none focus:ring-2 focus:ring-[#FF9E0C] transition placeholder:text-white"
            />
            <HiMiniCalendarDateRange className="absolute top-3 right-3" size={20} />
          </div>

          {/* Return date */}
          <div className="relative">
            <input
              type="text"
              placeholder="Return date"
              className="w-full h-[45px] bg-[#7d62f0] rounded-[12px] px-3 pr-10 outline-none focus:ring-2 focus:ring-[#FF9E0C] transition placeholder:text-white"
            />
            <HiMiniCalendarDateRange className="absolute top-3 right-3" size={20} />
          </div>

          <button
            type="submit"
            className="mt-6 h-[45px] bg-[#FF9E0C] text-white rounded-[12px] font-semibold hover:bg-[#e58d08] cursor-pointer transition-colors"
          >
            Book now
          </button>
        </form>
      </div>

      {/* Contact info */}
      <div className="flex flex-col gap-6 w-full max-w-[380px]">
        {[
          { icon: <IoLocationOutline size={26} />, label: "Address", value: "Oxford Ave. Cary, NC 27511" },
          { icon: <MdOutlineEmail size={26} />, label: "Email", value: "nwiger@gmail.com" },
          { icon: <LuPhone size={26} />, label: "Phone", value: "+998947188410", link: "tel:+998947188410" },
          { icon: <GoStopwatch size={26} />, label: "Opening hours", value: "Sun-Mon: 10am - 10pm" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 rounded-xl shadow-md bg-white hover:shadow-lg transition">
            <div className="text-white bg-[#FF9E0C] rounded-full w-[42px] h-[42px] flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <p className="text-gray-600 text-sm">{item.label}</p>
              {item.link ? (
                <a href={item.link} className="font-semibold text-gray-900 hover:text-[#FF9E0C]">
                  {item.value}
                </a>
              ) : (
                <p className="font-semibold text-gray-900">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
