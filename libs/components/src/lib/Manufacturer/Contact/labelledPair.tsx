interface Props {
    pair: [string, string][];
}

export function LabelledPair({ pair }: Props) {
    return (
        <ul className="space-y-1">
            {pair.map(([label, item], index) => {
                return (
                    <li key={index}>
                        <span className="font-medium text-gray-800">{label}</span>: <span className="text-gray-700">{item}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default LabelledPair;
