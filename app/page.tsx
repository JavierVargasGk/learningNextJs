import {ArrowRightIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {roboto} from "@/app/ui/fonts";
import Image from "next/image";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6  ">
      <div className="flex bg-green-800 rounded-2xl p-9">
        Login Screen
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row ">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 py-10 md:w-2/5 md:px-20">
          <p className={`${roboto.className} text-xl text-black md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the {' '}
            <a href="https://nextjs.org/learn/" className="text-green-800 hover:text-green-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>

          <Link
              href="/dashboard"
              className="flex items-center gap-5 self-start rounded-lg bg-green-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-500 md:text-base"
          >
            <span>Continuar</span> <ArrowRightIcon className="w-5 md:w-6"/>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image src={'/hero-desktop.png'} className="hidden md:block" width={1000} height={760} alt={'hero app being shown, desktop version'}></Image>
          <Image src={'/hero-mobile.png'} className="block md:hidden" width={640} height={700} alt={'hero app being shown, mobile version'}></Image>
        </div>
      </div>
    </main>
  );
}
