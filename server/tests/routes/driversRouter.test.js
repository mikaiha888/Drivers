const request = require("supertest");
const express = require("express");
const { Driver } = require("../../src/db");
const {
  getAllDrivers,
  getDriverById,
  getDriversByName,
} = require("../../src/handlers/drivers-handler");

const app = express();
app.get("/drivers/search", getDriversByName);
app.get("/drivers", getAllDrivers);
app.get("/drivers/:id", getDriverById);
// app.post("/drivers")
// app.put("/drivers/:id")
// app.delete("/drivers:id")

beforeAll(async () => {
  await Driver.create({
    id: "550e8400-e29b-41d4-a716-446655440000",
    firstName: "one",
    lastName: "test",
    dob: "1990-01-01",
    nationality: "American",
    description: "Experienced driver",
    image: "one_test.jpg",
  });
});

afterAll(async () => {
  await Driver.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});

describe("Drivers Routes", () => {
  describe("GET /drivers", () => {
    it("should return 200 and an array of drivers", async () => {
      const response = await request(app).get("/drivers");

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /drivers/:id", () => {
    it("should return 200 and driver data from external API for numeric ID", async () => {
      const response = await request(app).get("/drivers/1");

      expect(response.status).toBe(200);
      expect(typeof response.body === "object").toBe(true);
      expect(response.body.id).toBe("1");
    });

    it("should return 200 and driver data from database for UUID ID", async () => {
      const response = await request(app).get(
        "/drivers/550e8400-e29b-41d4-a716-446655440000"
      );

      expect(response.status).toBe(200);
      expect(typeof response.body).toBe("object");
      expect(response.body.id).toBe("550e8400-e29b-41d4-a716-446655440000");
    });
  });

  describe("GET /drivers/search", () => {
    it("should return 200 and an array of searched drivers by name", async () => {
      const response = await request(app).get("/drivers/search?name=one");

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe("POST /drivers", () => {
    it("should return 201 and created driver data", async () => {
      const driverData = {
        firstName: "three",
        lastName: "test",
        dob: "1990-03-03",
        nationality: "American",
        description: "Experienced driver",
        image: "three_test.jpg",
      };

      const response = await request(app).post("/drivers").send(driverData);

      expect(response.status).toBe(201);
      expect(typeof response.body).toBe("object");
    });
  });

  describe("PUT /drivers/:id", () => {
    it("should return 200 and updated driver data from database for UUID ID", async () => {
      const driverData = {
        firstName: "four",
        lastName: "test",
        dob: "1990-04-04",
        nationality: "American",
        description: "Experienced driver",
        image: "four_test.jpg",
      };

      const response = await request(app)
        .put("/drivers/550e8400-e29b-41d4-a716-446655440000")
        .send(driverData);

      expect(response.status).toBe(200);
      expect(typeof response.body).toBe("object");
      expect(response.body.name).toBe(driverData.name);
    });
  });

  describe("DELETE /drivers/:id", () => {
    it("should return 200 and delete driver data from database for UUID ID", async () => {
      const response = await request(app).delete(
        "/drivers/550e8400-e29b-41d4-a716-446655440000"
      );

      expect(response.status).toBe(200);
      expect(response.body).toEqual({});
    });
  });
});
