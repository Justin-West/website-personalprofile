import Image from "next/image";
import Link from "next/link";

import image from "app/(assets)/(imgs)/designs/OurTown.jpg";
import back from "app/(assets)/(imgs)/icons/back.svg";

const data = {
  title: "Our Town Poster",
  date: "4/10/2013",
  description:
    "Created for the Woodland Christian Theater production of Our Town. It was created using Adobe Photoshop. It is a three act play and each colored third represents each act. The story follows a man through his life much as the poster follows the sun.",
};

export default function Post() {
  return (
    <div className="">
      <div className="py-4">
        <Link
          href="/projects/design"
          className=" ml-8 uppercase relative nav-glow inline bg-amber-950 font-bold text-center p-1 px-3 rounded-md transition-colors duration-200 my-auto"
        >
          <Image
            className=" w-7 inline-block"
            src={back}
            alt="back"
            width="100"
            height="100"
          />
          <div className="ml-2 inline-block align-middle"> Back</div>
        </Link>
        <p className=" inline text-xl p-4">{data.title}</p>
        <p className=" inline text-xl p-4 opacity-60">{data.date}</p>
      </div>
      <div className=" overflow-clip bg-black min-h-[50rem] max-h-[60rem] flex justify-center align-middle">
        <Image
          className="imgdisp object-contain"
          src={image}
          alt="art"
          width="1500"
          height="1500"
        ></Image>
      </div>
      <p className="p-4 px-20">{data.description}</p>
    </div>
  );
}
