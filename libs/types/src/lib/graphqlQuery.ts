import { z } from "zod";

export const GraphQLImageSchema = z.object({
    data: z.object({
        attributes: z.object({
            url: z.string(),
        }),
    }),
});

export type GraphQLImageType = z.infer<typeof GraphQLImageSchema>;

export const GraphQLImagesSchema = z.object({
    data: z.array(
        z.object({
            attributes: z.object({
                url: z.string(),
            }),
        })
    ),
});

export type GraphQLImagesType = z.infer<typeof GraphQLImageSchema>;

export const FindManufacturerCardQuerySchema = z.object({
    manufacturers: z.object({
        data: z.array(
            z.object({
                attributes: z.object({
                    name: z.string(),
                    descriptionShort: z.string(),
                    manufacturer: z.string(),
                    slogan: z.string().nullable(),
                    color: z.string(),
                    logo: GraphQLImageSchema,
                    thumbnail: GraphQLImageSchema,
                    type: z.array(z.object({ type: z.string() })),
                }),
            })
        ),
        meta: z.object({
            pagination: z.object({
                pageCount: z.number(),
            }),
        }),
    }),
});

export type FindManufacturerCardQueryType = z.infer<typeof FindManufacturerCardQuerySchema>;

export const FindManufacturerCardQueryVariablesSchema = z.object({
    pageSize: z.number(),
    page: z.number(),
});

export type FindManufacturerCardQueryVariablesType = z.infer<typeof FindManufacturerCardQueryVariablesSchema>;

export const FindManufacturersQuerySchema = z.object({
    manufacturers: z.object({
        data: z.array(
            z.object({
                attributes: z.object({
                    manufacturer: z.string(),
                }),
            })
        ),
    }),
});

export type FindManufacturersQueryType = z.infer<typeof FindManufacturersQuerySchema>;

export const FindManufacturerQuerySchema = z.object({
    manufacturers: z.object({
        data: z.array(
            z.object({
                attributes: z.object({
                    name: z.string(),
                    descriptionShort: z.string(),
                    descriptionLong: z.string(),
                    dateEstablished: z.string().nullable(),
                    color: z.string(),
                    slogan: z.string().nullable(),
                    manufacturer: z.string(),
                    thumbnail: GraphQLImageSchema,
                    display: GraphQLImagesSchema,
                    logo: GraphQLImageSchema,
                    location: z.array(z.object({ latitude: z.number(), longitude: z.number(), address: z.string(), label: z.string() })),
                    openingTime: z.array(z.object({ day: z.number(), openTime: z.string(), closeTime: z.string() })),
                    email: z.array(z.object({ email: z.string(), label: z.string() })),
                    phoneNo: z.array(z.object({ phoneNo: z.string(), label: z.string() })),
                    social: z.array(z.object({ platform: z.string(), link: z.string() })),
                    type: z.array(z.object({ type: z.string() })),
                    fax: z.array(z.object({ fax: z.string(), label: z.string() })),
                }),
            })
        ),
    }),
});

export type FindManufacturerQueryType = z.infer<typeof FindManufacturerQuerySchema>;

export const FindManufacturerQueryVariablesSchema = z.object({ manufacturer: z.string() });

export type FindManufacturerQueryVariablesType = z.infer<typeof FindManufacturerQueryVariablesSchema>;
