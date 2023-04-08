import Image from "next/image";
import Link from "next/link";

import me from "app/(assets)/(imgs)/personal/IMG_6685.jpg";

export default function About() {
  return (
    <>
      <div className="mx-auto grid gap-10 justify-center items-center">
        <div className="mx-auto border p-2 border-amber-900 rounded-[100%] max-w-sm overflow-hidden">
          <Image
            src={me}
            width="500"
            height="500"
            alt="Justin West"
            className=" rounded-[100%]"
          />
        </div>
        <div className=" p-4 bg-amber-lite bg-opacity-20 text-amber-lite h-min rounded-md min-w-[200px] max-w-2xl">
          <div className=" border p-2 rounded-lg border-amber-1000">
            <p className=" indent-10">
              Hi, my name is Justin West, and I am from the great city of
              Woodland, California. I have a strong passion for the great
              outdoors and can often be found exploring the natural beauty of my
              home state through hiking.
            </p>
            <p className=" mt-2 indent-10">
              In addition to my love for nature, I am also deeply invested in
              the creative arts, with a particular interest in painting and
              graphic design. I have also been involved in theater as a
              director, directing several plays where I led and encouraged my
              team to bring their best performance.
            </p>
            <p className=" mt-2 indent-10">
              Despite not having formal education, I have worked hard to develop
              and refine my skills through self-study and dedication. I am
              continuously seeking out new ways to improve my craft and expand
              my knowledge base.
            </p>
          </div>

          <div className="flex w-full pt-4">
            <a
              className="hover:text-sky-200 font-bold flex-auto text-center"
              href="mailto:justin.alex.west@gmail.com"
            >
              Email
            </a>
            <Link
              className="hover:text-sky-200 font-bold flex-auto text-center"
              href="https://www.linkedin.com/in/justin-west-24a840209/"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              className="hover:text-sky-200 font-bold flex-auto text-center"
              href="https://github.com/justin-west"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              className="hover:text-sky-200 font-bold flex-auto text-center"
              href="https://www.instagram.com/justout_of_time/?hl=en"
              target="_blank"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
