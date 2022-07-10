import { BatteryOff, CreditCardOff, DeviceAnalytics, Search, UserOff, World } from "tabler-icons-react";

import { RainbowText } from "../RainbowText";
import { About } from "./About";
import { CTA } from "./CTA";
import { Features } from "./Features";
import { Hero } from "./Hero";

export function LandingMain() {
    return (
        <div className="space-y-36">
            <Hero />
            <About />
            <Features
                subheading="Benefits"
                heading={
                    <>
                        <RainbowText>Benefits</RainbowText> To Your Business
                    </>
                }
                description="Here's some of the benefits that our platform provides to your manufacturing business."
                features={[
                    {
                        title: "SEO Optimized Website.",
                        description:
                            "We give each manufacturer their very own custom web page. We ensure that your page contains all relevant information to your business and looks beautiful.",
                        icon: <World />,
                    },
                    {
                        title: "Full Analytics Tracking.",
                        description:
                            "Each website comes with full analytics tracking out the box. Track what searches your business appears in, how you rank, and what your potential clients are looking at.",
                        icon: <DeviceAnalytics />,
                    },
                    {
                        title: "Get Your Business Found.",
                        description:
                            "Join our database containing the largest manufacturers in the nation so that your business will appear next time a future client is in need of your service.",
                        icon: <Search />,
                    },
                ]}
            />
            <Features
                subheading="Advantages"
                heading={
                    <>
                        <RainbowText>Advantages</RainbowText> Of Our Platform
                    </>
                }
                description="Here's a few advantages that using our platform provides your manufacturing business in comparison to other platforms."
                features={[
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
                    {
                        title: "Completely Hands Off.",
                        description:
                            "Not interested in manually updating your page? Don't worry, our team will handle any changes requested by you so that you don't have to.",
                        icon: <BatteryOff />,
                    },
                ]}
            />
            <CTA />
        </div>
    );
}

export default LandingMain;
