const Square = ({ Icon, iconSize }) => (
  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
    <Icon size={iconSize} className="text-white" />
  </div>
);

export default Square