const EventCard = ({ img, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-md h-52 overflow-hidden border-2 border-white"
    >
      <img
        className="w-full h-full object-cover"
        src={img}
        alt=""
      />
    </a>
  );
};

export default EventCard;