interface Props {
    name: string;
}

export function Name({ name }: Props) {
    return <h1>{name}</h1>;
}

export default Name;
