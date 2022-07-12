import { RainbowText } from "../../RainbowText";
import { LandingHeading } from "../LandingHeading";

export function About() {
    return (
        <div className="space-y-7">
            <LandingHeading
                subheading="About Us"
                heading={
                    <>
                        What Is <RainbowText>Facture</RainbowText>?
                    </>
                }
            />
            <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto w-4/5 xl:w-3/5">
                <p className="font-medium text-md text-gray-700">
                    Facture was created to provide Australian manufacturers with a <span className="text-gray-900">simple all-in-one</span> platform where they can
                    advertise their services and be easily found by local entrepreneurs.
                </p>
                <p className="font-medium text-md text-gray-700">
                    We are working towards a future where the majority of products sold in Australia are <span className="text-gray-900">made in Australia</span>.
                </p>
                <p className="font-medium text-md text-gray-700">
                    Our mission is to <span className="text-gray-900">drive Australian local industry</span> and innovation with our easy to use smart manufacturer
                    search, helping local entrepreneurs to <span className="text-gray-900">find suppliers with ease</span>.
                </p>
                <p className="font-medium text-md text-gray-700">
                    We understand that you as a business owner have a lot to deal with, so we take care of{" "}
                    <span className="text-gray-900">increasing your digital presence</span> so that you don't waste your time, money, or brain power!
                </p>
            </div>
        </div>
    );
}

export default About;
