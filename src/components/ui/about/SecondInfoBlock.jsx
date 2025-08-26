// images
import infoBlockImage from '../../../assets/Info-block_image2.svg'
// icons
import { IoMdCheckmark } from "react-icons/io";

const SecondInfoBlock = () => {
  const infos = [
    { id: 1, text: 'Velit semper morbi. Purus non eu cursus porttitor tristique et gravida.' },
    { id: 2, text: 'Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum' },
    { id: 3, text: 'Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor' },
    { id: 4, text: 'Quis nunc interdum gravida ullamcorper' }
  ]

  return (
    <section className="min-h-[669px] flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
      <div className="flex flex-col max-w-[650px] w-full">
        <div className="flex flex-col gap-y-6">
          <h2 className="font-bold text-[28px] sm:text-[36px] lg:text-[50px] leading-tight">
            Unlock unforgettable memories on the road
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. 
            Quis nunc interdum gravida ullamcorper
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {infos.map((info) => (
            <div key={info.id} className="flex items-start gap-3">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#5937E0] text-white flex-shrink-0">
                <IoMdCheckmark size={20} />
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{info.text}</p>
            </div>
          ))}
        </div>
      </div>

      <img 
        src={infoBlockImage} 
        alt="Info block illustration" 
        className="w-full max-w-[500px] object-contain"
      />
    </section>
  )
}

export default SecondInfoBlock
