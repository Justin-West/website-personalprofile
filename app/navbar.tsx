"use client";
import { Old_Standard_TT } from "@next/font/google";
import Link from "next/link";
import useMousePosition from "./mouspos";
const olstdMD = Old_Standard_TT({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar({ titlefont }) {
  const mousepos = useMousePosition();

  let root = document.documentElement;
  root.style.setProperty("--mouseX", mousepos.x + "px");
  root.style.setProperty("--mouseY", mousepos.y + "px");
  let glows = Array.from(document.getElementsByClassName("nav-glow"));
  for (const card of glows) {
    const rect = card.getBoundingClientRect(),
      x = mousepos.x - rect.left,
      y = mousepos.y - rect.top;

    card.style.setProperty("--mouseX", `${x}px`);
    card.style.setProperty("--mouseY", `${y}px`);
  }

  return (
    <nav className="navbar nav-glow grid text-white h-16  mt-4  bg-amber-900 py-[1px] items-stretch ">
      <div className=" Nav-Content flex  items-stretch px-4 z-[2] backdrop-blur-md backdrop-brightness-[0.1]">
        <Link
          className={
            "inline-block text-3xl my-auto mr-auto " + titlefont.className
          }
          href="/"
        >
          Justin West
        </Link>
        <div className="flex ">
          <Link
            className="nav-glow inline-block bg-[hsl(23,86%,8%)] text-center w-32 p-1 px-6 rounded-md transition-colors duration-200 mr-4 my-auto"
            href="/dash"
          >
            Resume
          </Link>
          <Link
            className="nav-glow inline-block bg-[hsl(23,86%,8%)] text-center w-32  p-1 px-6 rounded-md transition-colors duration-200 mr-4 my-auto"
            href="/dash"
          >
            Projects
          </Link>
          <Link
            className="nav-glow inline-block bg-[hsl(23,86%,8%)]  text-center w-32 p-1 px-6 rounded-md transition-colors duration-200 mr-4 my-auto"
            href="/dash"
          >
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
