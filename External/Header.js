import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/shared/logo.svg";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="xl:py-2 py-3 z-40">
      <nav className="xl:p-10 p-5 flex items-center justify-between">
        <div className="flex w-24">
          <Image src={logo} alt="logo" />
        </div>
        <div className=" bg-white w-full h-0.5"></div>
        <ul className="sm:flex justify-end xl:gap-10 gap-6 pl-5 hidden">
          <li>
            <Link href="/">
              <a
                className={
                  router.pathname == "/"
                    ? "flex gap-3 font-normal p-1 xl:text-2xl text-xl before:content-[''] before:bg-white before:h-0.5 before:w-full relative before:absolute before:-bottom-1 before:rounded-full"
                    : "flex gap-3 font-normal p-1 xl:text-2xl text-xl before:content-[''] before:bg-white before:h-0.5 relative before:absolute before:-bottom-1 before:rounded-full "
                }
              >
                <span>00</span>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/destination">
              <a
                className={
                  router.pathname == "/destination"
                    ? "flex gap-3 font-normal p-1 xl:text-2xl text-xl before:content-[''] before:bg-white before:h-0.5  before:w-full relative before:absolute before:-bottom-1 before:rounded-full"
                    : "flex gap-3 font-normal p-1 xl:text-2xl text-xl before:content-[''] before:bg-white before:h-0.5 relative before:absolute before:-bottom-1 before:rounded-full "
                }
              >
                <span>01</span>
                <span>Destination</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/crew">
              <a
                className={
                  router.pathname == "/crew"
                    ? "flex gap-3 font-normal p-1 xl:text-2xl text-xl before:content-[''] before:bg-white before:h-0.5  before:w-full relative before:absolute before:-bottom-1 before:rounded-full"
                    : "flex gap-3 font-normal p-1 xl:text-2xl text-xl before:content-[''] before:bg-white before:h-0.5 relative before:absolute before:-bottom-1 before:rounded-full "
                }
              >
                <span>02</span>
                <span>Crew</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/technology">
              <a
                className={
                  router.pathname == "/technology"
                    ? "flex gap-3 font-normal p-1 xl:text-2xl text-xl before:content-[''] before:bg-white before:h-0.5  before:w-full relative before:absolute before:-bottom-1 before:rounded-full"
                    : "flex gap-3 font-normal p-1 xl:text-2xl text-xl before:content-[''] before:bg-white before:h-0.5 relative before:absolute before:-bottom-1 before:rounded-full "
                }
              >
                <span>03</span>
                <span>Technology</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
