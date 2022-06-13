interface Props {
    name: string;
    description: string;
}

export function Title({ name, description }: Props) {
    return (
        <header className="text-center pb-6 mb-10 border-b-2 border-b-gray-200">
            <h1 className="text-3xl font-bold text-indigo-600 mb-3">{name}</h1>
            <p className="text-gray-900 text-md">{description}</p>
        </header>
    );
}

export default Title;
