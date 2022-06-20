import Link from "next/link";
import { BrandLinkedin } from "tabler-icons-react";
import Badge from "../Badge";

interface Props {}

export function Footer({}: Props) {
    return (
        <footer className="p-6 pt-12 mt-14 shadow-md bg-gray-800 flex flex-col items-center space-y-4">
            <p className="font-medium text-white text-md">
                Want us to list your manufacturing business / company? Contact us on{" "}
                <Link href="https://www.linkedin.com/in/bengosborn/">
                    <a className="font-bold space-x-1 align-middle" target="_blank" rel="noreferrer">
                        <BrandLinkedin className="inline" />
                        <span>LinkedIn</span>
                    </a>
                </Link>
                .
            </p>
            <ul className="font-normal text-white flex items-center justify-center text-sm">
                <li>Facture - {new Date().getFullYear()}</li>
            </ul>
        </footer>
    );
}

export default Footer;
