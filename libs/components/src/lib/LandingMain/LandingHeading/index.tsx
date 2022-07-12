interface Props {
    subheading: JSX.Element | string;
    heading: JSX.Element | string;
    description?: JSX.Element | string;
}

export function LandingHeading({ subheading, heading, description }: Props) {
    return (
        <div className="space-y-3 text-center lg:w-2/5 lg:mx-auto">
            <p role="landing-heading-subheading" className="text-gray-700 font-bold text-md">
                {subheading}
            </p>
            <h2 role="landing-heading-heading" className="text-gray-900 font-bold text-3xl">
                {heading}
            </h2>
            {description && (
                <p role="landing-heading-description" className="text-gray-700 font-medium text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}

export default LandingHeading;
