import Link from "next/link";
import Image from "next/image";

interface Props {}

export function Header({}: Props) {
    return (
    <header>

        <Link href='/'>
            <Image
                src="./book.svg"
                alt="Logo"
                width={28}
                height={28}
                priority
                />
        </Link>
        



    </header>
    )}
