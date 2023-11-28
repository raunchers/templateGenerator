"use client";
import Link from "next/link";

export default function NavBar(){
    return (
        <nav className="navigBar">
            <div className="compLogo">
                <Link href="/" className="logo"> GLS </Link>
            </div>
            <ul>
                <li>
                    <Link href="/offline"> Equipment Offline </Link>
                </li>
                <li>
                    <Link href="/bouncing"> Equipment Bouncing </Link>
                </li>
                <li>
                    <Link href="/restored"> Equipment Restored </Link>
                </li>
                <li>
                    <Link href="/misc"> Misc </Link>
                </li>
            </ul>
        </nav>
    )
}