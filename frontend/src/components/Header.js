import info from '../assets/public/info.svg';
import profile from '../assets/public/avatar-image.png';
import message from '../assets/public/message.svg';
import notification from '../assets/public/Notification.svg';
import options from '../assets/public/options.svg';
import search from '../assets/public/Search.svg';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-gray-50 w-full">
      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="Search student by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 pl-10 pr-4 rounded-lg bg-white text-gray-500 placeholder-gray-400 focus:outline-none"
        />
        <span className="absolute left-3 top-2.5">
          <img src={search} alt="Search Icon" width={20} height={20} />
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-gray-700">
          <img src={info} alt="Info Icon" width={24} height={24} />
        </button>
        <button className="relative text-gray-500 hover:text-gray-700">
          <img src={message} alt="Message Icon" width={24} height={24} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="relative text-gray-500 hover:text-gray-700">
          <img src={options} alt="Options Icon" width={24} height={24} />
        </button>
        <button className="relative text-gray-500 hover:text-gray-700">
          <img src={notification} alt="Notification Icon" width={24} height={24} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <img
            src={profile}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-lg bg-yellow-300"
          />
          <span className="font-semibold text-gray-900">Adeline H. Dancy</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
