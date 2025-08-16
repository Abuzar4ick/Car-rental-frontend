// images
import image from '../../../assets/Info-block_image2.svg'

const SecondBlockInfo = () => {
    const infos = [
        { id: 1, text: 'Erat at semper', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum iusto corrupti labore quasi, minima delectus.' },
        { id: 2, text: 'Urna nec vivamus risus duis arcu', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum iusto corrupti labore quasi, minima delectus.' },
        { id: 3, text: 'Lobortis eusmod imperdiet tempus', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum iusto corrupti labore quasi, minima delectus.' },
        { id: 4, text: 'Cras nulla aliquet nam eleifend amet et', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum iusto corrupti labore quasi, minima delectus.' }
    ]
  return (
    <section className='min-h-[669px] flex items-center justify-center min-xl:gap-18 max-xl:grid max-xl:gap-8 max-xl:pb-15'>
      <img src={image} alt="Block info image" />
      <div className='flex flex-col gap-y-[28px]'>
        {infos.map((info) => (
            <div key={info.id} className='max-w-[550px] flex flex-col gap-y-4'>
                <div className='flex items-center gap-4 max-[510px]:items-baseline'>
                    <div className='w-[32px] h-[32px] flex-shrink-0 rounded-full bg-[#5937E0] text-white flex items-center justify-center'>
                        {info.id}
                    </div>
                    <p className='text-[20px] font-semibold'>{info.text}</p>
                </div>
                <p className='text-[16px] font-normal text-gray-500'>{info.description}</p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default SecondBlockInfo
