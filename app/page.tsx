import Image from "next/image";
import Link from "next/link";

import profilePic from "./(assets)/(imgs)/IMG_8026.jpg";

export default function HomePage() {
  return (
    <main className=" w-full p-4 overflow-hidden ">
      <div className="mx-10 mt-20 flex flex-wrap gap-8 justify-center">
        <div className="max-h-[300px] my-auto aspect-square rounded-full overflow-hidden">
          <Image src={profilePic} alt="Justin West" placeholder="blur" />
        </div>
        <div className="flex-1 p-4 bg-amber-lite bg-opacity-20 text-amber-lite h-min my-auto rounded-md min-w-[200px] max-w-lg">
          <h1 className="mb-4">
            <p className="mb-4 text-xl">Thank you for visiting!</p>I am curently
            a{" "}
            <Link
              href="https://www.wjusd.org/documents/Departments/Human%20Resources/Job%20Descriptions/Classified%20Bargaining%20Unit/Information%20Technology%20Specialist%20I.pdf"
              className=" hover:text-sky-200 font-bold"
              target="_blank"
            >
              Technology Specialist
            </Link>{" "}
            for <br />{" "}
            <Link
              href="https://www.wjusd.org/"
              className=" hover:text-sky-200 font-bold"
              target="_blank"
            >
              Woodland Joint Unified School District.
            </Link>{" "}
          </h1>
          <div className=" border p-2 rounded-lg border-amber-1000">
            <p className=" indent-10">
              As a highly skilled and motivated professional with a background
              in both{" "}
              <Link href="/projects" className=" hover:text-sky-200 font-bold">
                Technology
              </Link>{" "}
              and{" "}
              <Link href="/projects" className=" hover:text-sky-200 font-bold">
                Graphic Design
              </Link>{" "}
              , I am excited to bring my expertise and passion to new
              opportunities. With several years of experience in both fields, I
              am confident in my ability to make a meaningful contribution to
              any organization.
            </p>
            <p className="mt-2 indent-10">
              I am constantly seeking out dynamic and challenging environments
              where I can apply my skills and experience to drive success.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
