import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/shared/logo.svg"

export default function Header() {
  return (
    <header className="xl:py-5 py-3" >
      <nav className="xl:p-10 p-5 flex items-center justify-between">
      <div className="flex w-24">
        <Image src={logo} alt="logo" />
      </div>
      <div className=" bg-white w-full h-0.5">
      </div>
        <ul className="sm:flex justify-end xl:gap-10 gap-6 pl-5 hidden">
          <li>
            <Link href="/">
              <a className="flex gap-3 font-normal p-1 xl:text-2xl text-xl"><span>00</span><span>Home</span></a>
            </Link>
          </li>
          <li>
            <Link href="/destination">
              <a className="flex gap-3 font-normal p-1 xl:text-2xl text-xl"><span>01</span><span>Destination</span></a>
            </Link>
          </li>
          <li>
            <Link href="/crew">
              <a className="flex gap-3 font-normal p-1 xl:text-2xl text-xl"><span>02</span><span>Crew</span></a>
            </Link>
          </li>
          <li>
            <Link href="/technology">
              <a className="flex gap-3 font-normal p-1 xl:text-2xl text-xl"><span>03</span><span>Technology</span></a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
