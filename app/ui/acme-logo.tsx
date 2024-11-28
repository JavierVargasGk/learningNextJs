import {lusitana} from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-green-800`}
    >
      <p className="text-[44px]">NextJs Tutorial</p>
    </div>
  );
}
