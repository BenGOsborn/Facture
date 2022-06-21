export interface Image {
    url: string;
}

export interface SearchHit {
    name: string;
    logo: Image;
    descriptionShort: string;
    manufacturer: string;
    slogan?: string;
}
