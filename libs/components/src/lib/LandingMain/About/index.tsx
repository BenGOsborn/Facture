import { RainbowText } from "../../RainbowText";

export function About() {
    return (
        <div className="text-center space-y-7">
            <div className="space-y-3">
                <p className="text-gray-700 font-bold text-xl">About Us</p>
                <h2 className="text-4xl font-bold text-gray-900">
                    What Is <RainbowText>Facture</RainbowText>?
                </h2>
            </div>
            <div className="space-y-7 text-gray-700 text-xl font-medium xl:w-2/3 xl:mx-auto">
                <p>
                    Facture was created to provide manufacturers with a simple all-in-one platform where they can advertise their services and be easily found by
                    entrepreneurs.
                </p>
                <p>
                    Our mission is to drive local industry and innovation with our easy to use smart manufacturer search, helping entrepreneurs to find suppliers with
                    ease.
                </p>
                <p>
                    We understand that you as a business owner have a lot to deal with, so we take care of increasing your digital presence so that you don't waste your
                    time, money, or brain power.
                </p>
            </div>
        </div>
    );
}

export default About;
