"use client";
import Link from "next/link";
import useMousePosition from "./mouspos";

export default function Navbar() {
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
    <nav className="navbar nav-glow grid text-white h-16  m-4  bg-amber-900 p-[1px] items-stretch ">
      <div className=" Nav-Content flex bg-black items-stretch gap-4 px-4 z-[2]">
        <div className="inline-block text-xl font-extrabold my-auto">
          Justin West
        </div>
        <div className="flex">
          <Link
            className="nav-glow inline-block bg-amber-800 p-1 px-6 rounded-md   transition-colors duration-200 text-base font-normal mr-4 my-auto"
            href="/"
          >
            Home
          </Link>
          <Link
            className="nav-glow inline-block bg-amber-800 p-1 px-6 rounded-md transition-colors duration-200 text-base font-normal mr-4 my-auto"
            href="/dash"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
