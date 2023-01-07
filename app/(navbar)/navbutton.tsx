"use client";

import Link from "next/link";
export default function NavButton({ name }: { name: string }) {
  return (
    <p className=" relative nav-glow inline-block bg-amber-950 text-center w-24 p-1 rounded-md transition-colors duration-200 my-auto">
      {name}
    </p>
  );
}
