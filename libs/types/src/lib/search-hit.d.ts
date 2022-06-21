import { Image } from "./manufacturer";

export interface SearchHit {
    name: string;
    color: string;
    logo: Image;
    descriptionShort: string;
    manufacturer: string;
    slogan?: string;
    type?: string[];
}
