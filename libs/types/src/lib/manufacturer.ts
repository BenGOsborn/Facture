export interface ImageDisplay {
    url: string;
}

export interface EmailDisplay {
    email: string;
    label: string;
}

export interface OpeningTimeDisplay {
    day: number;
    openTime: any;
    closeTime: any;
}

export interface PhoneNoDisplay {
    phoneNo: string;
    label: string;
}

export interface SocialDisplay {
    platform: string;
    link: string;
}

export interface LocationDisplay {
    latitude: number;
    longitude: number;
    address: string;
    label: string;
}

export interface ManufacturerDisplay {
    name: string;
    slogan?: string;
    dateEstablished?: any;
    logo: ImageDisplay;
    descriptionShort: string;
    type?: string[];
    color: string;
    email?: EmailDisplay[];
    phoneNo?: PhoneNoDisplay[];
    openingTime?: OpeningTimeDisplay[];
    social?: SocialDisplay[];
    location?: LocationDisplay[];
    descriptionLong: string;
    thumbnail: ImageDisplay;
    display?: ImageDisplay[];
}
