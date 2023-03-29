import Link from "next/link";
import Image from "next/image";

import BigGlassBtn from "./bigglassbtn";
import { url } from "inspector";

import iconDesign from "../(assets)/(imgs)/icons/design.svg";
import iconTech from "../(assets)/(imgs)/icons/tech.svg";

export default function Projects() {
  return (
    <>
      <div className="grid grid-cols-2 objects-center gap-10">
        <Link href="/projects/technology" className="card-blur row-start-1">
          <BigGlassBtn name="Technology">
            <Image
              className="z-20 transition-all blur-none m-auto h-3/4 w-3/4 object-contain stroke-1 stroke-amber-50 fill-none "
              src={iconTech}
              alt="This Website"
              width="400"
              height="400"
              loading="lazy"
            />
          </BigGlassBtn>
        </Link>
        <Link href="/projects/design" className="card-blur row-start-1">
          <BigGlassBtn name="Design">
            <Image
              className="z-20 transition-all blur-none m-auto h-3/4 w-3/4 object-contain stroke-1 stroke-amber-50 fill-none "
              src={iconDesign}
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
