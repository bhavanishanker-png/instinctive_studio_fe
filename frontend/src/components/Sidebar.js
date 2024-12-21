import { Link } from 'react-router-dom';
import Logo from '../assets/public/logo.png';
import dashboard from '../assets/public/dashboard.svg';
import students from '../assets/public/students.svg';
import settings from '../assets/public/settings.svg';
import reports from '../assets/public/reports.svg';
import info from '../assets/public/info.svg';
import chapter from '../assets/public/chapter.svg';

const Sidebar = () => {
  return (
    <div className="h-auto min-h-screen w-60 bg-white p-6 shadow-md">
      {/* Using a regular <img> tag for Logo */}
      <img src={Logo} alt="Logo" className="w-[98px] h-[42px]" />
      
      <ul className="space-y-3 mt-10">
        <li>
          <Link to="/" className="flex items-center text-gray-500 hover:text-gray-900 p-2">
            <img src={dashboard} alt="Dashboard Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg font-medium">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/students" className="flex items-center text-gray-900 font-bold bg-gray-100 rounded-md p-2">
            <img src={students} alt="Students Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg">Students</span>
          </Link>
        </li>
        <li>
          <Link to="/chapter" className="flex items-center text-gray-500 hover:text-gray-900 p-2">
            <img src={chapter} alt="Chapter Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg font-medium">Chapter</span>
          </Link>
        </li>
        <li>
          <Link to="/help" className="flex items-center text-gray-500 hover:text-gray-900 p-2">
            <img src={info} alt="Help Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg font-medium">Help</span>
          </Link>
        </li>
        <li>
          <Link to="/reports" className="flex items-center text-gray-500 hover:text-gray-900 p-2">
            <img src={reports} alt="Reports Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg font-medium">Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center text-gray-500 hover:text-gray-900 p-2">
            <img src={settings} alt="Settings Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg font-medium">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
