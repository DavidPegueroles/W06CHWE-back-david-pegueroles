const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("..");
const databaseConnection = require("../../database");
const Robot = require("../../database/models/Robot");

let server;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const robotsDatabase = server.getUri();

  await databaseConnection(robotsDatabase);
});

beforeEach(async () => {
  await Robot.create({
    name: "Luis",
    url: "http://example.com",
    characteristics: {
      velocity: 1,
      resistance: 1,
      creation_date: "2022-02-04",
    },
  });

  await Robot.create({
    name: "Marta",
    url: "http://example.com",
    characteristics: {
      velocity: 2,
      resistance: 2,
      creation_date: "2022-02-04",
    },
  });
});

afterEach(async () => {
  await Robot.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

describe("Given a robots endpoint", () => {
  describe("When it receives a GET request", () => {
    test("Then it should respond with a 200 status code and a list of robots", async () => {
      const { body } = await request(app).get("/robots").expect(200);

      expect(body.robots).toHaveLength(2);
    });
  });

  describe("When it receives a POST request", () => {
    test("Then it should respond with a 404 status code", async () => {
      const errorMessage = "Resource not found";

      const { body } = await request(app).post("/robots").expect(404);

      expect(body.error).toBe(errorMessage);
    });
  });
});
