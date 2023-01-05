import { Html } from "next/document";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>

      <body className="bg-slate-900">
        <nav className="bg-slate-700 text-slate-200 h-10 rounded-lg m-4 p-2 uppercase">
          This is a nav bar. It is always there |XD
        </nav>
        {children}
      </body>
    </html>
  );
}
