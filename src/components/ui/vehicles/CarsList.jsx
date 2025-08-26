import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// icons
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";

const CarsList = () => {
  const [selectedBtn, setSelectedBtn] = useState(1);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const buttons = [
    { id: 1, text: "All vehicles", sort: "all" },
    { id: 2, text: "Sport", sort: "Sport" },
    { id: 3, text: "Sedan", sort: "Sedan" },
    { id: 6, text: "Minivan", sort: "Minivan" },
    { id: 7, text: "Pickup", sort: "Pickup" },
    { id: 8, text: "Cabriolet", sort: "Cabriolet" },
  ];

  const filteredCars =
    selectedBtn === 1
      ? cars
      : cars.filter(
          (car) => car.type === buttons.find((b) => b.id === selectedBtn).sort
        );

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("/cars.json")
        if (!res.ok) {
          throw new Error("Failed to fetch cars data");
        }
        const data = await res.json();
        setCars(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <section className="min-sm:pt-[60px] flex flex-col gap-10">
      <div className="flex flex-col items-center gap-10">
        <p className="font-bold text-[50px]">Select a vehicle group</p>
        <div className="flex flex-wrap gap-6">
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`w-[130px] h-[45px] rounded-[50px] cursor-pointer transition-all duration-300 ${
                button.id === selectedBtn
                  ? "bg-[#5937E0] text-white scale-105 shadow-lg"
                  : "bg-[#F9F9F9] hover:bg-gray-200"
              }`}
              onClick={() => setSelectedBtn(button.id)}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car) => {
          return (
            <div
              key={car.id}
              className="w-full bg-[#FAFAFA] rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <img
                src={car.main_image || "https://via.placeholder.com/300x220?text=No+Image"}
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
                      <GiGearStickPattern size={18} className="text-black" />
                      {car.gear_box}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <BsFillFuelPumpDieselFill size={18} className="text-black" />
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
    </section>
  );
};

export default CarsList;
