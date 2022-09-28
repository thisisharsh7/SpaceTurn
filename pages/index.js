import Link from "next/link";

export default function Home() {
  return (
    <section className="flex xl:p-32 md:p-28 sm:p-20 justify-between items-center bg-blue-400">
      <div className="max-w-min flex flex-col gap-3">
        <p className="uppercase text-2xl">So, you want to travel to</p>
        <h1 className="font-medium uppercase text-9xl tracking-widest pb-12">
          Space
        </h1>
        <p className="text-base">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="bg-white self-end text-gray-900 text-3xl px-12 py-20 rounded-full">
        <Link href="/destination">
          <h2 className="cursor-pointer uppercase">Explore</h2>
        </Link>
      </div>
    </section>
  );
}
