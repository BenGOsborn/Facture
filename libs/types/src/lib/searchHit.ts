import { ImageDisplay } from "./manufacturer";

export interface SearchHit {
    name: string;
    color: string;
    logo: ImageDisplay;
    descriptionShort: string;
    manufacturer: string;
    slogan?: string;
    type?: string[];
    thumbnail: ImageDisplay;
}
