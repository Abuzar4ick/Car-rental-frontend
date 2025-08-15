// icons
import { SlLocationPin } from "react-icons/sl";
import { IoCarSportSharp } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";

const InfoBlock = () => {
    const infos = [
        { id: 1, icon: <SlLocationPin />, title: 'Availability', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, explicabo.' },
        { id: 2, icon: <IoCarSportSharp />, title: 'Comfort', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, explicabo.' },
        { id: 3, icon: <LuWallet />, title: 'Savings', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, explicabo.' }
    ]
  return (
    <section className="w-full min-h-[315px] flex flex-wrap justify-center gap-8 sm:gap-6 p-4 items-center max-xl:p-15">
        {infos.map((info) => (
            <div key={info.id} className="flex flex-col items-center text-center max-w-[357px] gap-y-2">
                <span className="min-[1250px]:text-[56px] text-[46px]">
                    {info.icon}
                </span>
                <p className="min-[1000px]:text-[24px] text-[20px] font-semibold">{info.title}</p>
                <p className="min-[1000px]:text-[16px] text-[14px] font-normal">{info.description}</p>
            </div>
        ))}
    </section>
  )
}

export default InfoBlock
