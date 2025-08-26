import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// icons
import { FaArrowRight } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";

const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("/cars.json");
        if (!res.ok) {
          throw new Error("Failed to fetch cars data");
        }
        const data = await res.json();
        setCars(data.slice(0, 6));
      } catch (err) {
        console.error("Data fetching error:", err);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="w-full sm:px-6 lg:px-8 py-[60px]">
      <div className="flex flex-col md:flex-row md:justify-between w-full md:min-h-[118px] gap-2 mb-10">
        <div className="md:w-1/2">
          <p className="font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] leading-tight">
            Choose the car that suits you
          </p>
        </div>
        <div className="md:w-1/2 flex md:justify-end items-start md:items-end">
          <NavLink
            to="/vehicles"
            className="font-bold hover:underline text-[16px] sm:text-[18px] md:text-[20px] flex items-center gap-2"
          >
            View All <FaArrowRight />
          </NavLink>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => {
          return (
            <div
              key={car.id}
              className="w-full bg-[#FAFAFA] rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-full h-[220px] overflow-hidden relative rounded-[20px]">
                <img
                  src={car.main_image}
                  alt={car.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow p-5 justify-between">
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h2 className="font-bold text-lg">{car.title}</h2>
                      <p className="text-gray-500">{car.type}</p>
                    </div>
                    <p className="text-right font-bold text-indigo-600">
                      ${car.per_day} <br />
                      <span className="text-sm font-normal text-gray-500">
                        per day
                      </span>
                    </p>
                  </div>

                  <div className="flex justify-around text-gray-600 mt-4">
                    <p className="flex items-center gap-2 text-sm">
                      <GiGearStickPattern size={18} className="text-black" />
                      {car.gear_box}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <BsFillFuelPumpDieselFill
                        size={18}
                        className="text-black"
                      />
                      {car.fuel}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <FaRegSnowflake size={18} className="text-black" />
                      {car.air_conditioner ? "AC" : "Fan"}
                    </p>
                  </div>
                </div>

                <NavLink
                  className="mt-6 w-full py-3 text-center rounded-[12px] cursor-pointer bg-[#5937E0] hover:bg-[#472ec0] text-white font-semibold"
                  to={`/vehicles/${car.id}`}
                >
                  View Details
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarsList;
