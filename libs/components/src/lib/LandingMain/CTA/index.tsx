import { emitFormHit } from "@facture/helpers";
import Link from "next/link";

import { RainbowText } from "../../RainbowText";

export function CTA() {
    return (
        <div className="text-center space-y-14">
            <div className="space-y-3">
                <p className="font-bold text-gray-800 text-3xl">Ready to get your business found?</p>
                <p className="font-bold text-gray-900 text-4xl">
                    <RainbowText>Register</RainbowText> for free now!
                </p>
            </div>
            <div className="pb-6">
                <Link href="https://forms.gle/59gjvMtDMJ6rmDbS7">
                    <a className="font-bold p-6 bg-gray-800 hover:bg-gray-900 transition-colors text-white rounded-md" onClick={() => emitFormHit("landing_main_cta")}>
                        Register For Free
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default CTA;
