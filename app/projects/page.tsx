import Link from "next/link";
import Image from "next/image";

import BigGlassBtn from "./bigglassbtn";

export default function Projects() {
  return (
    <>
      <div className="grid px-8 grid-cols-2 objects-center gap-4">
        <Link href="/projects/technology" className="ctnr row-start-1">
          <BigGlassBtn name="Technology" icon="\tech.svg" />
        </Link>
        <Link href="/projects/design" className="ctnr row-start-1">
          <BigGlassBtn name="Design" icon="\design.svg" />
        </Link>
      </div>
    </>
  );
}
