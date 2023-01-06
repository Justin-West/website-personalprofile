import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>

      <body className="bg-slate-900">
        <nav className="bg-slate-700 text-slate-200  h-10 rounded-lg m-4 p-2 navbar">
          <div className="inline-block text-xl font-extrabold mr-4 my-auto">
            Alexandria.
          </div>
          <div className="inline-block align-top">
            <Link
              className="bg-black p-1 px-6 rounded-full hover:bg-slate-500 transition-colors duration-200 text-base font-normal mr-4 my-auto"
              href="/"
            >
              Home
            </Link>{" "}
            <Link
              className="bg-black p-1 px-6 rounded-full hover:bg-slate-500 transition-colors duration-200 text-base font-normal mr-4 my-auto"
              href="/dash"
            >
              Dashboard
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
