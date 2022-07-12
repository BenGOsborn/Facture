import { LandingHeading } from "../LandingHeading";
import { Feature } from "./feature";

interface Props {
    subheading: JSX.Element | string;
    heading: JSX.Element | string;
    description: JSX.Element | string;
    features: {
        title: string;
        description: string;
        icon: JSX.Element;
    }[];
}

export function Features({ subheading, heading, description, features }: Props) {
    return (
        <div className="space-y-14">
            <LandingHeading subheading={subheading} heading={heading} description={description} />
            <div role="features-features" className="grid grid-cols-1 lg:grid-cols-3 gap-7 auto-rows-max auto-cols-max mx-auto w-4/5">
                {features.map((feature, index) => (
                    <Feature key={index} {...feature} />
                ))}
            </div>
        </div>
    );
}

export default Features;
