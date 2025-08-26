const Facts = () => {
  const infos = [
    { id: 1, number: "20k", text: "Happy customers" },
    { id: 2, number: "540", text: "Count of cars" },
    { id: 3, number: "25", text: "Years of experience" },
  ];

  return (
    <div className="min-h-[200px] flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8 sm:gap-4 flex-wrap text-center sm:text-left max-md:py-[60px]">
      {infos.map((info) => (
        <div key={info.id}>
          <p className="font-bold text-[40px] sm:text-[60px] lg:text-[80px] text-[#5937E0]">
            {info.number}+
          </p>
          <p className="font-bold text-[16px] sm:text-[18px] lg:text-[20px]">
            {info.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Facts;
