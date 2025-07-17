import Link from "next/link";

export function Menu () {
    return (
       <nav>
            <Link href="/"> Home </Link>
            <Link href="/"> Explore </Link>
            <Link href="/">Profile</Link>
        </nav> 
    )
}