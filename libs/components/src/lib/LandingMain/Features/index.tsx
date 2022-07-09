import { Feature } from "./feature";

interface Props {
    heading: string | JSX.Element;
    subheading: string | JSX.Element;
    description: string | JSX.Element;
    features: {
        title: string;
        description: string;
        icon: JSX.Element;
    }[];
}

export function Features({ heading, subheading, description, features }: Props) {
    return (
        <div className="text-center space-y-14">
            <div className="space-y-3 lg:w-2/5 lg:mx-auto">
                <p role="features-subheading" className="text-gray-700 font-bold text-md">
                    {subheading}
                </p>
                <h3 role="features-heading" className="text-gray-900 font-bold text-3xl">
                    {heading}
                </h3>
                <p role="features-description" className="text-gray-700 font-medium text-lg">
                    {description}
                </p>
            </div>
            <div role="features-features" className="grid grid-cols-1 lg:grid-cols-3 gap-7 auto-rows-max auto-cols-max mx-auto w-4/5">
                {features.map((feature, index) => (
                    <Feature key={index} {...feature} />
                ))}
            </div>
        </div>
    );
}

export default Features;
