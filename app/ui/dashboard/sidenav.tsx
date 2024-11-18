import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-100">
        <div className="w-32 text-white md:w-40">
        </div>
      <div className="flex grow flex-row justify-between space-x-2 space-y-1 md:flex-col md:space-x-0  bg-gray-100  md:h-10 ">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-grey-100 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-grey-50 p-3 text-sm font-medium hover:bg-green-100  hover:text-green-100 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6 text-green-800" />
            <div className="hidden md:block text-green-800">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
