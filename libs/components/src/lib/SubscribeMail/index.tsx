import { Mail } from "tabler-icons-react";

import { RainbowText } from "../RainbowText";

export function SubscribeMail() {
    return (
        <div className="flex flex-col items-center space-y-3 text-center">
            <div className="text-gray-900">
                <Mail size={42} />
            </div>
            <p className="text-3xl font-bold text-gray-900">
                <RainbowText>Join</RainbowText> Our Newsletter
            </p>
            <p className="font-medium text-gray-700 text-md">
                Subscribe to our newsletter to stay up-to-date with the newest and most innovative manufacturing businesses near you!
            </p>
            <form
                className="flex flex-col w-full pt-7 space-y-3"
                onSubmit={(e) => {
                    e.preventDefault();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    console.log(e.target.email.value);
                }}
            >
                <input
                    name="email"
                    required={true}
                    className="p-6 bg-gray-900 text-white border-none text-md font-medium rounded-md w-full"
                    type="email"
                    placeholder="john@domain.com"
                />
                <input
                    className="cursor-pointer font-bold text-md bg-gray-200 hover:bg-gray-300 transition-colors p-6 rounded-md text-gray-700"
                    type="submit"
                    value="Join For Free"
                />
            </form>
        </div>
    );
}

export default SubscribeMail;
