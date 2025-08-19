// icons
import { IoCarSportOutline } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoSpeedometer } from "react-icons/io5";
// images
import FactsImage from "../../../assets/Facts-image.svg";

const Facts = () => {
  const facts = [
    { id: 1, number: "540", text: "Cars", icon: <IoCarSportOutline size={35} /> },
    { id: 2, number: "20k", text: "Customers", icon: <FaUserCheck size={35} /> },
    { id: 3, number: "25", text: "Years", icon: <BsFillCalendarDateFill size={35} /> },
    { id: 4, number: "20m", text: "Miles", icon: <IoSpeedometer size={35} /> }
  ]

  return (
    <section className="py-[60px] px-4">
      <div
        className="w-full min-h-[486px] rounded-[20px] bg-[#5937E0] p-[40px] md:p-[60px] flex flex-col items-center justify-center gap-y-[60px]"
        style={{
          backgroundImage: `linear-gradient(rgba(89,55,224,0.85), rgba(89,55,224,0.85)), url(${FactsImage})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[756px] text-white text-center px-2">
          <p className="text-[32px] sm:text-[40px] md:text-[50px] font-bold">
            Facts In Numbers
          </p>
          <p className="font-normal text-sm sm:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere,
            dolorum impedit rem ullam ipsam expedita animi repudiandae
            perferendis quidem!
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="bg-white w-full h-[100px] rounded-[20px] flex items-center justify-start p-4 gap-4 shadow-md"
            >
              <div className="bg-[#FF9E0C] rounded-[12px] w-[72px] h-[68px] flex items-center justify-center text-white flex-shrink-0">
                {fact.icon}
              </div>
              <div>
                <p className="text-[22px] sm:text-[24px] font-bold">{fact.number}+</p>
                <p className="text-gray-500 text-[14px] sm:text-[16px] font-semibold">
                  {fact.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facts