import { RainbowText } from "../../RainbowText";

export function About() {
    return (
        <div className="space-y-7">
            <div className="text-center space-y-3">
                <p className="text-gray-700 font-bold text-md">About Us</p>
                <h2 className="text-3xl font-bold text-gray-900">
                    What Is <RainbowText>Facture</RainbowText>?
                </h2>
            </div>
            <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto w-4/5 xl:w-3/5">
                <p className="font-medium text-md text-gray-700">
                    Facture was created to provide manufacturers with a <span className="text-gray-900">simple all-in-one</span> platform where they can advertise their
                    services and be easily found by entrepreneurs.
                </p>
                <p className="font-medium text-md text-gray-700">
                    Our mission is to <span className="text-gray-900">drive local industry</span> and innovation with our easy to use smart manufacturer search, helping
                    entrepreneurs to <span className="text-gray-900">find suppliers with ease</span>.
                </p>
                <p className="font-medium text-md text-gray-700">
                    We understand that you as a business owner have a lot to deal with, so we take care of{" "}
                    <span className="text-gray-900">increasing your digital presence</span> so that you don't waste your time, money, or brain power.
                </p>
            </div>
        </div>
    );
}

export default About;
