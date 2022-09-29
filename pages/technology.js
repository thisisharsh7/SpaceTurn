import { useReducer } from "react";
import tReducer, { tInitialState } from "../External/techReducer";

export default function technology() {
  const [state , dispatch] = useReducer(tReducer, tInitialState);
  function changeTech(e){
    dispatch({type: e.target.innerHTML});
  }
  return (
    <section className="py-12 px-32 flex gap-10 ">
      <h1 className="text-2xl uppercase">03</h1>
      <div className="flex flex-col gap-20">
        <h1 className="text-2xl uppercase">Space launch 101</h1>
        <div className="flex justify-between gap-10">
          <ul className="flex flex-col gap-8 uppercase text-stone-900">
            <li className="bg-white px-7 py-5 rounded-full cursor-pointer " onClick={changeTech}>
              1
            </li>
            <li className="bg-white px-7 py-5 rounded-full cursor-pointer" onClick={changeTech}>
              2
            </li>
            <li className="bg-white px-7 py-5 rounded-full cursor-pointer" onClick={changeTech}>
              3
            </li>
          </ul>
          <div className="flex flex-col gap-16">
            <div className="max-w-min flex flex-col gap-1">
              <h1 className="uppercase text-xl">The terminology...</h1>
              <h1 className="text-5xl uppercase min-w-max pb-16">
                {state.term}
              </h1>
              <p>
                {state.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={state.images?.landscape} alt={state.term} />
    </section>
  );
}
