export interface Image {
    url: string;
}

export interface Email {
    email: string;
    label: string;
}

export interface OpeningTime {
    day: number;
    openTime: any;
    closeTime: any;
}

export interface PhoneNo {
    phoneNo: string;
    label: string;
}

export interface Social {
    platform: string;
    link: string;
}

export interface Location {
    latitude: number;
    longitude: number;
    address: string;
    label: string;
}

export interface SearchHit {
    name: string;
    color: string;
    logo: Image;
    descriptionShort: string;
    manufacturer: string;
    slogan?: string;
    type?: string[];
    thumbnail: Image;
}

export interface ManufacturerDisplay {
    name: string;
    slogan?: string;
    dateEstablished?: any;
    logo: Image;
    descriptionShort: string;
    type?: string[];
    color: string;
    email?: Email[];
    phoneNo?: PhoneNo[];
    openingTime?: OpeningTime[];
    social?: Social[];
    location?: Location[];
    descriptionLong: string;
    thumbnail: Image;
    display?: Image[];
}
