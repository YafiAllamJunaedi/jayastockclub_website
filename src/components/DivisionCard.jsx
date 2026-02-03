const DivisionCard = ({ label, image, text, type = "default" }) => {
  const cardHijau = type === "hijau";

  const cardBg = cardHijau
    ? "bg-gradient-to-b from-[#003835] to-[#007471]"
    : "bg-gradient-to-b from-[#ffffff] to-[#c1e1de]";

  const labelBg = cardHijau
    ? "bg-gradient-to-b from-[#ffffff] to-[#c1e1de]"
    : "bg-gradient-to-r from-[#004c48] to-[#007471]";

  const teksLabel = cardHijau ? "text-[#007471]" : "text-white";

  return (
    <div
      className={`
        h-[450px]
        ${cardBg}
        rounded-lg
        shadow-sm
        px-4
        py-5
        flex
        flex-col
      `}
    >
      <div className="h-[15%] flex items-center justify-center">
        <div
          className={`
            w-full
            text-center
            ${labelBg}
            ${teksLabel}
            font-semibold
            text-[17px]
            py-1
            rounded-md
          `}
        >
          {label}
        </div>
      </div>

      <div className="h-[220px] w-full overflow-hidden rounded-md">
        <img src={image} alt={label} className="w-full h-full object-cover" />
      </div>

      <div className="w-full flex-1 flex items-center justify-center text-center px-3">
        <p
          className={`font-semibold text-sm ${
            cardHijau ? "text-white" : "text-[#007471]"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default DivisionCard;
