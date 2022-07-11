import { emitPromotionHit, subscribePromotionalEmail } from "@facture/helpers";

export function SubscribeFormInline() {
    const emailSignupUrl = process.env["NEXT_PUBLIC_MAILCHIMP_SIGNUP_URL"] as string;

    return (
        <form
            className="flex w-full space-x-3"
            action={emailSignupUrl}
            method="post"
            onSubmit={() => {
                subscribePromotionalEmail();
                emitPromotionHit("mailing_list_footer");
            }}
        >
            <input
                name="EMAIL"
                required={true}
                className="p-4 bg-gray-900 text-white border-none text-md font-medium rounded-md w-full"
                type="email"
                placeholder="john@domain.com"
            />
            <input type="hidden" name="subscribe" value="Subscribe" />
            <input
                className="cursor-pointer font-bold text-md bg-gray-200 hover:bg-gray-300 transition-colors p-4 rounded-md text-gray-700"
                type="submit"
                value="Subscribe"
            />
        </form>
    );
}

export default SubscribeFormInline;
