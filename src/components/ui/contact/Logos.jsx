// images
import bmwLogo from "../../../assets/BMW-logo.svg";
import mercedesLogo from "../../../assets/Mercedes-logo.svg";
import fordLogo from "../../../assets/Ford-logo.svg";
import bydLogo from "../../../assets/BYD-logo.png";
import lamboLogo from "../../../assets/Lambo-logo.svg";
import audiLogo from "../../../assets/Audi-logo.svg";

const Logos = () => {
  const images = [
    { id: 1, image: bmwLogo },
    { id: 2, image: mercedesLogo },
    { id: 3, image: fordLogo },
    { id: 4, image: bydLogo },
    { id: 5, image: lamboLogo },
    { id: 6, image: audiLogo },
  ];

  return (
    <section className="pt-[60px]">
      <div className="w-full min-h-[294px] flex items-center px-4">
        <div className="min-h-[174px] h-full w-full rounded-[40px] bg-[#FAFAFA] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center py-6 max-[350px]:grid-cols-1">
          {images.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt="car brand logo"
              className="w-20 object-contain transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
