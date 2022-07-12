import { emitFormHit, FORM_URL } from "@facture/helpers";
import Link from "next/link";

export function NavNotification() {
    return (
        <nav className="p-4 bg-gray-900 text-center">
            <p className="text-md text-gray-100 font-medium">
                Register your manufacturing business for free{" "}
                <Link href={FORM_URL}>
                    <a
                        className="font-bold text-white transition-colors hover:text-gray-300"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => emitFormHit("nav_notification")}
                    >
                        here
                    </a>
                </Link>
                .
            </p>
        </nav>
    );
}

export default NavNotification;
