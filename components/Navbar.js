// import Link from next
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                {/* Links take any child components */}
                Home
            </Link>

            {/* <Link href='/about'>
                About Meh
            </Link>

            <Link href='/projects'>
                Projects
            </Link> */}

            <Link href='#About'>
                About
            </Link>

            <Link href='#Project'>
                Project
            </Link>

            <Link href='#Resume'>
                Resume
            </Link>

            <Link href='#Contact'>
                Contact
            </Link>

            {/* outside sources use regular a tags */}
            {/* example = <a href='example'
            target='_blank"
            upper line of code opens in another tab /> */}
        </nav>
    )
}