import Link from "next/link";
import Image from "next/image";
import mobile from "../public/assets/home/background-home-mobile.jpg";
import desktop from "../public/assets/home/background-home-desktop.jpg";
import tablet from "../public/assets/home/background-home-tablet.jpg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const [setTrans, getTrans] = useState("opacity-0");

  useEffect(() => {
    if (router.pathname == "/") {
      getTrans("opacity-100");
    } else {
      getTrans("opacity-0");
    }
  }, []);

  return (
    <section
      className={`home flex items-center pt-36 pb-24 justify-center min-h-screen transition-opacity duration-1000 ${setTrans}`}
    >
     
      <div className="fixed inset-0 z-0 h-full w-full">
        <div className="block sm:hidden">
          <Image src={mobile} alt="Background" layout="fill" objectFit="cover" />
        </div>
        <div className="hidden sm:block lg:hidden">
          <Image src={tablet} alt="Background" layout="fill" objectFit="cover" />
        </div>
        <div className="hidden lg:block">
          <Image src={desktop} alt="Background" layout="fill" objectFit="cover" />
        </div>
      </div>

     
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-20 xl:px-40">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-16 text-white text-center lg:text-left">
         
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl flex flex-col"
          >
            <p className="uppercase sm:text-2xl text-base tracking-widest mb-3 ">
              So, you want to travel to
            </p>
            <h1 className="uppercase sm:text-9xl text-6xl tracking-widest font-extrabold sm:pb-12 pb-8 ">
              Space
            </h1>
            <p className="sm:text-lg text-sm text-gray-300 leading-relaxed">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of it.
              Well sit back, and relax because we’ll give you a truly out of this
              world experience!
            </p>
          </motion.div>

         
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Link href="/destination">
              <div className="group w-40 h-40 sm:w-60 sm:h-60 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:ring-[40px] hover:ring-[#ffffff30] cursor-pointer">
                <span className="uppercase text-xl sm:text-2xl tracking-widest font-semibold text-gray-900 group-hover:text-red-400 transition-all duration-300">
                  Explore
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
