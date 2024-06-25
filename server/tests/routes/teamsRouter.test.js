// const request = require("supertest");
// const app = require("../../src/app");
// const { Team } = require("../../src/db");

// beforeAll(async () => {
//   await Team.bulkCreate([
//     {
//       id: "550e8400-e29b-41d4-a716-446655440000",
//       name: "test",
//     },
//   ]);
// });

// afterAll(async () => {
//   await Team.destroy({ truncate: true });
// });

// describe("Teams Routes", () => {
//   describe("GET /teams", () => {
//     it("should return 200 and an array of teams", async () => {
//       const response = await request(app).get("/teams");

//       expect(response.status).toBe(200);
//       expect(Array.isArray(response.body)).toBe(true);
//       expect(response.body.length).toBeGreaterThan(0);
//     });
//   });

//   describe("GET /teams/:id", () => {
//     it("should return 200 and team data from database for UUID ID", async () => {
//       const response = await request(app).get(
//         "/teams/550e8400-e29b-41d4-a716-446655440000"
//       );

//       expect(response.status).toBe(200);
//       expect(typeof response.body).toBe('object');
//       expect(response.body.id).toBe("550e8400-e29b-41d4-a716-446655440000");
//     });
//   });

//   describe("GET /teams/search", () => {
//     it("should return 200 and an array of searched teams by name", async () => {
//       const response = await request(app).get("/teams/search?name=test");

//       expect(response.status).toBe(200);
//       expect(Array.isArray(response.body)).toBe(true);
//       expect(response.body.length).toBeGreaterThan(0);
//     });
//   });

//   describe("POST /teams", () => {
//     it("should return 201 and created team data", async () => {
//       const response = await request(app).post("/teams").send({ name: test2 });

//       expect(response.status).toBe(201);
//       expect(typeof response.body).toBe('object');
//     });
//   });

//   describe("PUT /teams/:id", () => {
//     it("should return 200 and updated team data from database for UUID ID", async () => {
//       const response = await request(app)
//         .put("/teams/550e8400-e29b-41d4-a716-446655440000")
//         .send({ name: test3 });

//       expect(response.status).toBe(200);
//       expect(typeof response.body).toBe('object');
//       expect(response.body.name).toBe(teamData.name);
//     });
//   });

//   describe("DELETE /teams/:id", () => {
//     it("should return 200 and delete team data from database for UUID ID", async () => {
//       const response = await request(app).delete(
//         "/teams/550e8400-e29b-41d4-a716-446655440000"
//       );

//       expect(response.status).toBe(200);
//       expect(response.body).toEqual({});
//     });
//   });
// });
