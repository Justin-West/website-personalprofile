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
        {children}
      </body>
    </html>
  );
}
