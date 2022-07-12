import { DESCRIPTION, emitFormHit, FORM_URL, NAME, PRIVACY_POLICY_URL } from "@facture/helpers";
import Link from "next/link";

import { SubscribeFormInline } from "../SubscribeMail";

export function Footer() {
    return (
        <footer className="p-6 pt-12 mt-14 shadow-md bg-gray-800">
            <div className="w-4/5 xl:w-2/5 mx-auto flex flex-col space-y-7 text-center">
                <p className="font-normal text-white text-md">{DESCRIPTION}</p>
                <SubscribeFormInline />
                <p className="font-medium text-white text-md">
                    Want to list your manufacturing business? Apply for free{" "}
                    <Link href={FORM_URL}>
                        <a className="font-bold text-white transition-colors hover:text-gray-300" target="_blank" rel="noreferrer" onClick={() => emitFormHit("footer")}>
                            here
                        </a>
                    </Link>
                    .
                </p>
                <ul className="font-normal text-white flex items-center justify-center text-sm space-x-7">
                    <li>
                        {NAME} {new Date().getFullYear()}
                    </li>
                    <li>
                        <Link href={PRIVACY_POLICY_URL}>
                            <a target="_blank" rel="noreferrer">
                                Privacy Policy
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
