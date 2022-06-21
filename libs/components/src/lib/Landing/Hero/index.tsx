import Title from "./title";

interface Props {}

export function Hero({}: Props) {
    return (
        <header className="p-6 bg-white rounded-md shadow-md flex flex-col items-center text-center">
            <Title />
        </header>
    );
}

export default Hero;
