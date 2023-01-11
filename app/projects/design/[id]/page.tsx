type Design = {
  title: string;
  date: string;
  asset: string;
  description: string;
};

import Image from "next/image";
import Link from "next/link";

async function getPost(params: any) {
  const arr: Design[] = [
    {
      title: "Map of Torius",
      date: "?/?/?",
      asset: "/map_torius.jpg",
      description:
        "Created for the MXP podcast group based on their origonal world of Torius. It was created using Adobe Photoshop. I was responsible for many of the location names and they were each lettered by hand.",
    },
    {
      title: "MXP Branding",
      date: "?/?/?",
      asset: "/card2.jpg",
      description:
        "Created for the MXP podcast group as a modernization/reimagining of their original design. It was created using Adobe illustrator & Photoshop. I took their original logo and created a more consistent and versatile look that even lent itself to a white on black version.",
    },
    {
      title: "Map of the Red Isles",
      date: "?/?/?",
      asset: "/RedIsles.jpg",
      description:
        "Created for the MXP podcast group based on their origonal world of Torius. It was created using Adobe Photoshop. I was responsible for many of the location names and they were each lettered by hand.",
    },
    {
      title: "Through Sarah's Eyes",
      date: "?/?/?",
      asset: "/Cover-Final-1.jpg",
      description:
        "Created for the book Through Sarah's Eyes by Elizabeth Jones. It was created using Adobe Photoshop. I was given a scan of the beautifully rendered character and tasked with creating a complementary layout that fulfilled Jones' requirements.",
    },
    {
      title: "",
      date: "?/?/?",
      asset: "/",
      description: "",
    },
    {
      title: "",
      date: "?/?/?",
      asset: "/",
      description: "",
    },
  ];
  const post = await arr[params.id];

  return post;
}

export default async function Post({ params }: { params: any }) {
  const post = await getPost(params);
  if (post == null)
    return (
      <div className=" top-0 absolute h-full w-full grid content-center">
        <span>
          <p className=" h-min w-full text-center text-2xl">
            * Error: content not found *
          </p>
        </span>
      </div>
    );
  return (
    <div className="">
      <div className="py-4">
        <Link
          href="/projects/design"
          className=" ml-8 uppercase relative nav-glow inline bg-amber-950 font-bold text-center p-1 px-3 rounded-md transition-colors duration-200 my-auto"
        >
          <Image
            className=" w-7 inline-block"
            src="/back.svg"
            alt="back"
            width="100"
            height="100"
          />
          <div className="ml-2 inline-block align-middle"> Back</div>
        </Link>
        <p className=" inline text-xl p-4">{post.title}</p>
        <p className=" inline text-xl p-4 opacity-60">{post.date}</p>
      </div>
      <div className="overflow-clip bg-black aspect-square flex justify-center align-middle">
        <Image
          className="imgdisp"
          src={post.asset}
          alt="art"
          width="1500"
          height="1500"
        ></Image>
      </div>
      <p className="p-4 px-20">{post.description}</p>
    </div>
  );
}
