import { emitPromotionHit } from "@facture/helpers";

export function SubscribeForm() {
    const emailSignupUrl = process.env["NEXT_PUBLIC_MAILCHIMP_SIGNUP_URL"] as string;

    return (
        <form className="flex flex-col w-full pt-7 space-y-3" action={emailSignupUrl} method="post" onSubmit={() => emitPromotionHit("mailing_list")}>
            <input
                name="EMAIL"
                required={true}
                className="p-6 bg-gray-900 text-white border-none text-md font-medium rounded-md w-full"
                type="email"
                placeholder="john@domain.com"
            />
            <input type="hidden" name="subscribe" value="Subscribe" />
            <input
                className="cursor-pointer font-bold text-md bg-gray-200 hover:bg-gray-300 transition-colors p-6 rounded-md text-gray-700"
                type="submit"
                value="Join For Free"
            />
        </form>
    );
}

export default SubscribeForm;
