import { SearchBar } from "./searchBar";
import { Title } from "./title";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export function Hero({ value, onChange }: Props) {
    return (
        <header className="p-14 bg-white rounded-md shadow-md flex flex-col items-center text-center space-y-7">
            <Title />
            <SearchBar value={value} onChange={onChange} />
        </header>
    );
}

export default Hero;
