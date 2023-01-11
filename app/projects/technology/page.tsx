import Link from "next/link";
import Image from "next/image";
import BigGlassBtn from "../bigglassbtn";

export default function Technology() {
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
        <Link href="/" target="_blank" className="row-start-1">
          <Link
            className=" github-icon mt-3 ml-3 absolute w-10 aspect-square z-30"
            href="https://github.com/abluewizard/website-personalprofile"
            target="_blank"
          >
            <Image src="/github.svg" alt="github" width="100" height="100" />
          </Link>
          <BigGlassBtn name="This Website" icon="/webdevshot.jpg" />
        </Link>
        <Link href="" className="row-start-1">
          <Link
            className=" github-icon mt-3 ml-3 absolute w-10 aspect-square z-30"
            href="https://github.com/abluewizard"
            target="_blank"
          >
            <Image src="/github.svg" alt="github" width="100" height="100" />
          </Link>

          <BigGlassBtn name="Solarsystem Simulation" icon="/solarsystem.png" />
        </Link>
      </div>
    </>
  );
}
