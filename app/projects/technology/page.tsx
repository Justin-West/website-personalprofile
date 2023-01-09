import Link from "next/link";
import Image from "next/image";
import BigGlassBtn from "../bigglassbtn";

export default function Technology() {
  return (
    <>
      <Link
        href="/projects"
        className=" ml-8 uppercase relative nav-glow inline-block bg-amber-950 font-bold text-center p-1 px-6 rounded-full transition-colors duration-200 my-auto"
      >
        <Image
          className=" w-7 inline-block"
          src="/back.svg"
          alt="back"
          width="100"
          height="100"
        />
        <div className="ml-2 inline-block align-middle"> Projects</div>
      </Link>
      <div className=" mt-4 mx-auto grid px-24 grid-cols-2 gap-4">
        <Link href="" className="row-start-1">
          <BigGlassBtn name="Project 1" icon="/map_t.jpg" />
        </Link>
        <Link href="" className="row-start-1">
          <BigGlassBtn name="Project 2" icon="/map_t.jpg" />
        </Link>
      </div>
    </>
  );
}
