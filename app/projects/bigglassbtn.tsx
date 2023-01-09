import Link from "next/link";
import Image from "next/image";
export default function BigGlassBtn({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <div className=" text-md font-bold project-card grid max-w-96 aspect-square transition-transform hover:scale-105">
      <span className=" flex relative nav-glow nav-glow2 bg-amber-950 aspect-square rounded-3xl">
        <Image
          className="z-20 transition-all blur-none m-auto h-2/3 w-2/3 object-contain stroke-1 stroke-amber-50 fill-none "
          src={icon}
          alt={name}
          width="200"
          height="200"
        />
        <span className="absolute uppercase h-min text-center pt-2 bottom-2 w-full">
          {name}
        </span>
      </span>
    </div>
  );
}
