import { NavLink } from "react-router-dom";
// icons
import { FaArrowRight } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";

const CarsList = () => {
  const cars = [
    { id: 1, title: "BMW M5 competition", type: "Sport", gear_box: "Automat", fuel: "Diesel", air_conditioner: true, per_day: 55, image: "https://images.drive.ru/i/0/5ee9c3bbec05c4714d00002d.jpg" },
    { id: 2, title: "BMW M5 competition", type: "Sport", gear_box: "Automat", fuel: "Diesel", air_conditioner: true, per_day: 55, image: "https://images.drive.ru/i/0/5ee9c3bbec05c4714d00002d.jpg" },
    { id: 3, title: "BMW M5 competition", type: "Sport", gear_box: "Automat", fuel: "Diesel", air_conditioner: false, per_day: 55, image: "https://images.drive.ru/i/0/5ee9c3bbec05c4714d00002d.jpg" },
    { id: 4, title: "BMW M5 competition", type: "Sport", gear_box: "Automat", fuel: "Diesel", air_conditioner: true, per_day: 55, image: "https://images.drive.ru/i/0/5ee9c3bbec05c4714d00002d.jpg" },
    { id: 5, title: "BMW M5 competition", type: "Sport", gear_box: "Automat", fuel: "Diesel", air_conditioner: false, per_day: 55, image: "https://images.drive.ru/i/0/5ee9c3bbec05c4714d00002d.jpg" },
    { id: 6, title: "BMW M5 competition", type: "Sport", gear_box: "Automat", fuel: "Diesel", air_conditioner: true, per_day: 55, image: "https://images.drive.ru/i/0/5ee9c3bbec05c4714d00002d.jpg" },
  ];

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
            to="/cars"
            className="font-bold hover:underline text-[16px] sm:text-[18px] md:text-[20px] flex items-center gap-2"
          >
            View All <FaArrowRight />
          </NavLink>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="w-full bg-[#FAFAFA] rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img src={car.image} alt={car.title} className="w-full h-[220px] object-cover" />

            <div className="flex flex-col flex-grow p-5 justify-between">
              <div className="flex flex-col gap-y-2">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h2 className="font-bold text-lg">{car.title}</h2>
                    <p className="text-gray-500">{car.type}</p>
                  </div>
                  <p className="text-right font-bold text-indigo-600">
                    ${car.per_day} <br />
                    <span className="text-sm font-normal text-gray-500">per day</span>
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

              <button className="mt-6 w-full py-3 rounded-[12px] cursor-pointer bg-[#5937E0] hover:bg-[#472ec0] text-white font-semibold">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarsList