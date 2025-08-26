
const InfoBlock = () => {
  const infos = [
    {
      id: 1,
      text: "Variety Brands",
      description:
        "Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio",
    },
    {
      id: 2,
      text: "Maximum Freedom",
      description:
        "Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in",
    },
    {
      id: 3,
      text: "Awesome Support",
      description:
        "Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit",
    },
    {
      id: 4,
      text: "Flexibility On The Go",
      description:
        "Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl",
    },
  ];

  return (
    <section className="min-h-[400px] flex flex-col lg:flex-row gap-10">
      <p className="font-bold text-[32px] sm:text-[40px] lg:text-[50px] leading-snug max-w-lg">
        Where every drive feels extraordinary
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        {infos.map((info) => (
          <div key={info.id} className="flex flex-col gap-2">
            <h2 className="font-semibold text-[22px] sm:text-[26px]">
              {info.text}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {info.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoBlock;
