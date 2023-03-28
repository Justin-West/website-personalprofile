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
    <div className=" text-md font-bold project-card grid max-w-96 aspect-square transition-transform hover:scale-105">
      <span className=" flex relative nav-glow nav-glow2 bg-amber-950 aspect-square rounded-3xl">
        {children}

        <span className="absolute uppercase h-min text-center pt-2 bottom-2 w-full">
          {name}
        </span>
      </span>
    </div>
  );
}
