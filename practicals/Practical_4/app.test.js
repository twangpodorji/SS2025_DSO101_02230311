const request = require("supertest");
const app = require("./app");

describe("Application Endpoints", () => {
  it("should return a greeting message on GET /", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("Hello World from Jenkins CI/CD!");
  });

  it("should return a health status on GET /health", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toEqual("OK");
  });
});
