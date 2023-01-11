import Link from "next/link";
import Image from "next/image";

import BigGlassBtn from "./bigglassbtn";

export default function Projects() {
  return (
    <>
      <div className="grid px-24 grid-cols-2 objects-center gap-10">
        <Link href="/projects/technology" className="card-blur row-start-1">
          <BigGlassBtn name="Technology" icon="\icons\tech.svg" />
        </Link>
        <Link href="/projects/design" className="card-blur row-start-1">
          <BigGlassBtn name="Design" icon="\icons\design.svg" />
        </Link>
      </div>
    </>
  );
}
