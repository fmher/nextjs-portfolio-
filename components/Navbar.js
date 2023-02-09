// import Link from next
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                {/* Links take any child components */}
                Home
            </Link>

            <Link href='/about'>
                About Meh
            </Link>

            {/* outside sources use regular a tags */}
            {/* example = <a href='example'
            target='_blank"
            upper line of code opens in another tab /> */}
        </nav>
    )
}