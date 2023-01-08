import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="flex px-8">
        <Link
          href="/projects/technology"
          className="project-card grid w-96 h-96"
        >
          <span className=" nav-glow nav-glow2 bg-amber-950 h-96 rounded-xl">
            ?
          </span>
          <span className="h-min text-center">Technology</span>
        </Link>

        <Link
          href="/projects/technology"
          className="project-card grid w-96 h-96"
        >
          <span className="nav-glow nav-glow2 bg-amber-950 h-96 rounded-xl">
            ?
          </span>
          <span className="h-min text-center">Design</span>
        </Link>
      </div>
    </>
  );
}
