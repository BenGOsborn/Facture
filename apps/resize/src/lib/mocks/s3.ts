export const s3 = {
    getObject: ({ Bucket, Key }: { Bucket: string; Key: string }) => ({
        promise: () => new Promise<{ Body: string }>((res) => (Bucket === "noSize" ? res({ Body: "No size" }) : res({ Body: "Lol" }))),
    }),
};

export default s3;
