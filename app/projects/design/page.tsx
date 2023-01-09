import Link from "next/link";
import Image from "next/image";
import BigGlassBtn from "../bigglassbtn";

export default function Design() {
  return (
    <>
      <Link
        href="/projects"
        className=" ml-8 uppercase relative nav-glow inline-block bg-amber-950 font-bold text-center p-1 px-3 rounded-md transition-colors duration-200 my-auto"
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
          <BigGlassBtn name="Map of Torius" icon="/map_torius.jpg" />
        </Link>
        <Link href="" className="row-start-1">
          <BigGlassBtn name="MXP Branding" icon="/card2.jpg" />
        </Link>
        <Link href="" className="row-start-2">
          <BigGlassBtn name="Map of the Red Isles" icon="/RedIsles.jpg" />
        </Link>
        <Link href="" className="row-start-2">
          <BigGlassBtn name="Through Sarah's Eyes" icon="/Cover-Final-1.jpg" />
        </Link>
        <Link href="" className="row-start-3">
          <BigGlassBtn name="Our Town Poster" icon="/OurTown.jpg" />
        </Link>
        <Link href="" className="row-start-3">
          <BigGlassBtn name="Like The Direction" icon="/LTD_Logo.png" />
        </Link>
      </div>
    </>
  );
}
