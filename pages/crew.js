import { useReducer, useEffect, useState } from "react";
import Image from "next/image";
import cReducer, { cInitialState } from "../External/crewReducer";
import desktop from "../public/assets/crew/background-crew-desktop.jpg";
import tablet from "../public/assets/crew/background-crew-tablet.jpg";
import mobile from "../public/assets/crew/background-crew-mobile.jpg";
import { motion } from "framer-motion";

export default function Crew() {
  const [state, dispatch] = useReducer(cReducer, cInitialState);
  const [transitionState, setTransitionState] = useState("opacity-0");

  useEffect(() => {
    setTransitionState("opacity-100");
  }, []);

  function changeCrew(e) {
    dispatch({ type: e.target.id });
  }

  return (
    <section className={`relative min-h-[100vh] pt-36  pb-24 transition-opacity duration-1000 ${transitionState}`}>
     
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
          <span className="opacity-50 font-bold">02</span>
          <span>Meet your crew</span>
        </motion.h1>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 justify-between">
         
          <motion.div
            className="flex flex-col gap-8 text-center lg:text-left max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <p className="uppercase text-gray-400 lg:text-xl md:text-lg text-base">{state.role}</p>
              <h2 className="text-2xl sm:text-5xl lg:text-6xl uppercase font-bold pb-4">{state.name}</h2>
              <p className="text-gray-300 leading-relaxed">{state.bio}</p>
            </div>

           
            <ul className="flex justify-center lg:justify-start gap-4 pt-6">
              {[1, 2, 3, 4].map((id) => (
                <li
                  key={id}
                  id={id.toString()}
                  onClick={changeCrew}
                  className={`cursor-pointer w-4 h-4 rounded-full transition-all duration-300 ${state.id === id ? "bg-white" : "bg-gray-500"
                    }`}
                />
              ))}
            </ul>
          </motion.div>

         
          <motion.img
            src={state.images.png}
            alt={state.name}
            className="w-60 sm:w-72 lg:w-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
}
