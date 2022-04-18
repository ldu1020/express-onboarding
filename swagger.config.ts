import swaggerJSDoc from "swagger-jsdoc";

export const swaggerConfig: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "온보딩 Api",
            version: "1.0.0",
        },
    },
    apis: ["./src/routes/*.ts"], // files containing annotations as above
};
