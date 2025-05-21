import { useEffect, useReducer, useState } from "react";
import tReducer, { tInitialState } from "../External/techReducer";
import Image from "next/image";
import desktop from "../public/assets/technology/background-technology-desktop.jpg";
import tablet from "../public/assets/technology/background-technology-tablet.jpg";
import mobile from "../public/assets/technology/background-technology-mobile.jpg";
import { motion } from "framer-motion";

export default function Technology() {
  const [state, dispatch] = useReducer(tReducer, tInitialState);
  const [transitionState, setTransitionState] = useState("opacity-0");

  useEffect(() => {
    setTransitionState("opacity-100");
  }, []);

  function changeTech(e) {
    dispatch({ type: e.target.innerHTML });
  }

  return (
    <section
      className={`relative min-h-[100vh] pb-24 pt-36 transition-opacity duration-1000 ${transitionState}`}
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

     
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-20 xl:px-40 text-white">
        <motion.h1
          className="text-2xl uppercase tracking-widest flex gap-6 pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="opacity-50 font-bold">03</span>
          <span>Space Launch 101</span>
        </motion.h1>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
         
          <motion.div
            className="flex flex-col-reverse lg:flex-row gap-10 items-center lg:items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
           
            <ul className="flex lg:flex-col gap-6">
              {["1", "2", "3"].map((num, index) => (
                <li
                  key={index}
                  onClick={changeTech}
                  className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-white cursor-pointer transition-all duration-300 text-xl sm:text-2xl font-semibold ${state.term.startsWith(num) ? "bg-white text-black" : "text-white hover:bg-white/20"
                    }`}
                >
                  {num}
                </li>
              ))}
            </ul>

           
            <div className="text-center lg:text-left max-w-xl">
              <p className="uppercase text-gray-400 md:text-lg text-base tracking-widest mb-2">
                The terminology...
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl uppercase font-bold pb-6">
                {state.term}
              </h2>
              <p className="text-gray-300 leading-relaxed">{state.description}</p>
            </div>
          </motion.div>

         
          <motion.img
            src={state.images?.landscape}
            alt={state.term}
            className="w-full lg:w-1/2 object-contain"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
}
