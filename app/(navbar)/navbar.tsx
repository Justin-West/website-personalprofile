"use client";

import { Old_Standard_TT } from "@next/font/google";
import Link from "next/link";
import useMousePosition from "./mouspos";
import NavButton from "./navbutton";

const olstdMD = Old_Standard_TT({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar({ titlefont }: { titlefont: any }) {
  HandleMouseStuff();
  return (
    <nav className="navbar nav-glow grid  min-h-16  mt-4 border-t border-b border-amber-950 bg-amber-1000 py-[1px]">
      <div className=" flex gap-2 px-4 z-[2] bg-amber-1000">
        <Link
          className={
            "nav-title inline-block text-3xl my-auto mr-auto pt-2 " +
            titlefont.className
          }
          href="/"
        >
          Justin West
        </Link>
        <div className=" sticky right-0 flex p-1">
          <Link href="/resume" className=" flex-1 px-1">
            <NavButton name="Resume" />
          </Link>
          <Link href="/projects" className=" flex-1 px-1">
            <NavButton name="Projects" />
          </Link>
          <Link href="/dash" className=" flex-1 px-1">
            <NavButton name="About Me" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HandleMouseStuff() {
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
}
