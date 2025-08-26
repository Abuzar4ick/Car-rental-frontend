// icons
import { SiComma } from "react-icons/si";
import { FiUser } from "react-icons/fi";

const Reviews = () => {
  const comments = [
    { 
      id: 1, 
      message: 'Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque', 
      name: 'Emanuel Boyle',
      image: 'https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_hybrid&w=740&q=80'
    },
    { 
      id: 2,
      message: 'Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula', 
      name: 'Emanuel Boyle',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-olly-774909.jpg&fm=jpg'
    },
    { 
      id: 3, 
      message: 'Quam neque odio urna euismod felis. Sit egestas magna in quisque fames dapibus quis sapien magna. Nisl non eget sit pellentesque tristique et', 
      name: 'Emanuel Boyle',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww'
    }
  ];

  return (
    <section className="min-h-[700px] flex flex-col gap-[40px] px-4 md:px-8 max-md:pt-[60px]">
      <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
        Reviews from our customers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            className="w-full max-w-[416px] h-[480px] relative rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Upper block */}
            <div className="h-[70%] bg-[#FAFAFA] flex items-center justify-center relative px-4">
              <div className="text-[#5937E0] flex absolute top-10 left-10">
                <SiComma size={25} className="rotate-180" />
                <SiComma size={25} className="rotate-180" />
              </div>
              <div className="w-[90%]">
                <p className="text-center font-medium text-base sm:text-lg leading-snug">
                  {comment.message}
                </p>
              </div>
            </div>

            {/* Lower block */}
            <div className="h-[30%] bg-[#5937E0] flex flex-col items-center justify-end pb-6">
              <div className="w-[84px] h-[84px] absolute top-[61%] rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
                <img src={comment.image} alt="User image" />
              </div>
              <p className="font-semibold text-white text-lg sm:text-xl text-center mt-6">
                {comment.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews