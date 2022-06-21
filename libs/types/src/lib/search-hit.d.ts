import { Image } from "./manufacturer";

export interface SearchHit {
    name: string;
    logo: Image;
    descriptionShort: string;
    manufacturer: string;
    slogan?: string;
}
