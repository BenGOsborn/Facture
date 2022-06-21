import { gql } from "@apollo/client";

export const findManufacturer = gql`
    query findManufacturer($manufacturer: String!) {
        manufacturers(filters: { manufacturer: { eq: $manufacturer } }) {
            data {
                attributes {
                    name
                    descriptionShort
                    descriptionLong
                    dateEstablished
                    thumbnail {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    display {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    logo {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    location {
                        latitude
                        longitude
                        address
                        label
                    }
                    openingTime {
                        day
                        openTime
                        closeTime
                    }
                    email {
                        email
                        label
                    }
                    phoneNo {
                        phoneNo
                        label
                    }
                    social {
                        platform
                        link
                    }
                    type {
                        type
                    }
                    color
                    slogan
                }
            }
        }
    }
`;

export const findManufacturers = gql`
    query findManufacturers {
        manufacturers {
            data {
                attributes {
                    manufacturer
                }
            }
        }
    }
`;

export const findManufacturerCard = gql`
    query findManufacturerCard {
        manufacturers {
            data {
                attributes {
                    name
                    logo {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    descriptionShort
                    manufacturer
                    slogan
                    type {
                        type
                    }
                    color
                    thumbnail {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;
