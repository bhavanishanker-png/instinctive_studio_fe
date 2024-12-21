import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import dashboard from '../../public/dashboard.svg';
import students from '../../public/students.svg';
import settings from '../../public/settings.svg';
import reports from '../../public/reports.svg';
import info from '../../public/info.svg';
import chapter from '../../public/chapter.svg';

const Sidebar = () => {
  return (
    <div className="h-auto min-h-screen w-60 bg-white p-6 shadow-md">
      <Image src={Logo} alt="Logo" className="w-[98px] h-[42px]" />
      <ul className="space-y-3 mt-10">
        <li>
          <Link href="/" className="flex items-center text-gray-500 hover:text-gray-900 p-2">
            <Image src={dashboard} alt="Dashboard Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg font-medium">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/students" className="flex items-center text-gray-900 font-bold bg-gray-100 rounded-md p-2">
            <Image src={students} alt="Students Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg">Students</span>
          </Link>
        </li>
        <li>
          <Link href="/chapter" className="flex items-center text-gray-500 hover:text-gray-900 p-2">
            <Image src={chapter} alt="Chapter Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg font-medium">Chapter</span>
          </Link>
        </li>
        <li>
          <Link href="/help" className="flex items-center text-gray-500 hover:text-gray-900 p-2">
            <Image src={info} alt="Help Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg font-medium">Help</span>
          </Link>
        </li>
        <li>
          <Link href="/reports" className="flex items-center text-gray-500 hover:text-gray-900 p-2">
            <Image src={reports} alt="Reports Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg font-medium">Reports</span>
          </Link>
        </li>
        <li>
          <Link href="/settings" className="flex items-center text-gray-500 hover:text-gray-900 p-2">
            <Image src={settings} alt="Settings Icon" width={20} height={20} className="mr-3" />
            <span className="text-lg font-medium">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
