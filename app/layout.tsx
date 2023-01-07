import "./globals.css";
import { Poppins, Old_Standard_TT } from "@next/font/google";
const poppinsMD = Poppins({
  weight: "300",
  subsets: ["latin"],
});

const olstdMD = Old_Standard_TT({
  weight: "400",
  subsets: ["latin"],
});

import Navbar from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className={poppinsMD.className}>
        <Navbar titlefont={olstdMD} />
        {children}
      </body>
    </html>
  );
}
