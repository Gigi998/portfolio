import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luigi Website",
  description: "Luigi Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-invert min-h-screen flex flex-col max-w-7xl mx-auto'>
        <div className='min-h-full'>{children}</div>
      </body>
    </html>
  );
}
