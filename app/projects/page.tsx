import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className="flex px-8 objects-center gap-4">
        <div className="ctnr flex-1">
          <Link
            href="/projects/technology"
            className=" absolute project-card grid max-h-96 aspect-square mx-auto"
          >
            <span className=" relative flex nav-glow nav-glow2 bg-amber-950 aspect-square rounded-xl">
              <Image
                className="m-auto h-1/2 stroke-1 stroke-amber-50 fill-none"
                src="\tech.svg"
                alt="tech"
                width="200"
                height="200"
              />
            </span>
            <span className="h-min text-center pt-4 uppercase">Technology</span>
          </Link>
        </div>
        <div className="ctnr flex-1">
          <Link
            href="/projects/technology"
            className=" absolute project-card grid max-h-96 aspect-square mx-auto"
          >
            <span className=" relative flex nav-glow nav-glow2 bg-amber-950 aspect-square rounded-xl">
              <Image
                className="m-auto h-1/2 stroke-1 stroke-amber-50 fill-none"
                src="\design.svg"
                alt="design"
                width="200"
                height="200"
              />
            </span>
            <span className="h-min text-center pt-4 uppercase">Design</span>
          </Link>
        </div>
      </div>
    </>
  );
}
