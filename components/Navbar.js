// import Link from next
import Link from "next/link";
// import '@/styles/globals.css'

export default function Navbar() {
    return (
        <nav 
            // style={{
            //     position: 'fixed',
            //     background: 'red',
            // }}
        >
            <Link href='/' id="color">
                {/* Links take any child components */}
                Feu Matthew Her
            </Link>

            {/* <Link href='/about'>
                About Meh
            </Link>

            <Link href='/projects'>
                Projects
            </Link> */}

            <Link href='#About' id="color">
                About
            </Link>

            <Link href='#Project' id="color">
                Project
            </Link>

            <Link href='#Resume' id="color">
                Resume
            </Link>

            <Link href='#Contact' id="color">
                Contact
            </Link>

            {/* outside sources use regular a tags */}
            {/* example = <a href='example'
            target='_blank"
            upper line of code opens in another tab /> */}
        </nav>
    )
}