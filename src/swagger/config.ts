import expressJSDocSwagger from "express-jsdoc-swagger";

type ConfigType = Parameters<ReturnType<typeof expressJSDocSwagger>>[0];

export const swaggerConfig: ConfigType = {
    info: {
        version: "1.0.0",
        title: "온보딩 회원정보 수정 API Swagger",
        description: "온보딩용 Swagger 입니다",
        contact: {
            name: "프론트 개발자 이동언",
        },
    },
    security: {
        BasicAuth: {
            type: "http",
            scheme: "basic",
        },
    },
    baseDir: process.env.PWD,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: "./**/*.ts",
    // URL where SwaggerUI will be rendered
    swaggerUIPath: "/api-docs",
    // Expose OpenAPI UI
    exposeSwaggerUI: true,
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: false,
    // Open API JSON Docs endpoint.
    apiDocsPath: "/v3/api-docs",
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
    // You can customize your UI options.
    // you can extend swagger-ui-express config. You can checkout an example of this
    // in the `example/configuration/swaggerOptions.js`
    swaggerUiOptions: {},
};
