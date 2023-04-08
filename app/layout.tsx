import "./globals.css";
import { Poppins, Old_Standard_TT } from "@next/font/google";
const poppinsMD = Poppins({
  weight: ["300", "700"],
  subsets: ["latin"],
});

const olstdMD = Old_Standard_TT({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Justin West",
};

import Navbar from "./(navbar)/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppinsMD.className}>
        <Navbar titlefont={olstdMD} />
        <div
          className={
            "page-full relative z-0 bg-amber-1000 bg-opacity-50 border rounded-lg border-amber-1000 py-10 mt-24 max-w-screen-lg min-h-[32rem] mx-auto backdrop-brightness-[0.95] " +
            poppinsMD.className
          }
        >
          {children}
        </div>
      </body>
    </html>
  );
}
