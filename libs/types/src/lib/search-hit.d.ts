interface Image {
    width: number;
    height: number;
    url: string;
}

export interface SearchHit {
    name: string;
    logo: Image;
    descriptionShort: string;
    manufacturer: string;
}
