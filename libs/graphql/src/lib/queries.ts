import { gql } from "@apollo/client";

export const findManufacturer = gql`
    query findManufacturer($id: ID!) {
        manufacturer(id: $id) {
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
                }
            }
        }
    }
`;

export const findManufacturers = gql`
    query findManufacturers {
        manufacturers {
            data {
                id
            }
        }
    }
`;
