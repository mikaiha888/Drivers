const { Team } = require("../../src/db");
const { expect } = require("@jest/globals");

const teamData = { name: "Test" };

describe("Team Model", () => {
  it("should create a team with valid attributes", async () => {
    const team = await Team.create(teamData);
    
    expect(team.id).toBeDefined();
    expect(team.name).toBe(teamData.name);
  });

  it("should not create a team with invalid name", async () => {
    await expect(Team.create({ name: "test1" })).rejects.toThrow();
  });
});