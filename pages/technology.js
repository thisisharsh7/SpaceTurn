import { useReducer } from "react";
import tReducer, { tInitialState } from "../External/techReducer";
import desktop from "../public/assets/technology/background-technology-desktop.jpg";
import tablet from "../public/assets/technology/background-technology-tablet.jpg";
import mobile from "../public/assets/technology/background-technology-mobile.jpg";
import Image from "next/image";

export default function technology() {
  const [state, dispatch] = useReducer(tReducer, tInitialState);
  function changeTech(e) {
    dispatch({ type: e.target.innerHTML });
  }
  return (
    <section className="py-12 px-32 flex gap-10">
      <div className="-z-10">
        <Image src={desktop} alt="bg-desktop" layout="fill" />
      </div>
      <div className="-z-10 sm:hidden">
        <Image src={mobile} alt="bg-desktop" layout="fill" />
      </div>
      <div className="-z-10 md:hidden">
        <Image src={tablet} alt="bg-desktop" layout="fill" />
      </div>
      <h1 className="text-3xl uppercase">03</h1>
      <div className="flex flex-col gap-20">
        <h1 className="text-3xl uppercase">Space launch 101</h1>
        <div className="flex justify-between gap-10">
          <ul className="flex flex-col gap-8 uppercase text-stone-900">
            <li
              className="bg-white px-7 text-2xl py-5 rounded-full cursor-pointer "
              onClick={changeTech}
            >
              1
            </li>
            <li
              className="bg-white px-7 text-2xl py-5 rounded-full cursor-pointer"
              onClick={changeTech}
            >
              2
            </li>
            <li
              className="bg-white px-7 text-2xl py-5 rounded-full cursor-pointer"
              onClick={changeTech}
            >
              3
            </li>
          </ul>
          <div className="flex flex-col">
            <div className=" flex flex-col gap-1">
              <h1 className="uppercase text-xl">The terminology...</h1>
              <h1 className="text-5xl w-max uppercase pb-10">{state.term}</h1>
              <p>{state.description}</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={state.images?.landscape}
        alt={state.term}
        className="justify-center w-1/2"
      />
    </section>
  );
}
