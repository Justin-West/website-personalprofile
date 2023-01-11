import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="mx-auto grid gap-10 justify-center items-center">
        <div className="mx-auto border p-2 border-amber-900 rounded-[100%] max-w-sm overflow-hidden">
          <Image
            src="/personal/IMG_6685.jpg"
            width="500"
            height="500"
            alt="Justin West"
            className=" rounded-[100%]"
          />
        </div>
        <div className=" p-4 bg-amber-lite bg-opacity-20 text-amber-lite h-min rounded-md min-w-[200px] max-w-2xl">
          <p className=" pb-4 indent-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quasi velit expedita, earum omnis blanditiis eaque
            amet doloremque tempora minus!
          </p>
          <div className=" border p-2 rounded-lg border-amber-1000">
            <p className=" indent-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quasi velit expedita, earum omnis blanditiis eaque
              amet doloremque tempora minus!
            </p>
            <p className=" mt-2 indent-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quasi velit expedita, earum omnis blanditiis eaque
              amet doloremque tempora minus!
            </p>
          </div>
        </div>
        <div className="mx-auto border p-2 border-amber-900 rounded-[100%] max-w-sm overflow-hidden">
          <Image
            src="/personal/IMG_6685.jpg"
            width="500"
            height="500"
            alt="Justin West"
            className=" rounded-[100%]"
          />
        </div>
        <div className=" p-4 bg-amber-lite bg-opacity-20 text-amber-lite h-min rounded-md min-w-[200px] max-w-2xl">
          <p className=" pb-4 indent-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quasi velit expedita, earum omnis blanditiis eaque
            amet doloremque tempora minus!
          </p>
          <div className=" border p-2 rounded-lg border-amber-1000">
            <p className=" indent-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quasi velit expedita, earum omnis blanditiis eaque
              amet doloremque tempora minus!
            </p>
            <p className=" mt-2 indent-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quasi velit expedita, earum omnis blanditiis eaque
              amet doloremque tempora minus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
