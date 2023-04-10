import Link from "next/link";

export default function Resume() {
  return (
    <main className=" w-full p-4 overflow-hidden ">
      <iframe
        className="gframe border border-amber-900 mx-auto rounded-md w-full p-0"
        src="https://drive.google.com/file/d/1O-13vsqeHLzrDfaqql_hJYoeo3f36zoj/preview"
        width="100%"
        height="900px"
        allow="autoplay"
      ></iframe>
    </main>
  );
}
