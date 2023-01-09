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
    <div className="text-md font-bold absolute project-card grid max-h-96 aspect-square mx-auto transition-transform hover:scale-105">
      <span className=" flex relative nav-glow nav-glow2 bg-amber-950 aspect-square rounded-xl">
        <Image
          className=" z-20 transition-all blur-sm m-auto h-2/3 w-2/3 object-contain stroke-1 stroke-amber-50 fill-none "
          src={icon}
          alt={name}
          width="200"
          height="200"
        />
        <span className="absolute h-min text-center pt-2 bottom-2 w-full">
          {name}
        </span>
      </span>
    </div>
  );
}
