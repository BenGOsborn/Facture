import { RainbowText } from "../../RainbowText";

export function About() {
    return (
        <div className="text-center space-y-14">
            <div className="space-y-3">
                <p className="text-gray-700 font-bold text-md">About Us</p>
                <h2 className="text-3xl font-bold text-gray-900">
                    What Is <RainbowText>Facture</RainbowText>?
                </h2>
            </div>
            <div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 auto-rows-max auto-cols-max mx-auto w-4/5">
                <p className="font-medium text-md text-gray-700">
                    Facture was created to provide manufacturers with a simple all-in-one platform where they can advertise their services and be easily found by
                    entrepreneurs.
                </p>
                <p className="font-medium text-md text-gray-700">
                    Our mission is to drive local industry and innovation with our easy to use smart manufacturer search, helping entrepreneurs to find suppliers with
                    ease.
                </p>
                <p className="font-medium text-md text-gray-700">
                    We understand that you as a business owner have a lot to deal with, so we take care of increasing your digital presence so that you don't waste your
                    time, money, or brain power.
                </p>
            </div>
        </div>
    );
}

export default About;
