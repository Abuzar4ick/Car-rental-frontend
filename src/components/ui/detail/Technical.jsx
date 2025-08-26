import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// icons
import { TbManualGearbox } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { RiUserLine } from "react-icons/ri";
import { GiPathDistance } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
// Modal
import Modal from "../Modal";

const Technical = () => {
  const [car, setCar] = useState({});
  const [open, setOpen] = useState(false);
  const [choosedImg, setChoosedImg] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id: carId } = useParams();

  const places = [
    { id: 1, place_name: "Tashkent", value: "Tashkent" },
    { id: 2, place_name: "Samarqand", value: "Samarqand" },
    { id: 3, place_name: "Buxoro", value: "Buxoro" },
    { id: 4, place_name: "Navoiy", value: "Navoiy" },
    { id: 5, place_name: "Xorazm", value: "Xorazm" },
    { id: 6, place_name: "Namangan", value: "Namangan" },
    { id: 7, place_name: "Jizzax", value: "Jizzax" }
  ];

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch("/cars.json"); // public/cars.json dan o‘qiydi
        if (!res.ok) throw new Error("Failed to fetch car data");
        const data = await res.json();
        const foundCar = data.find((c) => String(c.id) === String(carId));
        if (foundCar) {
          setCar(foundCar);
          setChoosedImg(foundCar.main_image);
        } else {
          setError(new Error("Car not found"));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [carId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <section className="py-6 md:py-[60px] flex flex-col md:flex-row gap-10">
      {/* Chap blok (Asosiy ma'lumot + rasm) */}
      <div className="w-full md:max-w-[50%]">
        {/* Title + Price */}
        <div className="mb-4">
          <h1 className="font-bold text-[28px] md:text-[40px]">{car?.brand}</h1>
          <p className="text-[#5937E0] font-semibold text-[28px] md:text-[40px] flex items-center gap-1">
            ${car?.per_day}
            <span className="text-gray-500 text-[14px] md:text-[16px] font-normal">
              / day
            </span>
          </p>
        </div>

        {/* Main image */}
        <img
          src={choosedImg || "https://via.placeholder.com/400x300?text=No+Image"}
          alt="main"
          className="w-full h-auto max-h-[300px] md:max-h-[360px] object-cover rounded-lg"
        />
      </div>

      {/* O‘ng blok (Texnik ma'lumotlar) */}
      <div className="w-full md:max-w-[50%]">
        <p className="font-semibold text-[20px] md:text-[24px] mb-6">
          Technical Specification
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-[#FAFAFA] rounded-[12px] flex flex-col gap-4 justify-center p-[20px]">
            <TbManualGearbox size={25} />
            <div>
              <p className="font-semibold">Gear Box</p>
              <p className="text-gray-500">{car?.gear_box}</p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-[12px] flex flex-col gap-4 justify-center p-[20px]">
            <BsFuelPump size={25} />
            <div>
              <p className="font-semibold">Fuel</p>
              <p className="text-gray-500">{car?.fuel}</p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-[12px] flex flex-col gap-4 justify-center p-[20px]">
            <GiCarDoor size={25} />
            <div>
              <p className="font-semibold">Doors</p>
              <p className="text-gray-500">{car?.doors}</p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-[12px] flex flex-col gap-4 justify-center p-[20px]">
            <BsFuelPump size={25} />
            <div>
              <p className="font-semibold">Air conditioner</p>
              <p className="text-gray-500">{car?.air_conditioner ? "Yes" : "No"}</p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-[12px] flex flex-col gap-4 justify-center p-[20px]">
            <RiUserLine size={25} />
            <div>
              <p className="font-semibold">Seats</p>
              <p className="text-gray-500">{car?.seats}</p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-[12px] flex flex-col gap-4 justify-center p-[20px]">
            <GiPathDistance size={25} />
            <div>
              <p className="font-semibold">Distance</p>
              <p className="text-gray-500">{car?.distance}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="bg-[#5937E0] hover:bg-[#472ec0] w-[290px] h-[50px] rounded-[12px] text-white mt-12 cursor-pointer"
        >
          Rent a car
        </button>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-[410px] max-[500px]:w-[350px] bg-white rounded-[20px] shadow-2xl overflow-hidden">
          <form className="p-6 flex flex-col gap-5">
            <p className="text-[24px] font-bold text-center">Rent {car?.title}</p>
            <div>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition placeholder:text-gray-700"
              />
            </div>
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

            <div className="flex flex-col text-start gap-1 text-gray-700 relative">
              <input
                type="text"
                placeholder="Rental date"
                className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition placeholder:text-gray-700"
              />
              <HiMiniCalendarDateRange className="absolute top-3 right-3" size={20} />
            </div>

            <div className="flex flex-col text-start gap-1 text-gray-700 relative">
              <input
                type="text"
                placeholder="Return date"
                className="w-full h-[42px] appearance-none outline-none bg-[#FAFAFA] rounded-[12px] px-3 text-gray-700 focus:ring-2 focus:ring-[#5937E0] transition placeholder:text-gray-700"
              />
              <HiMiniCalendarDateRange className="absolute top-3 right-3" size={20} />
            </div>

            <button
              type="submit"
              className="mt-3 h-[42px] bg-[#FF9E0C] text-white rounded-[12px] font-semibold hover:bg-[#ea8f07] cursor-pointer transition-colors"
            >
              Confirm renting
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Technical;
