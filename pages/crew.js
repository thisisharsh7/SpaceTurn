import { useReducer } from "react";
import cReducer, { cInitialState } from "../External/crewReducer";
import Image from "next/image";
import desktop from "../public/assets/crew/background-crew-desktop.jpg";

export default function crew() {
  const [state, dispatch] = useReducer(cReducer, cInitialState);
  function changeCrew(e) {
    dispatch({ type: e.target.id });
  }

  return (
    <section className="py-12 px-32 flex">
    <div className="-z-10">
      <Image src={desktop} layout="fill" alt="desktop" />
    </div>
      <h1 className="text-3xl uppercase">02</h1>
   
    <div className=" flex gap-40 items-start md:flex-nowrap flex-wrap-reverse justify-center">
      
      <div className="flex flex-col gap-20 xl:w-2/5 md:w-1/2 sm:w-full">
      <div className="h-80 flex flex-col gap-8">
        <h1 className="text-3xl uppercase">Meet your crew</h1>
        <div className="flex justify-between ">
          <div className="flex flex-col  gap-16">
            <div className="w-full flex flex-col gap-3">
              <h1 className="uppercase text-2xl">{state.role}</h1>
              <h1 className="text-5xl uppercase pb-12 w-max">{state.name}</h1>
              <p className="">{state.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <ul className="flex gap-16 uppercase">
          <li
            onClick={changeCrew}
            className="cursor-pointer w-4 p-4 rounded-full bg-white"
            id="1"
          ></li>
          <li
            onClick={changeCrew}
            className="cursor-pointer w-4 p-4 rounded-full bg-white"
            id="2"
          ></li>
          <li
            onClick={changeCrew}
            className="cursor-pointer w-4 p-4 rounded-full bg-white"
            id="3"
          ></li>
          <li
            onClick={changeCrew}
            className="cursor-pointer w-4 p-4 rounded-full bg-white"
            id="4"
          ></li>
        </ul>
      </div>
      </div>
      <img src={state.images.png} alt={state.name} className="w-72 self-end" />
    </div>
    </section>
  );
}
