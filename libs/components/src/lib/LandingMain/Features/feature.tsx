interface Props {
    title: string;
    description: string;
    icon: JSX.Element;
}

export function Feature({ title, description, icon }: Props) {
    return (
        <div role="feature" className="flex flex-col items-center space-y-3 bg-gray-200 p-6 rounded-md shadow-md">
            <span role="feature-icon" className="bg-gray-900 p-3 rounded-md text-gray-100">
                {icon}
            </span>
            <h3 role="feature-title" className="text-gray-900 font-bold text-xl">
                {title}
            </h3>
            <p role="feature-description" className="text-gray-700 font-medium text-md">
                {description}
            </p>
        </div>
    );
}

export default Feature;
