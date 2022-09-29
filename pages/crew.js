import { useReducer } from "react";
import cReducer, { cInitialState } from "../External/crewReducer";

export default function crew() {
  const [state, dispatch] = useReducer(cReducer, cInitialState);
  function changeCrew(e) {
    dispatch({ type: e.target.id });
  }

  return (
    <section className="py-12 px-32 flex gap-10 ">
      <h1 className="text-2xl uppercase">02</h1>
      <div className="flex flex-col gap-20">
        <h1 className="text-2xl uppercase">Meet your crew</h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-16">
            <div className="max-w-min flex flex-col gap-3">
              <h1 className="uppercase text-2xl">{state.role}</h1>
              <h1 className="text-5xl uppercase min-w-max pb-12">
                {state.name}
              </h1>
              <p>{state.bio}</p>
            </div>
          </div>
        </div>
        <ul className="flex gap-16 uppercase">
          <li onClick={changeCrew} className="cursor-pointer" id="1">
            Moon
          </li>
          <li onClick={changeCrew} className="cursor-pointer" id="2">
            Mars
          </li>
          <li onClick={changeCrew} className="cursor-pointer" id="3">
            Europa
          </li>
          <li onClick={changeCrew} className="cursor-pointer" id="4">
            Titan
          </li>
        </ul>
      </div>
      <img src={state.images.png} alt={state.name} />
    </section>
  );
}
