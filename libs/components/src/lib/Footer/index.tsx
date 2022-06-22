import Link from "next/link";
import { BrandLinkedin } from "tabler-icons-react";

export function Footer() {
    return (
        <footer className="p-6 pt-12 mt-14 shadow-md bg-gray-800">
            <div className="w-4/5 mx-auto flex flex-col space-y-6 text-center">
                <p className="font-normal text-white text-md">
                    Facture is an online platform dedicated to connecting manufacturers with individuals and businesses to drive local industry and innovation.
                </p>
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
            </div>
        </footer>
    );
}

export default Footer;
