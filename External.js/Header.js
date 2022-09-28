import Link from "next/link";

export default function Header(){
    return(
        <>
        <nav>
        <h1>this is header</h1>
        <ul>
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
    )
}