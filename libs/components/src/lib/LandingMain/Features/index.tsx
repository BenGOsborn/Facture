import { BatteryOff, CreditCardOff, UserOff } from "tabler-icons-react";
import { RainbowText } from "../../RainbowText";
import { Feature } from "./feature";

export function Features() {
    const features: {
        title: string;
        description: string;
        icon: JSX.Element;
    }[] = [
        {
            title: "100% Free.",
            description:
                "Getting your business listed on our platform is 100% free. Our mission is to create a comprehensive registry for entrepreneurs, and as such, registering will remain free forever.",
            icon: <CreditCardOff />,
        },
        {
            title: "No Sign Up.",
            description:
                "Getting your business listed on our platform requires absolutely no sign up process. Simply add your businesses information to our sign up form and we'll list you ASAP!",
            icon: <UserOff />,
        },
        { title: "Completely Hands Off.", description: "Getting your business listed on our platform requires absolutely no sign up process.", icon: <BatteryOff /> },
    ];

    // **** This is advantages, we need another one for the benefits provided...

    // **** Benefits provided to businesses and entrepreneurs (free web page, search ready from day one)

    return (
        <div className="text-center space-y-14">
            <div className="space-y-3 lg:w-2/5 lg:mx-auto">
                <p className="text-gray-700 font-bold text-md">Advantages</p>
                <h3 className="text-gray-900 font-bold text-3xl">
                    <RainbowText>Advantages</RainbowText> Of Our Platform
                </h3>
                <p className="text-gray-700 font-medium text-lg">
                    Here's a few advantages that using our platform provides your manufacturing business in addition to other platforms.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 auto-rows-max auto-cols-max mx-auto w-4/5">
                {features.map((feature, index) => (
                    <Feature key={index} {...feature} />
                ))}
            </div>
        </div>
    );
}

export default Features;
