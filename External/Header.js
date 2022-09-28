import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="bg-red-700 p-10">
        <ul className="flex justify-end gap-10">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/destination">
              <a>Destination</a>
            </Link>
          </li>
          <li>
            <Link href="/crew">
              <a>Crew</a>
            </Link>
          </li>
          <li>
            <Link href="/technology">
              <a>Technology</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
