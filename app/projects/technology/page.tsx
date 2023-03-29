import Link from "next/link";
import Image from "next/image";
import BigGlassBtn from "../bigglassbtn";
import iconGit from "app/(assets)/(imgs)/icons/github.svg";
import iconBack from "app/(assets)/(imgs)/icons/back.svg";
import iconTech1 from "app/(assets)/(imgs)/tech/Solarsystem.png";
import iconTech2 from "app/(assets)/(imgs)/tech/webdevshot.jpg";

export default function Technology() {
  return (
    <>
      <Link
        href="/projects"
        className=" ml-8 uppercase relative nav-glow inline-block bg-amber-950 font-bold text-center p-1 px-3 rounded-md transition-colors duration-200 my-auto"
      >
        <Image
          className=" w-7 inline-block"
          src={iconBack}
          alt="back"
          width="100"
          height="100"
        />
        <div className="ml-2 inline-block align-middle"> Projects</div>
      </Link>
      <div className=" mt-4 mx-auto grid grid-cols-2 gap-4">
        <Link href="/" target="_blank" className="row-start-1">
          <Link
            className=" github-icon mt-3 ml-3 absolute w-10 aspect-square z-30"
            href="https://github.com/justin-west/website-personalprofile"
            target="_blank"
          >
            <Image src={iconGit} alt="github" width="100" height="100" />
          </Link>
          <BigGlassBtn name="This Website">
            <Image
              className="z-20 transition-all blur-none m-auto h-3/4 w-3/4 object-contain stroke-1 stroke-amber-50 fill-none "
              src={iconTech2}
              alt="This Website"
              width="400"
              height="400"
              loading="lazy"
            />
          </BigGlassBtn>
        </Link>
        <Link
          href="https://github.com/justin-west"
          className="row-start-1"
          target="_blank"
        >
          <Link
            className=" github-icon mt-3 ml-3 absolute w-10 aspect-square z-30"
            href="https://github.com/justin-west"
            target="_blank"
          >
            <Image src={iconGit} alt="github" width="100" height="100" />
          </Link>

          <BigGlassBtn name="Solarsystem Simulation">
            <Image
              className="z-20 transition-all blur-none m-auto h-3/4 w-3/4 object-contain stroke-1 stroke-amber-50 fill-none "
              src={iconTech1}
              alt="This Website"
              width="400"
              height="400"
              loading="lazy"
            />
          </BigGlassBtn>
        </Link>
      </div>
    </>
  );
}
