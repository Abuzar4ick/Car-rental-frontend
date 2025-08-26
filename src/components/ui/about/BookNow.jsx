import { useState } from "react";
// icons
import { IoIosArrowDown } from "react-icons/io";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
// modal
import Modal from "../Modal";

const BookNow = () => {
  const [open, setOpen] = useState(false);

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
    <section className="px-4 md:px-8 lg:px-16 max-md:pt-[60px] min-h-[547px] flex items-center">
      <div className="w-full rounded-[20px] bg-[#5937E0] min-h-[427px] flex items-center justify-center py-10 px-4 md:px-10">
        <div className="min-h-[266px] max-w-[586px] relative text-white text-center flex flex-col gap-4 items-center">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[50px]">
            Looking for a car?
          </h2>
          <a
            href="tel:+998947188410"
            className="font-semibold text-xl sm:text-2xl lg:text-[40px]"
          >
            +998947188410
          </a>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
            fermentum.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="w-[132px] h-[40px] rounded-[12px] bg-[#FF9E0C] cursor-pointer hover:bg-[#ea8f07] transition-colors mt-3"
          >
            Book now
          </button>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-[410px] max-[500px]:w-[350px] bg-white rounded-[20px] shadow-2xl overflow-hidden">
          <form className="p-6 flex flex-col gap-5">
            <p className="text-[20px] sm:text-[24px] font-bold text-center">
              Book your car
            </p>

            {/* Car type */}
            <div className="relative">
              <select
                defaultValue=""
                className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition"
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
              <IoIosArrowDown className="absolute top-3.5 right-4" />
            </div>

            {/* Place of rental */}
            <div className="relative">
              <select
                defaultValue="Tashkent"
                className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition"
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
              <IoIosArrowDown className="absolute top-3.5 right-4" />
            </div>

            {/* Place of return */}
            <div className="relative">
              <select
                defaultValue="Tashkent"
                className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition"
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
              <IoIosArrowDown className="absolute top-3.5 right-4" />
            </div>

            {/* Rental date */}
            <div className="flex flex-col text-start gap-1 text-gray-700 relative">
              <input
                type="text"
                placeholder="Rental date"
                className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition placeholder:text-gray-700"
              />
              <HiMiniCalendarDateRange
                className="absolute top-3 right-3"
                size={20}
              />
            </div>

            {/* Return date */}
            <div className="flex flex-col text-start gap-1 text-gray-700 relative">
              <input
                type="text"
                placeholder="Return date"
                className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition placeholder:text-gray-700"
              />
              <HiMiniCalendarDateRange
                className="absolute top-3 right-3"
                size={20}
              />
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
    </section>
  );
};

export default BookNow;
