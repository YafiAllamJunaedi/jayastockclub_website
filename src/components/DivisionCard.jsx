const DivisionCard = ({ label, image, text }) => {
  return (
    <div
      className="
        h-[450px]
        bg-white
        rounded-xl
        shadow-md
        px-4
        py-5
        flex
        flex-col
      "
    >
      <div className="h-[15%] flex items-center justify-center">
        <div
          className="
            w-full
            text-center
            bg-[#003835]
            text-white
            font-semibold
            text-[17px]
            py-1
            rounded-md
          "
        >
          {label}
        </div>
      </div>

      <div className="w-full h-[195px] overflow-hidden rounded-md mb-3 shrink-0">
        <img src={image} alt={label} className="w-full h-full object-cover" loading="lazy"/>
      </div>

      <div className="w-full flex-1 flex items-center justify-center text-center px-3">
        <p className="font-semibold text-sm text-[#003835]">{text}</p>
      </div>
    </div>
  );
};

export default DivisionCard;
