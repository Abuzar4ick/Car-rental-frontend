import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// icons
import { FaArrowRight } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";
// use axios
import useAxios from "../../../hooks/useAxios";

const CarsList = () => {
  const { id } = useParams(); // ✅ URL dan id olamiz
  const { request, loading, error } = useAxios();
  const [cars, setCars] = useState([]);
  const cloudBaseUrl = `${import.meta.env.VITE_CLOUDINARY_URL}`;

  useEffect(() => {
    (async () => {
      const result = await request({
        url: `${import.meta.env.VITE_API}/cars`,
      });

      if (result?.success) {
        setCars(result.data);
      }
    })();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // ✅ Hozirgi sahifadagi car ni chiqarib tashlash
  const filteredCars = id ? cars.filter((car) => String(car.id) !== id) : cars;

  return (
    <div className="w-full sm:px-6 lg:px-8 pt-[60px]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 mb-10">
        <p className="font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px]">
          Other cars
        </p>
        <div className="md:w-1/2 flex md:justify-end">
          <NavLink
            to="/vehicles"
            className="font-bold hover:underline text-[16px] sm:text-[18px] md:text-[20px] flex items-center gap-2"
          >
            View All <FaArrowRight />
          </NavLink>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car) => {
          const imageUrl = car.main_image
            ? cloudBaseUrl + car.main_image
            : "https://via.placeholder.com/300x220?text=No+Image";
          return (
            <div
              key={car.id}
              className="w-full bg-[#FAFAFA] rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <img
                src={imageUrl}
                alt={car.title}
                className="w-full h-[220px] object-cover"
              />

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
                      <GiGearStickPattern size={18} className="text-black" /> {car.gear_box}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <BsFillFuelPumpDieselFill size={18} className="text-black" /> {car.fuel}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <FaRegSnowflake size={18} className="text-black" /> {car.air_conditioner ? "AC" : "Fan"}
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
