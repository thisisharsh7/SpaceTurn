import { useReducer } from "react";
import desktop from "../public/assets/destination/background-destination-desktop.jpg";
import Image from "next/image";
import dReducer, { dInitialState } from "../External/destiReducer";

export default function destination() {
  const [state, dispatch] = useReducer(dReducer, dInitialState);
  function changeText(e){
    dispatch({type: e.target.innerHTML});
  }
  return (
    <section className="xl:pl-24 pl-5 flex flex-col">
    <div className="-z-10 ">
    <Image src={desktop} layout="fill" alt="bg-destination"/>
    </div>
      <h1 className="text-2xl uppercase flex gap-12 pb-10">
        <span>01</span>
        <span>Pick your destination</span>
      </h1>
      <div className="flex justify-between items-center">
        <img src={state.images.webp} alt={state.name} className=""/>

        <div className="max-w-min flex flex-col pb-8 xl:mr-32 mr-5 gap-10 ">
        <div className="">
        <ul className="flex gap-16 uppercase">
            <li onClick={changeText} className="cursor-pointer">
              Moon
            </li>
            <li onClick={changeText} className="cursor-pointer">
              Mars
            </li>
            <li onClick={changeText} className="cursor-pointer">
              Europa
            </li>
            <li onClick={changeText} className="cursor-pointer">
              Titan
            </li>
          </ul>
        </div>
          <h1 className="text-6xl">{state.name}</h1>
          <p className="h-24">{state.description}</p>
          <hr />
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 items-center uppercase">
              <p>Avg. distance</p>
              <p className="flex gap-2">
                <span>{state.distance}</span>
                <span>km</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center uppercase">
              <p>Est. time travel</p>
              <p className="flex gap-2">
                <span>{state.travel[0]}</span>
                <span>{state.travel[1]}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
