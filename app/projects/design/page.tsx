import Link from "next/link";
import BigGlassBtn from "../bigglassbtn";

export default function Design() {
  return (
    <>
      <div className="grid px-8 grid-cols-3 objects-center gap-4">
        <Link href="" className="row-start-1">
          <BigGlassBtn name="Map of Torius" icon="/map_torius.jpg" />
        </Link>
        <Link href="" className="row-start-1">
          <BigGlassBtn name="MXP Brand" icon="/card2.jpg" />
        </Link>
        <Link href="" className="row-start-1">
          <BigGlassBtn name="Map of the Red Isles" icon="/RedIsles.jpg" />
        </Link>
        <Link href="" className="row-start-2">
          <BigGlassBtn name="Through Sarah's Eyes" icon="/Cover-Final-1.jpg" />
        </Link>
        <Link href="" className="row-start-2">
          <BigGlassBtn name="Our Town Poster" icon="/OurTown.jpg" />
        </Link>
        <Link href="" className="row-start-2">
          <BigGlassBtn name="Like The Direction" icon="/LTD_Logo.png" />
        </Link>
      </div>
    </>
  );
}
