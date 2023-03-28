import Link from "next/link";
import Image from "next/image";
import BigGlassBtn from "../bigglassbtn";

import card2 from "app/(assets)/(imgs)/designs/card2.jpg";
import CoverFinal from "app/(assets)/(imgs)/designs/Cover-Final-1.jpg";
import LTD from "app/(assets)/(imgs)/designs/LTD_Logo.png";
import map from "app/(assets)/(imgs)/designs/map_torius.jpg";
import ourtown from "app/(assets)/(imgs)/designs/OurTown.jpg";
import redisles from "app/(assets)/(imgs)/designs/RedIsles.jpg";

export default function Design() {
  return (
    <>
      <Link
        href="/projects"
        className=" ml-8 uppercase relative nav-glow inline-block bg-amber-950 font-bold text-center p-1 px-3 rounded-md transition-colors duration-200 my-auto"
      >
        <Image
          className=" w-7 inline-block"
          src="/icons/back.svg"
          alt="back"
          width="100"
          height="100"
        />
        <div className="ml-2 inline-block align-middle"> Projects</div>
      </Link>
      <div className=" mt-4 mx-auto grid px-24 grid-cols-2 gap-4">
        <Link href="/projects/design/0" id="1" className="row-start-1">
          <BigGlassBtn name="Map of Torius">
            <Image
              className="z-20 transition-all blur-none m-auto h-3/4 w-3/4 object-contain stroke-1 stroke-amber-50 fill-none "
              src={card2}
              alt="This Website"
              width="400"
              height="400"
              loading="lazy"
            />
          </BigGlassBtn>
        </Link>
        <Link href="/projects/design/1" className="row-start-1">
          <BigGlassBtn name="MXP Branding">
            <Image
              className="z-20 transition-all blur-none m-auto h-3/4 w-3/4 object-contain stroke-1 stroke-amber-50 fill-none "
              src={CoverFinal}
              alt="This Website"
              width="400"
              height="400"
              loading="lazy"
            />
          </BigGlassBtn>
        </Link>
        <Link href="/projects/design/2" className="row-start-2">
          <BigGlassBtn name="Map of the Red Isles">
            <Image
              className="z-20 transition-all blur-none m-auto h-3/4 w-3/4 object-contain stroke-1 stroke-amber-50 fill-none "
              src={card2}
              alt="This Website"
              width="400"
              height="400"
              loading="lazy"
            />
          </BigGlassBtn>
        </Link>
        <Link href="/projects/design/3" className="row-start-2">
          <BigGlassBtn name="Through Sarah's Eyes">
            <Image
              className="z-20 transition-all blur-none m-auto h-3/4 w-3/4 object-contain stroke-1 stroke-amber-50 fill-none "
              src={card2}
              alt="This Website"
              width="400"
              height="400"
              loading="lazy"
            />
          </BigGlassBtn>
        </Link>
        <Link href="/projects/design/4" className="row-start-3">
          <BigGlassBtn name="Our Town Poster">
            <Image
              className="z-20 transition-all blur-none m-auto h-3/4 w-3/4 object-contain stroke-1 stroke-amber-50 fill-none "
              src={card2}
              alt="This Website"
              width="400"
              height="400"
              loading="lazy"
            />
          </BigGlassBtn>
        </Link>
        <Link href="/projects/design/5" className="row-start-3">
          <BigGlassBtn name="Like The Direction">
            <Image
              className="z-20 transition-all blur-none m-auto h-3/4 w-3/4 object-contain stroke-1 stroke-amber-50 fill-none "
              src={card2}
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
