import Link from "next/link";
import Image from "next/image";
export default function BigGlassBtn({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className=" text-md font-bold project-card grid max-w-sm aspect-square transition-transform hover:scale-105 min-w-[10rem] mx-auto">
      <span className=" isolate flex relative nav-glow nav-glow2 bg-amber-950 aspect-square rounded-3xl">
        {children}

        <span className="absolute uppercase h-min text-center pt-1 bottom-2 w-full z-20 ">
          <div className=" mx-auto px-4 bg-black/20 rounded-full max-w-max">
            {name}
          </div>
        </span>
      </span>
    </div>
  );
}
