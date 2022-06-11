module.exports = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host: env("DATABASE_HOST", ""),
            port: env.int("DATABASE_PORT", 0),
            database: env("DATABASE_NAME", ""),
            user: env("DATABASE_USER", ""),
            password: env("DATABASE_PASSWORD", ""),
        },
        useNullAsDefault: true,
    },
});
