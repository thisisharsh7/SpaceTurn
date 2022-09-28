import Imoon from "../public/assets/destination/image-moon.png";

export default function destination(){
    return(
        <section className="py-12 px-32 flex flex-col gap-10 ">
            <h1 className="text-2xl uppercase flex gap-12"><span>01</span><span>Pick your destination</span></h1>
            <div className="flex justify-between">
                <img src={Imoon} alt="moon" />
                <div className="max-w-min flex flex-col gap-10">
                    <ul className="flex gap-16 uppercase">
                        <li>Moon</li>
                        <li>Mars</li>
                        <li>Europa</li>
                        <li>Titan</li>
                    </ul>
                    <h1 className="text-6xl">Moon</h1>
                    <p >See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <hr />
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2 items-center uppercase">
                            <p>Avg. distance</p>
                            <p className="flex gap-2"><span>384,400</span><span>km</span></p>
                        </div>
                        <div className="flex flex-col gap-2 items-center uppercase">
                            <p>Est. time travel</p>
                            <p className="flex gap-2"><span>3</span><span>Days</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}