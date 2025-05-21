import { useReducer, useEffect, useState } from "react";
import Image from "next/image";
import desktop from "../public/assets/destination/background-destination-desktop.jpg";
import tablet from "../public/assets/destination/background-destination-tablet.jpg";
import mobile from "../public/assets/destination/background-destination-mobile.jpg";
import dReducer, { dInitialState } from "../External/destiReducer";
import { motion } from "framer-motion";

export default function Destination() {
  const [state, dispatch] = useReducer(dReducer, dInitialState);
  const [transitionState, setTransitionState] = useState("opacity-0");

  useEffect(() => {
    setTransitionState("opacity-100");
  }, []);

  function changeText(e) {
    dispatch({ type: e.target.innerHTML });
  }

  return (
    <section
      className={`relative flex items-center justify-center min-h-[100vh] pt-36 pb-24 transition-opacity duration-1000 ${transitionState}`}
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

     
      <div className="relative z-10 w-full text-white px-6 sm:px-10 md:px-20 xl:px-40">
        <motion.h1
          className="sm:text-2xl uppercase flex gap-6 sm:gap-12 pb-10 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="opacity-50 font-bold">01</span>
          <span>Pick your destination</span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <motion.img
            src={state.images.webp}
            alt={state.name}
            className="w-52 sm:w-72 lg:w-[400px] animate-fade-in"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.div
            className="max-w-xl flex flex-col text-center lg:text-left gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <ul className="flex justify-center lg:justify-start gap-6 sm:gap-10 text-xs sm:text-sm md:text-base uppercase tracking-widest">
              {["Moon", "Mars", "Europa", "Titan"].map((dest) => (
                <li
                  key={dest}
                  onClick={changeText}
                  className={`cursor-pointer hover:border-b-2 pb-1 ${state.name === dest ? "border-white" : "border-transparent"
                    } transition-all duration-300`}
                >
                  {dest}
                </li>
              ))}
            </ul>

            <h2 className="text-5xl sm:text-7xl uppercase font-bold">{state.name}</h2>
            <p className="text-gray-300 leading-relaxed">{state.description}</p>

            <hr className="border-gray-600 my-4" />

            <div className="flex flex-col sm:flex-row gap-8 uppercase text-sm sm:text-base tracking-wider justify-center lg:justify-start">
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <p className="text-gray-400">Avg. distance</p>
                <p className="font-bold">{state.distance} km</p>
              </div>
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <p className="text-gray-400">Est. travel time</p>
                <p className="font-bold">{state.travel.join(" ")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
