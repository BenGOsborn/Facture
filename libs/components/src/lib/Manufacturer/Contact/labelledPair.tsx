interface Props {
    pair: [string, string][];
}

export function LabelledPair({ pair }: Props) {
    return (
        <ul role="labelled-pair" className="space-y-1">
            {pair.map(([label, item], index) => {
                return (
                    <li key={index}>
                        <span role="labelled-pair-label" className="font-medium text-gray-800">
                            {label}
                        </span>
                        :{" "}
                        <span role="labelled-pair-item" className="text-gray-700">
                            {item}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}

export default LabelledPair;
