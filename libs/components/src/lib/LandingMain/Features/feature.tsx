interface Props {
    title: string;
    description: string;
    icon: JSX.Element;
}

export function Feature({ title, description, icon }: Props) {
    return (
        <div className="flex flex-col items-center space-y-3 bg-gray-200 p-6 rounded-md shadow-md">
            <span className="bg-gray-900 p-3 rounded-md text-gray-100">{icon}</span>
            <p className="text-gray-900 font-bold text-xl">{title}</p>
            <p className="text-gray-700 font-medium text-md">{description}</p>
        </div>
    );
}

export default Feature;
