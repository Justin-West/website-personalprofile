import "./globals.css";
import Navbar from "./navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
