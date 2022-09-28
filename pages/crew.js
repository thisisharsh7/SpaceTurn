export default function crew() {
  return (
    <section className="py-12 px-32 flex gap-10 ">
      <h1 className="text-2xl uppercase">02</h1>
      <div className="flex flex-col gap-20">
        <h1 className="text-2xl uppercase">Meet your crew</h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-16">
            <div className="max-w-min flex flex-col gap-3">
              <h1 className="uppercase text-2xl">Commander</h1>
              <h1 className="text-5xl uppercase min-w-max pb-12">
                Douglas Hurley
              </h1>
              <p>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>
          </div>
        </div>
        <ul className="flex gap-16 uppercase">
          <li>Moon</li>
          <li>Mars</li>
          <li>Europa</li>
          <li>Titan</li>
        </ul>
      </div>
      <img src="" alt="" />
    </section>
  );
}
