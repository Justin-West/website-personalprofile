import Image from "next/image";
import profilePic from "../(imgs)/IMG_8026.jpg";
import { Poppins, Old_Standard_TT } from "@next/font/google";
const poppinsMD = Poppins({
  weight: ["300", "700"],
  subsets: ["latin"],
});
export default function PageFull() {
  return (
    <div
      className={
        "page-full relative z-0 bg-amber-1000 bg-opacity-50 border rounded-lg border-amber-1000 py-10 mt-24 w-2/3 min-h-[60rem] mx-auto backdrop-brightness-[0.95] " +
        poppinsMD.className
      }
    >
      <main className=" w-full p-4 overflow-hidden ">
        <h1 className="p-1 mx-8 text-3xl ">Welcome!</h1>
        <div className="mx-10 mt-24 flex flex-wrap gap-8 justify-center">
          <div className="max-h-[300px] aspect-square rounded-full overflow-hidden">
            <Image src={profilePic} alt="Justin West" placeholder="blur" />
          </div>
          <p className="flex-1 p-4 bg-amber-lite bg-opacity-20 text-amber-lite h-min my-auto rounded-md min-w-[200px] max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptatem rerum laboriosam repellendus veniam ipsa distinctio
            tempora quas quis, praesentium corporis illum impedit alias rem
            cumque. Odio voluptatem porro nam. Illo, maiores!
          </p>
        </div>
      </main>
    </div>
  );
}
