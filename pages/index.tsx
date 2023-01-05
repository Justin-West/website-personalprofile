import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexandria.</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="bg-black h-full">
        <div className="grid grid-cols-3 gap-4 content-middle w-full rounded-lg text-center bg-slate-900 p-4">
          <div className="m-auto p-4 w-32 h-32 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
            Hi!
          </div>
          <div className="m-auto p-4 w-32 h-32 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
            Hi!
          </div>
          <div className="m-auto p-4 w-32 h-32 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
            Hi!
          </div>
          <div className="m-auto p-4 w-32 h-32 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
            Hi!
          </div>
          <div className="m-auto p-4 w-32 h-32 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
            Hi!
          </div>
          <div className="m-auto p-4 w-32 h-32 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">
            Hi!
          </div>
        </div>
      </main>
    </>
  );
}
