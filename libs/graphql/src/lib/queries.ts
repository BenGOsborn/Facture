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
                                width
                                height
                            }
                        }
                    }
                    display {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    logo {
                        data {
                            attributes {
                                url
                                width
                                height
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
