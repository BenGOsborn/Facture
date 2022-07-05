export const s3 = {
    getObject: ({ Bucket, Key }: { Bucket: string; Key: string }) => ({
        promise: () => new Promise<{ Body: string }>((res) => res({ Body: "No size" })),
    }),
    upload: ({ Body, Bucket, Key }: { Body: string; Bucket: string; Key: string }) => ({
        promise: () => new Promise<{ Body: string }>((res) => res({ Body })),
    }),
};

export default s3;
