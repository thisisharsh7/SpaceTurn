import Link from "next/link";
import Image from "next/image";
import mobile from "../public/assets/home/background-home-mobile.jpg";
import desktop from "../public/assets/home/background-home-desktop.jpg";
import tablet from "../public/assets/home/background-home-tablet.jpg";

export default function Home() {
  return (
    <section className="home flex pt-20 pb-5">
      <div className="-z-10">
        <Image src={desktop} layout="fill" alt="bg-home" />
      </div>
      <div className="-z-10 md:hidden">
        <Image src={tablet} layout="fill" alt="bg-home" />
      </div>
      <div className="-z-10 sm:hidden">
        <Image src={mobile} layout="fill" alt="bg-home" />
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-3 gap-12 w-full justify-between flex-wrap">
        <div className="max-w-min flex flex-col xl:pl-24 pl-5">
          <p className="uppercase sm:text-2xl text-base">
            So, you want to travel to
          </p>
          <h1 className=" uppercase sm:text-9xl text-7xl tracking-widest  xl:font-extrabold font-bold pb-12">
            Space
          </h1>
          <p className="text-base">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="bg-white self-end xl:mr-20 mr-3 hover:bg-red-200 text-gray-900 sm:text-3xl sm:px-10 sm:py-20 text-2xl px-8 py-16 rounded-full">
          <Link href="/destination">
            <h2 className="cursor-pointer uppercase">Explore</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
