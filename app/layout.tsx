import '@/app/ui/global.css';
import {inter, roboto} from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialising`}>{children}</body>
    </html>
  );
}
