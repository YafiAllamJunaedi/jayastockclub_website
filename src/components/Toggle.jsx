const Toggle = ({ value = false, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(!value)}
      aria-pressed={value}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
        focus:outline-none focus:ring-2 focus:ring-[#007471] focus:ring-offset-2
        ${value ? 'bg-linear-to-l from-[#003835] to-[#007471]' : 'bg-gray-200'}`}
    >
      <span className="sr-only">Toggle status</span>
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm
          ${value ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  );
};

export default Toggle;